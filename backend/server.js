// server.js - Main Express application with Firebase
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Firebase Admin SDK for backend operations
const admin = require("firebase-admin");

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase Admin with service account
// You'll need to generate a service account key from Firebase console
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
});

// Get Firestore database
const db = admin.firestore();

// API endpoint to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Create contact entry in Firestore
    const contactsRef = db.collection("contacts");
    await contactsRef.add({
      name,
      email,
      subject,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

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

    // Using Firebase Cloud Functions (or you can also use Nodemailer here)
    // This requires setting up Firebase Functions separately
    // For demonstration purposes, we'll save the notification to a separate collection
    const notificationsRef = db.collection("admin-notifications");
    await notificationsRef.add({
      subject: subject || "New Contact Form Submission",
      clientName,
      clientEmail,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      read: false,
    });

    // Option: Send email using Firebase Extensions or a third-party service
    // Firebase has extensions like "Trigger Email" that can be set up to send emails
    // based on Firestore document creation

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
