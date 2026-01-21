import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am your virtual assistant. How can I help you today?", isBot: true }
  ]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickQuestions = [
    { text: "💰 What is the starting price?", answer: "Our plots start from ₹2,500/sq.ft in prime locations. We have options for every budget!" },
    { text: "📍 Where is the location?", answer: "We are located in the Greater Noida Extension, just 10 mins from the upcoming Metro Station." },
    { text: "📅 Can I schedule a visit?", answer: "Absolutely! You can book a VIP site visit. Just call us at +91-98765-43210." },
    { text: "📄 Is it RERA approved?", answer: "Yes, all our projects are 100% RERA approved and bank loan compatible." }
  ];

  const handleQuestion = (q) => {
    // 1. Add User Message
    setMessages(prev => [...prev, { text: q.text, isBot: false }]);
    
    // 2. Simulate AI "Thinking" delay
    setTimeout(() => {
        setMessages(prev => [...prev, { text: q.answer, isBot: true }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      
      {/* 1. The Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
            <motion.button
                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                onClick={() => setIsOpen(true)}
                className="bg-primary hover:bg-primaryHover text-midnight w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
            >
                <MessageSquare size={28} />
                {/* Notification Dot */}
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-midnight"></span>
            </motion.button>
        )}
      </AnimatePresence>

      {/* 2. The Chat Window */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="bg-surface border border-white/10 w-[350px] h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div className="bg-primary p-4 flex justify-between items-center text-midnight">
                    <div className="flex items-center gap-2">
                        <Bot size={20} />
                        <span className="font-bold font-serif">Prime Assistant</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full"><X size={18} /></button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-midnight/50">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[80%] p-3 text-sm rounded-2xl ${msg.isBot ? 'bg-surface border border-white/10 text-white rounded-tl-none' : 'bg-primary text-midnight rounded-tr-none font-medium'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions Area */}
                <div className="p-3 bg-surface border-t border-white/5">
                    <p className="text-[10px] text-muted uppercase tracking-widest mb-2 text-center">Suggested Questions</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {quickQuestions.map((q, i) => (
                            <button 
                                key={i} 
                                onClick={() => handleQuestion(q)}
                                className="text-xs bg-white/5 hover:bg-white/10 text-white border border-white/10 px-3 py-2 rounded-full transition-colors"
                            >
                                {q.text}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;