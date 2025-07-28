import React from "react";
import { AppBar, Toolbar, Button, Box, Stack, useMediaQuery } from "@mui/material";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    scrollToSection('about');
  };

  const handleProjectsClick = () => {
    scrollToSection('experience');
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <AppBar
      position="sticky"
      style={{
        background: darkMode ? "rgba(36, 33, 36, 0.2)" : "rgba(255, 255, 240, 0.2)",
        color: darkMode ? "#fff" : "#333",
        borderRadius: "40px",
        width: "80%",
        margin: "auto",
        marginTop: "10px",
      }}
      sx={{ backdropFilter: "blur(15px)", margin: "10px", height: "100%" }}
      boxShadow={"0px 4px 30px 0px rgba(0, 0, 0, 0.02)"}
    >
      <Box maxWidth="xl">
        <Toolbar>
          <Stack
            direction={"row"}
            flex={1}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              onClick={handleHomeClick}
              sx={{
                fontWeight: 900,
                fontSize: "1rem",
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#C61036",
                  left: 0,
                  bottom: 0,
                  transform: "translateX(-100%)",
                  transition: "transform 0.3s ease",
                },
                "&:hover": {
                  "&::before": {
                    transform: "translateX(0%)",
                  },
                },
              }}
              color="inherit"
            >
              Home
            </Button>
            <Button
              onClick={handleAboutClick}
              sx={{
                fontWeight: 900,
                fontSize: "1rem",
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#C61036",
                  left: 0,
                  bottom: 0,
                  transform: "translateX(-100%)",
                  transition: "transform 0.3s ease",
                },
                "&:hover": {
                  "&::before": {
                    transform: "translateX(0%)",
                  },
                },
              }}
              color="inherit"
            >
              About
            </Button>
            <Button
              onClick={handleProjectsClick}
              sx={{
                fontWeight: 900,
                fontSize: "1rem",
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#C61036",
                  left: 0,
                  bottom: 0,
                  transform: "translateX(-100%)",
                  transition: "transform 0.3s ease",
                },
                "&:hover": {
                  "&::before": {
                    transform: "translateX(0%)",
                  },
                },
              }}
              color="inherit"
            >
              Projects
            </Button>
            <Button
              onClick={handleContactClick}
              sx={{
                fontWeight: 900,
                fontSize: "1rem",
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#C61036",
                  left: 0,
                  bottom: 0,
                  transform: "translateX(-100%)",
                  transition: "transform 0.3s ease",
                },
                "&:hover": {
                  "&::before": {
                    transform: "translateX(0%)",
                  },
                },
              }}
              color="inherit"
            >
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
