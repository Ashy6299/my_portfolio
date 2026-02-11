import React, { useState } from "react";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";

const techItems = [
  { name: "Full Stack Developer" },
  { name: "Node.js" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "Vanilla JS" },
  { name: "Vue.js" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Angular" },
  { name: "Express.js" },
  { name: "UI/UX Designer" },
  { name: "TypeScript" },
  { name: "Django" },
  { name: "Computer Engineer" },
];

const colors = [
  "#FF0000",
  "#CD5C5C",
  "#00FF00",
  "#0000FF",
  "#00FFFF",
  "#FF00FF",
  "#000000",
  "#FFC0CB",
  "#A52A2A",
  "#F0E68C",
  "#8B4513",
  "#4169E1",
  "#7FFF00",
  "#FF6347",
  "#8A2BE2",
  "#DCDCDC",
  "#00CED1",
  "#FFD700",
  "#9400D3",
];

const TechStack = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, techItems.length));
  };

  return (
    <Box
      component="section"
      id="tech-stack"
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
            Tech Stack
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

        {/* Tech grid */}
        <Grid container spacing={3}>
          {techItems.slice(0, visibleCount).map((item, index) => {
            const color = colors[index % colors.length];

            return (
              <Grid item xs={12} sm={6} md={4} key={item.name}>
                <Paper
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    p: 2.5,
                    bgcolor: "#12232e",
                    color: "common.white",
                    boxShadow: 4,
                  }}
                >
                  {/* Number badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -12,
                      left: 16,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: index === 0 ? 700 : 500,
                      ml: 0.5,
                      mt: 1,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Load more */}
        {visibleCount < techItems.length && (
          <Box textAlign="center" mt={4}>
            <Button
              variant="outlined"
              onClick={loadMore}
              sx={{
                borderColor: "#00b894",
                color: "#00b894",
                px: 4,
                py: 1,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#00b894",
                  color: "#fff",
                },
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default TechStack;
