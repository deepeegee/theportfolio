import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HeroBg from "../assets/bggg.png";
import { ReactTyped } from "react-typed";
import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const [key, setKey] = useState(0);
  const restartDelay = 2000

  const restartTyping = () => {
    setTimeout(() => { 
      setKey((prevKey) => prevKey + 1);
     }, restartDelay)
  };
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const iconSize = isSmScreen ? "1em" : "1.4em";

  const intro1 = useRef(null);
  const intro2 = useRef(null);

  useEffect(() => {
    const el = intro1;
    gsap.fromTo(
      el.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 4, ease: "power3.out" }
    );
    const el2 = intro2;
    gsap.fromTo(
      el2.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 4, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "39px" }}>
        <Grid container spacing={1}>
          {/* Typography Container */}
          <Grid item xs={12} md={7}>
            <Stack
              ref={intro1}
              pt={{ xs: 12, md: 4 }}
              gap={3}
              textAlign={{ xs: "center", md: "left" }}
              padding="50px"
            >
              <Typography
                variant="h5"
                fontWeight={500}
                align="left"
                fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.5rem" }}
              >
                Hey there! My name is
              </Typography>
              <Typography
                variant="h2"
                fontWeight={500}
                fontSize={{ xs: "2rem", sm: "2.5rem", md: "2.8rem" }}
                align="left"
              >
                Tosin Sajo.
                <br />I am a {""}
                <Stack style={{ height: "65px" }}>
                  <ReactTyped
                    key={key}
                    backSpeed={45}
                    strings={[
                      "Frontend Developer",
                      "Network Engineer",
                      "Software Developer",
                    ]}
                    typeSpeed={50}
                    onComplete={restartTyping}
                    typedRef={function noRefCheck() {}}
                    style={{ color: "#C61036" }}
                    cursorChar=">"
                    loop
                  />
                </Stack>
              </Typography>
              <Typography
                variant="h5"
                fontWeight={400}
                align="left"
                fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.5rem" }}
              >
                When the world gives you bugs, I code them into features.
                <br />
                With a few years of experience in <i>cheffing</i>, I'm
                passionate about creating engaging and functional solutions that
                meet users' tastes
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ fontSize: iconSize }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ fontSize: iconSize }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      style={{ fontSize: iconSize }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ fontSize: iconSize }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          {/* Image Container */}
          <Grid
            item
            xs={10}
            md={5}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Stack
              ref={intro2}
              pt={{ xs: 4, md: 8 }}
              padding={{ xs: "60px", md: "20px" }}
            >
              <img
                src={HeroBg}
                alt=""
                mx="auto" // Center the image horizontally
                sx={{
                  display: "block",
                  width: { xs: "600px", sm: "100px", md: "200px" }, // Specify different widths
                  marginBottom: { xs: 4, md: 0 },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
