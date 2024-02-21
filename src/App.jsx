import * as React from 'react';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import Navbar2 from './components/navabr2';
import Typed from './components/Typed';
import Rename from './components/Rename';
import Hero from './pages/Hero';
import ScrollToTopButton from './components/Scrolltotop';
import Experience from './components/Experience/Experience';
import MediaCard from './components/cards';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Typed />
      {/* <HomeNavbar /> */}
      {/* <Rename /> */}
      <ScrollToTopButton />
      <MediaCard/>

    </>
  )
}

export default App
