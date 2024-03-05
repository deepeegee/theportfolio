import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Experience from './components/Experience/Experience';
import Typed from './components/Typed';
import ScrollToTopButton from './components/Scrolltotop';
import Footer from './pages/Footer';
import { theme, darkTheme } from './Theme/Theme';
import MediaCard from './components/Experience/Cards/cards';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <CssBaseline />
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Hero />
        <Experience darkMode={darkMode} />
        <ScrollToTopButton />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
