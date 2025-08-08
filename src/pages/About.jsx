import React, { useRef, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const intro1 = useRef(null);

  useEffect(() => {
    const el = intro1;
    gsap.fromTo(
      el.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 4, ease: "power3.out" }
    );
    ScrollTrigger.create({
      trigger: el.current,
      start: "top center",
      end: "bottom center",
      scrub: true,
    });
  }, []);

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "39px" }} id="about">
        <Grid container spacing={1}>
          {/* About Content */}
          <Grid item xs={12}>
            <Stack
              ref={intro1}
              pt={{ xs: 8, md: 4 }}
              gap={3}
              textAlign={{ xs: "center", md: "center" }}
              padding="50px"
              alignItems="center"
            >
              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
                align="center"
                lineHeight={1.2}
              >
                About Me
              </Typography>
              <Typography
  variant="h5"
  fontWeight={400}
  align="center"
  fontSize={{ xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }}
  lineHeight={1.6}
  maxWidth="800px"
  color="text.secondary"
>
  I work across the stack, but my real passion lies in building thoughtful and accessible user interfaces. 
  I enjoy crafting experiences that are not just functional, but clear, responsive, and easy to use.  
  Whether it's designing a new feature or refining the small details, I aim to bring intention and usability to every project I touch.
</Typography>

              <Typography
                variant="h5"
                fontWeight={400}
                align="center"
                fontSize={{ xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }}
                lineHeight={1.6}
                maxWidth="800px"
                color="text.secondary"
              >
                Fast-forward to today, and I've had the privilege of building software for 
                various projects. My main focus these days is building accessible, inclusive 
                products and digital experiences.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
} 