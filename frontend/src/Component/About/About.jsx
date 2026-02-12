import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ProfilePic from "../../Images/a.png";

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#0f2027",
        color: "#fff",
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
            alt="Portrait of Ashraff Adams"
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
              backgroundColor: "#00b894",
              width: "60px",
              height: "3px",
              mb: 3,
            }}
          />

          {/* Intro */}
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify" }}
          >
            Hello i am <b>Adams Ashraff Abubakar</b>, a passionate and
            solution‑driven IT professional with a strong background in Computer
            Engineering, Software Development, Networking, and Database
            Management. I specialize in building scalable, secure, and
            user‑focused web applications using modern technologies.
          </Typography>

          {/* Core stack / architecture */}
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify" }}
          >
            My core expertise lies in React.js for frontend development and
            Node.js with Express for backend systems. I design structured
            architectures using controllers, modular code organization, and
            clean API integrations. I enjoy creating complete systems—from
            authentication and admin dashboards to analytics engines and
            real‑time data handling.
          </Typography>

          {/* Beyond development – bullet list */}
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: 600, mt: 2, mb: 1 }}
          >
            Beyond development, I have hands‑on experience in:
          </Typography>

          <List dense sx={{ color: "#ccc", pl: 2 }}>
            <ListItem sx={{ py: 0 }}>
              <ListItemText primary="Network configuration and troubleshooting" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemText primary="System setup and large‑scale OS deployment" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemText primary="Database design, optimization, and MongoDB aggregation" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemText primary="Authentication and role‑based access control" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemText primary="Backend analytics and reporting systems" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemText primary="IT infrastructure troubleshooting and system administration" />
            </ListItem>
          </List>

          {/* Projects summary */}
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: 600, mt: 3, mb: 1 }}
          >
            Selected Projects:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Hospital Management System"
                secondary="With pharmacy and accounting modules, role‑based access, and operational workflows."
                primaryTypographyProps={{
                  sx: { color: "#fff", fontWeight: 500 },
                }}
                secondaryTypographyProps={{ sx: { color: "#ccc" } }}
              />
            </ListItem>

            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Pure Water Factory Platform"
                secondary="Ordering system, payment integration, admin dashboard, and business analytics."
                primaryTypographyProps={{
                  sx: { color: "#fff", fontWeight: 500 },
                }}
                secondaryTypographyProps={{ sx: { color: "#ccc" } }}
              />
            </ListItem>

            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Voice‑to‑Text Web Application"
                secondary="Built with Whisper; includes speaker identification and export to multiple formats."
                primaryTypographyProps={{
                  sx: { color: "#fff", fontWeight: 500 },
                }}
                secondaryTypographyProps={{ sx: { color: "#ccc" } }}
              />
            </ListItem>

            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Admin Panels & Analytics Dashboards"
                secondary="Real‑time analytics, reporting, and role‑based management."
                primaryTypographyProps={{
                  sx: { color: "#fff", fontWeight: 500 },
                }}
                secondaryTypographyProps={{ sx: { color: "#ccc" } }}
              />
            </ListItem>
          </List>

          {/* Closing statement */}
          <Typography
            variant="body1"
            sx={{ color: "#ccc", lineHeight: 1.8, textAlign: "justify", mt: 2 }}
          >
            I am highly detail‑oriented and performance‑focused. I believe in
            clean code, structured architecture, and solving problems from both
            a technical and user‑experience perspective. Whether it’s debugging
            a server issue, designing a dashboard, automating workflows, or
            deploying systems at scale, I approach every challenge logically and
            efficiently. My goal is to build intelligent, scalable systems that
            solve real‑world problems while maintaining high standards of
            performance and security.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
