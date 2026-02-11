import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectList from "./ProjectList";

const projects = [
  {
    name: "Pure Water Factory Management System",
    description:
      "A full-stack business platform that allows customers to place water orders, track deliveries, and make payments while admins manage products, orders, users, and sales analytics in real time.",
    projectLink: "#", // replace with live link or GitHub repo when ready
    techUsed: [
      { techName: "React" },
      { techName: "Node.js" },
      { techName: "Express" },
      { techName: "MongoDB" },
      { techName: "JWT Auth" },
      { techName: "Payment Integration" },
    ],
  },
  {
    name: "Hospital Management System",
    description:
      "A role-based hospital system for managing patients, prescriptions, pharmacy inventory, and staff access. Includes doctor and pharmacy modules with real-time stock tracking.",
    projectLink: "#",
    techUsed: [
      { techName: "React" },
      { techName: "Node.js" },
      { techName: "MongoDB" },
      { techName: "REST API" },
      { techName: "Role-based Auth" },
    ],
  },
  {
    name: "Voice-to-Text Web Application",
    description:
      "A web application that converts recorded audio into readable text with speaker identification, editable transcripts, and downloadable summaries in PDF, DOCX, and TXT formats.",
    projectLink: "#",
    techUsed: [
      { techName: "React" },
      { techName: "Whisper AI" },
      { techName: "Node.js" },
      { techName: "File Processing" },
    ],
  },
  {
    name: "Authomated Dynamic multiple email sender app ",
    description:
      "An automated bulk email campaign system that lets you send personalized messages to many recipients at once using dynamic templates with placeholders (e.g., {{name}}, {{plan}}).",
    projectLink: "#",
    techUsed: [
      { techName: "React" },
      { techName: "Whisper AI" },
      { techName: "Node.js" },
      { techName: "File Processing" },
    ],
  },
  {
    name: "Admin Dashboard & Analytics Platform",
    description:
      "An admin panel for tracking users, orders, total revenue, and top-selling products using MongoDB aggregation and real-time API data.",
    projectLink: "#",
    techUsed: [
      { techName: "React" },
      { techName: "Node.js" },
      { techName: "MongoDB Aggregation" },
      { techName: "Chart.js / Recharts" },
    ],
  },
  {
    name: "E-commerce Product & Order System",
    description:
      "A full-featured e-commerce backend and frontend with product management, cart system, order tracking, and admin control panel.",
    projectLink: "#",
    techUsed: [
      { techName: "React" },
      { techName: "Express" },
      { techName: "MongoDB" },
      { techName: "REST API" },
    ],
  },
];

const Project = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        bgcolor: "#0f2027",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: "#00b894", fontWeight: "bold", mb: 1 }}
          >
            Projects
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: "#00b894",
              mx: "auto",
              borderRadius: 1,
            }}
          />
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.name}>
              <ProjectList {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Project;
