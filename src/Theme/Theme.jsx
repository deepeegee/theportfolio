// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9A98B5", // Updated primary color
    },
    secondary: {
      main: "#E06C75", // Complementary color for secondary
    },
    background: {
      default: "#F2E6CC",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    fontFamily: "Rethink Sans, sans-serif", // Use "Rethink Sans" as the font family
    fontWeight: 400,
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 960, // Medium devices (desktops)
      lg: 1280, // Large devices
      xl: 1920, // Extra large devices
    },
  },
});

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#6D69A9", // Adjusted primary color for dark mode
    },
    secondary: {
      main: "#FF8C99", // Adjusted secondary color for dark mode
    },
    background: {
      default: "#121212", // Dark background color for dark mode
    },
    text: {
      primary: "#fff", // Light text color for dark mode
    },
  },
  typography: {
    fontFamily: "Rethink Sans, sans-serif", // Font family remains the same
    fontWeight: 400,
  },
  // Add more dark theme properties as needed
});

export { theme, darkTheme };
