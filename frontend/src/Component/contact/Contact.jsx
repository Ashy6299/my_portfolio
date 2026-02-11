// src/Component/contact/Contact.jsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
  CircularProgress,
  Paper,
  Avatar,
} from "@mui/material";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import image from "../../Images/a.jpeg";

// You can use env vars (recommended)
// Create a .env file with:
// REACT_APP_EMAILJS_SERVICE_ID=xxxx
// REACT_APP_EMAILJS_TEMPLATE_ID=xxxx
// REACT_APP_EMAILJS_PUBLIC_KEY=xxxx
const SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobType: "Full-time",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "", // "success" | "error"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (status.message) {
      setStatus({ loading: false, message: "", type: "" });
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        loading: false,
        message: "Please fill all required fields.",
        type: "error",
      });
      return;
    }

    // Simple check to avoid silent failure if IDs not set
    if (
      !SERVICE_ID ||
      !TEMPLATE_ID ||
      !PUBLIC_KEY ||
      SERVICE_ID === "YOUR_SERVICE_ID"
    ) {
      setStatus({
        loading: false,
        message:
          "Email service is not configured. Please set your EmailJS IDs in the code or .env file.",
        type: "error",
      });
      return;
    }

    try {
      setStatus({ loading: true, message: "", type: "" });

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          job_type: formData.jobType,
          message: formData.message,
          // Optional: you can add more template variables if you define them in EmailJS
          // to_email: "your-email@example.com",
        },
        PUBLIC_KEY,
      );

      setStatus({
        loading: false,
        message: "Message sent successfully!",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        jobType: "Full-time",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        loading: false,
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        bgcolor: "#0f2027",
        color: "common.white",
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        maxWidth="lg"
        mx="auto"
      >
        {/* Left Side: Info + Image */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              gap: 3,
            }}
          >
            <Avatar
              src={image}
              alt="Contact portrait"
              variant="rounded"
              sx={{
                width: { xs: 180, sm: 220 },
                height: { xs: 180, sm: 220 },
                boxShadow: 5,
                borderRadius: 3,
              }}
            />

            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: "bold", color: "#00b894", mb: 1 }}
              >
                Contact Me
              </Typography>
              <Typography variant="body1" sx={{ color: "#ddd", mb: 1 }}>
                Have a project in mind, need a full-stack developer, or want to
                discuss a collaboration?
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa" }}>
                I’m open to Full-time, Part-time, Contract, and Freelance
                opportunities. Send me a message and I’ll get back to you as
                soon as possible.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Form */}
        <Grid item xs={12} md={7}>
          <Paper
            component="form"
            onSubmit={sendEmail}
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              bgcolor: "background.paper",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}
            >
              Send a Message
            </Typography>

            {status.message && (
              <Alert
                severity={status.type === "error" ? "error" : "success"}
                sx={{ mb: 2 }}
              >
                {status.message}
              </Alert>
            )}

            <TextField
              label="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Email *"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              select
              label="Job Type"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              fullWidth
              margin="normal"
            >
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Freelance">Freelance</MenuItem>
            </TextField>

            <TextField
              label="Message *"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />

            <Box sx={{ mt: 3, textAlign: "right" }}>
              <Button
                type="submit"
                variant="contained"
                disabled={status.loading}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  backgroundColor: "#00b894",
                  "&:hover": {
                    backgroundColor: "#00a183",
                  },
                }}
                startIcon={
                  status.loading ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : (
                    <RiSendPlaneFill />
                  )
                }
              >
                {status.loading ? "Sending..." : "Send"}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
