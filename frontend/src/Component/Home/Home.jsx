import React from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import Typewriter from "typewriter-effect";
import MyCv from "./MyCV.pdf";

const Home = () => {
  const handleHireMe = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            mb={1.5}
            sx={{
              letterSpacing: 1,
              fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
            }}
          >
            Hi, I’m{" "}
            <Box component="span" sx={{ color: "#00b894" }}>
              Adams Ashraff Abubakar
            </Box>
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            mb={3}
            sx={{
              minHeight: "1.6em", // prevents layout shift as text changes
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Software Developer",
                  "MERN Stack Developer",
                  "React & Node.js Specialist",
                  "Web Application Engineer",
                  "UI/UX Focused Developer",
                  "Computer and Network Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: "auto",
              mb: 5,
              opacity: 0.9,
              fontSize: { xs: "0.95rem", sm: "1rem" },
            }}
          >
            I build modern, scalable web applications — from business dashboards
            and admin panels to full e-commerce and API-driven platforms.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="outlined"
              onClick={handleHireMe}
              sx={{
                color: "#00b894",
                borderColor: "#00b894",
                px: 4,
                py: 1.2,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#00b894",
                  color: "#fff",
                },
              }}
            >
              Hire Me
            </Button>

            <Button
              variant="contained"
              component="a"
              href={MyCv}
              download="Ashraff_Adams_CV.pdf"
              sx={{
                backgroundColor: "#00b894",
                color: "#fff",
                px: 4,
                py: 1.2,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#019874",
                },
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
