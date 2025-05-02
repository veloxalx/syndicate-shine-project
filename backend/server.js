// server.js - Main Express application
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/contact_db")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "your-app-password",
  },
});

// API endpoint to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message, timestamp } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Create and save contact entry to database
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
      timestamp,
    });

    await newContact.save();

    res
      .status(200)
      .json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Contact form submission error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// API endpoint to notify admin about new contact submissions
app.post("/api/notify-admin", async (req, res) => {
  try {
    const { subject, clientName, clientEmail, message } = req.body;

    // Validate required fields
    if (!clientName || !clientEmail || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || "syndicatesoftwaresolutions@gmail.com",
      subject: subject || "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${clientName}</p>
        <p><strong>Email:</strong> ${clientEmail}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <h3>Message:</h3>
        <p>${message}</p>
        <p><em>Sent on: ${new Date().toLocaleString()}</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Admin notification sent" });
  } catch (error) {
    console.error("Admin notification error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send admin notification" });
  }
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
