import * as React from 'react';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import Navbar2 from './components/navabr2';

import Rename from './components/Rename';
import Hero from './pages/Hero';
import ScrollToTopButton from './components/Scrolltotop';
import Stacks from './components/Stacks';



function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <br/>
      <Stacks />
      <h1>Let's Cook</h1> 
      <Button variant="outlined">On the Gas</Button>;
      <h1>Let's jasffffffffffffffffffffffffffffffffffflkmknsDV<br/>hhhhhsfffffffffffflkCook</h1> 

      {/* <HomeNavbar /> */}
      {/* <Rename /> */}
      <ScrollToTopButton />


    </>
  )
}

export default App
