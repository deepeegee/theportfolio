// TwoTextBoxes.jsx

import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";

const TwoTextBoxes = () => {
  const [animate, setAnimate] = useState(false);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  useEffect(() => {
    // Trigger animation on component mount
    setAnimate(true);

    // GSAP animations
    if (animate) {
      gsap.fromTo(
        [box1Ref.current, box2Ref.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.5 }
      );
    }
  }, [animate]);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      padding={{ xs: 3, md: 5 }}
    >
      {/* Text Box 1 - Transition from left to right */}
      <Box
        ref={box1Ref}
        width={{ xs: "100%", md: "45%" }}
        overflow="hidden"
      >
        <Typography variant="h5">
          Box 1: Hey there! My name is Tosin Sajo. I am a Frontend Developer.
        </Typography>
      </Box>

      {/* Text Box 2 - Transition from top to bottom */}
      <Box
        ref={box2Ref}
        width={{ xs: "100%", md: "45%" }}
        overflow="hidden"
      >
        <Typography variant="h5">
          Box 2: When the world gives you bugs, I code them into features.
        </Typography>
      </Box>
    </Box>
  );
};

export default TwoTextBoxes;
