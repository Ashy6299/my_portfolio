import React from "react";
import { Box, Grid, Typography, Divider, Avatar } from "@mui/material";
import ProfilePic from "../../Images/a.jpeg";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "#0f2027",
        color: "#fff",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Image Section */}
        <Grid item xs={12} md={6} textAlign="center">
          <Avatar
            src={ProfilePic}
            alt="Profile Photo"
            variant="rounded"
            sx={{
              width: { xs: "100%", sm: 400 },
              height: "auto",
              mx: "auto",
              boxShadow: 5,
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ color: "#00b894", fontWeight: "bold", mb: 1 }}
          >
            About Me
          </Typography>

          <Divider
            sx={{
              backgroundColor: "#00b894",
              width: "60px",
              height: "3px",
              mb: 3,
            }}
          />

          <Typography
            variant="body1"
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify" }}
          >
            Hello! I'm Adams Ashraff Abubakar, a dynamic and results-driven
            individual with a passion for leveraging data and creativity to
            drive impactful marketing initiative. With a background in
            Mathematics Education from Kogi State University, I bring a unique
            blend of analytical prowess and strategic thinking to the table.
            <br />
            <br />
            My journey in the professional world began as a Data Analyst at SS
            Computers, where I honed my skills in data interpretation and
            analysis. The experience provided me with a solid foundation in
            understanding patterns and trends, which later applied to my roles
            in marketing.
            <br />
            <br />
            Transitioning into the realm of marketing, I served as a Marketing
            Coordinator at Relief Clinic Nagazi, where I spearheaded various
            campaigns aimed at raising awareness and engagement. Here, I
            discovered my knack for crafting compelling narratives and engaging
            with diverse audiences.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
