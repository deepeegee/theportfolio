import React, { useRef, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const intro1 = useRef(null);

  useEffect(() => {
    const el = intro1;
    gsap.fromTo(
      el.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 4, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "39px" }}>
        <Stack
          ref={intro1}
          pt={{ xs: 12, md: 8 }}
          gap={4}
          alignItems="center"
          justifyContent="center"
          minHeight="60vh"
          textAlign="center"
          padding="50px"
        >
          <Typography
            variant="h2"
            fontWeight={700}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            color="primary"
            marginBottom={2}
            lineHeight={1.2}
          >
            Blog
          </Typography>
          
          <Typography
            variant="h5"
            fontWeight={400}
            fontSize={{ xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }}
            lineHeight={1.6}
            maxWidth="600px"
            marginBottom={4}
            color="text.secondary"
          >
            Nothing to see here yet.
          </Typography>
          
          <Typography
            variant="body1"
            fontSize={{ xs: "1rem", sm: "1.05rem", md: "1.1rem" }}
            color="text.secondary"
            maxWidth="500px"
            lineHeight={1.6}
          >
            Future blog posts about web development, technology insights, and project lessons learned will appear here.
          </Typography>
          
          <Button
            variant="outlined"
            size="large"
            sx={{
              marginTop: 4,
              borderColor: "#C61036",
              color: "#C61036",
              "&:hover": {
                borderColor: "#C61036",
                backgroundColor: "rgba(198, 16, 54, 0.1)",
              },
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Home
          </Button>
        </Stack>
      </Container>
    </>
  );
} 