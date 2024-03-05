import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { SwitchTextTrack } from "../mui-treasury/switch-textTrack";

const theme = createTheme();

function createButtonStyles(fontWeight, fontSize) {
  return {
    fontWeight,
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
  };
}

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const toggleDarkModeHandler = () => {
    toggleDarkMode(); // Assuming this function toggles darkMode state
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        style={{
          background: darkMode
            ? "rgba(36, 33, 36, 0.2)"
            : "rgba(255, 255, 240, 0.2)",
          color: darkMode ? "#fff" : theme.palette.text.primary,
          borderRadius: "40px",
          width:"80%",
          margin: "auto",
          marginTop: "10px"
        }}
        sx={{ backdropFilter: "blur(15px)", margin: "10px", height:"100%" }}
        boxShadow={"0px 4px 30px 0px rgba(0, 0, 0, 0.02)"}
      >
        <Box maxWidth="xl">
          <Toolbar>
            <Stack
              direction="row"
              flex={1}
              spacing={{
                xs: 1, // Reduce spacing for extra-small screens
                sm: 2, // Reduce spacing for small screens
                md: 4, // Default spacing for medium screens
                lg: 6, // Default spacing for large screens
                xl: 8, // Default spacing for extra-large screens
              }}
              alignItems="center"
              justifyContent="center"
              sx={{
                "& > *": {
                  fontSize: {
                    xs: "0.55rem", // Adjust font size for extra-small screens
                    sm: "0.85rem",   // Adjust font size for small screens
                    md: "0.95rem", // Adjust font size for medium screens
                    lg: "1.5rem", // Adjust font size for large screens
                    xl: "1rem", // Adjust font size for extra-large screens
                  },
                },
              }}
            >
              <Button sx={{ ...createButtonStyles(900) }} color="inherit">
                Home
              </Button>
              <Button sx={{ ...createButtonStyles(750) }} color="inherit">
                About
              </Button>
              <Button sx={{ ...createButtonStyles(750) }} color="inherit">
                Projects
              </Button>
              <Button sx={{ ...createButtonStyles(750) }} color="inherit">
                Contact
              </Button>
              <SwitchTextTrack
                onChange={toggleDarkModeHandler}
                checked={darkMode}
              />
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
