import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero";
import Experience from "./components/Experience/Experience";
import ScrollToTopButton from "./components/Scrolltotop";
import Footer from "./pages/Footer";
import { theme, darkTheme } from "./Theme/Theme";
import { SwitchTextTrack } from "./mui-treasury/switch-textTrack";
import { useMediaQuery } from "@mui/material";
import DrawerMobileNavigation from "./components/Navbar/Sidebar"

function App() {
  const [darkMode, setDarkMode ] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const toggleDarkModeHandler = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }; 
 

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <CssBaseline />
      
      <SwitchTextTrack
        onChange={toggleDarkModeHandler}
        checked={darkMode}
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          
        }}
      />
      {isSmallScreen ? <DrawerMobileNavigation darkMode={darkMode}/> : (
        <Navbar toggleDarkMode={toggleDarkModeHandler} darkMode={darkMode} />
      )}
      <Hero />
      <Experience darkMode={darkMode} />
      <ScrollToTopButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
