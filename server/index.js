const express = require('express');
const ExcelJS = require('exceljs');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const FILE_PATH = path.join(__dirname, 'leads.xlsx');

// --- MIDDLEWARE ---
app.use(cors()); // Allow Frontend to talk to Backend
app.use(express.json()); // Allow parsing JSON data

// --- HELPER FUNCTIONS ---

// Get existing workbook or create a new one if file is missing
const getWorkbook = async () => {
    const workbook = new ExcelJS.Workbook();
    if (fs.existsSync(FILE_PATH)) {
        await workbook.xlsx.readFile(FILE_PATH);
    }
    return workbook;
};

// --- ROUTES ---

// 1. Root Route (Sanity Check)
// This ensures you don't get a 404 if you accidentally open localhost:5000
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; text-align: center; padding: 20px;">
            <h1>✅ Backend Server is Running!</h1>
            <p>API is active on Port ${PORT}</p>
            <p>Please open the Frontend at <a href="http://localhost:5173">http://localhost:5173</a></p>
        </div>
    `);
});

// 2. API to SAVE a new Lead (POST)
app.post('/api/leads', async (req, res) => {
    const { name, phone, project, plotSize, totalPrice } = req.body;

    // Basic Validation
    if (!name || !phone) {
        return res.status(400).json({ error: "Name and Phone are required" });
    }

    try {
        const workbook = await getWorkbook();
        let worksheet = workbook.getWorksheet('Leads');

        // Create Worksheet with Headers if it doesn't exist
        if (!worksheet) {
            worksheet = workbook.addWorksheet('Leads');
            worksheet.columns = [
                { header: 'Date & Time', key: 'timestamp', width: 25 },
                { header: 'Client Name', key: 'name', width: 25 },
                { header: 'Phone Number', key: 'phone', width: 15 },
                { header: 'Project Interest', key: 'project', width: 25 },
                { header: 'Plot Size (sq.ft)', key: 'size', width: 15 },
                { header: 'Estimated Price', key: 'price', width: 20 },
            ];
            // Style the header row (Bold)
            worksheet.getRow(1).font = { bold: true };
        }

        // Add the new row
        worksheet.addRow({
            timestamp: new Date().toLocaleString(),
            name: name,
            phone: phone,
            project: project || 'General Inquiry',
            size: plotSize || 'N/A',
            price: totalPrice || 'N/A'
        });

        // Write to file
        await workbook.xlsx.writeFile(FILE_PATH);
        console.log(`📝 New Lead Saved: ${name} (${phone})`);
        
        res.status(200).json({ message: "Lead saved successfully" });

    } catch (error) {
        console.error("❌ Error saving to Excel:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 3. API to GET all leads (For Admin Dashboard)
app.get('/api/leads', async (req, res) => {
    try {
        const workbook = new ExcelJS.Workbook();
        
        // If file doesn't exist yet, return empty list
        if (!fs.existsSync(FILE_PATH)) {
            return res.json([]); 
        }

        await workbook.xlsx.readFile(FILE_PATH);
        const worksheet = workbook.getWorksheet('Leads');
        
        const leads = [];

        if (worksheet) {
            worksheet.eachRow((row, rowNumber) => {
                // Skip the header row (Row 1)
                if (rowNumber > 1) { 
                    leads.push({
                        timestamp: row.getCell(1).value,
                        name: row.getCell(2).value,
                        phone: row.getCell(3).value,
                        project: row.getCell(4).value,
                        size: row.getCell(5).value,
                        price: row.getCell(6).value,
                    });
                }
            });
        }
        
        // Return leads (reversed so newest show first at the top)
        res.json(leads.reverse());
        
    } catch (error) {
        console.error("❌ Error fetching leads:", error);
        res.status(500).json({ error: "Could not fetch leads" });
    }
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📂 Excel file location: ${FILE_PATH}\n`);
});