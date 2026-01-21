require('dotenv').config(); // Load credentials
const express = require('express');
const ExcelJS = require('exceljs');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer'); // Import Mailer

const app = express();
const PORT = process.env.PORT || 5000;
const FILE_PATH = path.join(__dirname, 'leads.xlsx');

app.use(cors());
app.use(express.json());

// --- EMAIL SETUP ---
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Helper: Send Email
const sendEmailAlert = async (lead) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `🔥 New Lead: ${lead.name}`,
        text: `
        New Client Interest!
        --------------------
        Name: ${lead.name}
        Phone: ${lead.phone}
        Project: ${lead.project}
        Estimated Budget: ${lead.price}
        --------------------
        Check the dashboard or Excel sheet for details.
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("📧 Email Alert Sent!");
    } catch (error) {
        console.error("❌ Email Failed:", error);
    }
};

// --- ROUTES ---

app.get('/', (req, res) => {
    res.send("<h1>Server is Running with Email Alerts! 📧</h1>");
});

app.post('/api/leads', async (req, res) => {
    const { name, phone, project, plotSize, totalPrice } = req.body;

    if (!name || !phone) return res.status(400).json({ error: "Missing fields" });

    try {
        // 1. Save to Excel (Existing Logic)
        const workbook = new ExcelJS.Workbook();
        if (fs.existsSync(FILE_PATH)) {
            await workbook.xlsx.readFile(FILE_PATH);
        }
        let worksheet = workbook.getWorksheet('Leads');
        if (!worksheet) {
            worksheet = workbook.addWorksheet('Leads');
            worksheet.columns = [
                { header: 'Time', key: 'timestamp' },
                { header: 'Name', key: 'name' },
                { header: 'Phone', key: 'phone' },
                { header: 'Project', key: 'project' },
                { header: 'Price', key: 'price' },
            ];
        }
        worksheet.addRow({
            timestamp: new Date().toLocaleString(),
            name, phone, 
            project: project || 'General', 
            price: totalPrice || '-'
        });
        await workbook.xlsx.writeFile(FILE_PATH);

        // 2. SEND EMAIL (New Logic)
        await sendEmailAlert({ name, phone, project, price: totalPrice });

        res.json({ message: "Lead captured & Email sent" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});