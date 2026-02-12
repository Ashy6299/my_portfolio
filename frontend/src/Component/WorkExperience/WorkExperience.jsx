// src/Component/WorkExperience/WorkExperience.jsx
import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

const workExperienceData = [
  {
    title: "Hospital Management System",
    role: "Full Stack Developer",
    year: "2023 – Present",
    description:
      "Designed and developed a hospital management platform with pharmacy and accounting modules, role-based access control, and operational workflows for doctors, pharmacists, and admin staff.",
    techSkills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Role‑based Auth",
    ],
  },
  {
    title: "Pure Water Factory Platform",
    role: "Full Stack Developer",
    year: "2022 – 2023",
    description:
      "Built a factory website and management system with customer ordering, payment integration, delivery tracking, admin dashboard, and sales analytics to support business operations.",
    techSkills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Payment Integration",
      "Admin Dashboard",
    ],
  },
  {
    title: "JAMB Mail App – Automated Email Notification System",
    role: "Full Stack Developer",
    year: "2025",
    description:
      "Developed an automated, dynamic email sending application for JAMB to deliver personalized notifications to thousands of users. The system uses reusable templates with placeholders, merges candidate data, and sends bulk emails securely and efficiently.",
    techSkills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nodemailer",
      "Email Templates",
      "Bulk Email Automation",
    ],
  },
  {
    title: "Voice‑to‑Text Web Application",
    role: "Full Stack Developer",
    year: "2021 – 2022",
    description:
      "Implemented a web application using Whisper for converting recorded audio into text with speaker identification, editable transcripts, and export to PDF, DOCX, and TXT formats.",
    techSkills: [
      "React.js",
      "Node.js",
      "Whisper AI",
      "File Processing",
      "REST API",
    ],
  },
  {
    title: "Admin Panels & Analytics Dashboards",
    role: "Full Stack Developer",
    year: "Ongoing",
    description:
      "Developed admin panels and analytics dashboards with real‑time metrics, role‑based management, reporting views, and MongoDB aggregation for tracking users, orders, and revenue.",
    techSkills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Aggregation",
      "Chart.js / Recharts",
      "Role‑based Management",
    ],
  },
];

const colors = [
  "#F44336",
  "#4169E1",
  "#7FFF00",
  "#FF6347",
  "#8A2BE2",
  "#FFD700",
];

const WorkExperience = () => {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        bgcolor: "#0f2027",
        color: "common.white",
      }}
    >
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: "#00b894", fontWeight: "bold", mb: 1 }}
        >
          Work & Project Experience
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

      <VerticalTimeline lineColor="#ff1042">
        {workExperienceData.map((item, index) => {
          const color = colors[index % colors.length];

          return (
            <VerticalTimelineElement
              key={`${item.title}-${item.year}`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: color, color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid ${color}` }}
              date={item.year}
              iconStyle={{ background: color, color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 600, mb: 0.5 }}
              >
                {item.title}
              </Typography>

              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                {item.role}
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{ mb: 1.5 }}
                aria-label="Tech stack"
              >
                {item.techSkills.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      borderRadius: 1,
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Stack>

              <Typography variant="body2">{item.description}</Typography>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Box>
  );
};

export default WorkExperience;
