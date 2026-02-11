import React from "react";
import { Box, Grid, Typography, Divider, Avatar } from "@mui/material";
import ProfilePic from "../../Images/a.jpeg";

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        bgcolor: "#0f2027",
        color: "common.white",
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* Image Section */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Avatar
            src={ProfilePic}
            alt="Portrait of full-stack developer Ashraff Adams"
            variant="rounded"
            sx={{
              width: { xs: "80%", sm: 320, md: 360 },
              height: "auto",
              mx: "auto",
              boxShadow: 5,
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: "#00b894", fontWeight: "bold", mb: 1 }}
          >
            About Me
          </Typography>

          <Divider
            sx={{
              bgcolor: "#00b894",
              width: "60px",
              height: "3px",
              mb: 3,
            }}
          />

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify" }}
          >
            Hello! I'm <b>Adams Ashraff Abubakar</b>, a Full-Stack Software
            Developer specializing in building modern, scalable, and
            business-focused web applications using React, Node.js, Express, and
            MongoDB.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify" }}
          >
            I design and develop complete systems — from intuitive user
            interfaces to powerful backend APIs — including admin dashboards,
            analytics platforms, e-commerce systems, and workflow automation
            tools. My work focuses on turning complex business needs into
            reliable and easy-to-use software.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify" }}
          >
            I have built real-world projects such as a Pure Water Factory
            management system, Hospital Management Software, Voice-to-Text web
            applications, and Admin Panels with live analytics and role-based
            access. These projects demonstrate my ability to handle full
            application architecture from database to frontend.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify" }}
          >
            I am highly detail-oriented, performance-driven, and always focused
            on writing clean, maintainable, and scalable code. My goal is to
            help businesses grow by providing software solutions that are fast,
            secure, and built for long-term success.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify" }}
          >
            I am also a proficient computer engineer with eight years
            experience.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
