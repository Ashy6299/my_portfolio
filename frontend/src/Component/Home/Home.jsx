import React from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import Typewriter from "typewriter-effect";
import MyCv from "./MyCV.pdf";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography variant="h3" fontWeight="bold" mb={2}>
            Hi, I'm a
          </Typography>

          <Typography variant="h5" mb={4}>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Software Developer",
                  "Mern Stack Developer",
                  "Web Developer",
                  "UI/UX Designer",
                  "Frontend Developer",
                  "Computer Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="outlined"
              sx={{
                color: "#00b894",
                borderColor: "#00b894",
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
              sx={{
                backgroundColor: "#00b894",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#019874",
                },
              }}
              component="a"
              href={MyCv}
              download="Adams CV"
              rel="noreferrer"
            >
              Get Resume
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
