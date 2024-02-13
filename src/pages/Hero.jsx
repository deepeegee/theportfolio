import { Box, Container, Stack, Typography, makeStyles } from "@mui/material";
import HeroBg from "../assets/bg-img2.jpg";
// import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
    //   minHeight={600}
    //   sx={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
    >
      <Container maxWidth="lg">
        <Stack
          pt={{ xs: 15, md: 10 }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          textAlign={"center"}
        >
          <Typography
            variant="h2"
            fontWeight={500}
            color={"black"}
            fontSize={{ xs: "2.5rem", sm: "3rem", md: "3.2rem" }}
          >
            Hi, My name is Orunesajo Oluwatosin <br /> I am a Frontend developer
          </Typography>
          <Typography
            variant="h4"
            maxWidth={768}
            fontWeight={400}
            color={"black"}
          >
            When the world gives you bugs, I code them into features.
          </Typography>
          {/* <Stack
            direction={"row"}
            gap={"1.5rem"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Link to={"/auth/signup"}>
              <Button
                size="large"
                variant="contained"
                sx={{ textTransform: "none", borderRadius: "12px" }}
              >
                Get Started
              </Button>
            </Link>
            <Link to={"/become-an-affiliate"}>
            <Button
              size="large"
              variant="outlined"
              sx={{
                bgcolor: "white",
                textTransform: "none",
                color: "black",
                borderRadius: "12px",
              }}
            >
              Become an Affiliate
            </Button>
            </Link>
          </Stack> */}
          {/* <Typography color={"grey.200"} variant="body2">
            7-day trial. No credit card required.
          </Typography> */}
          {/* <Box
            mt={2}
            height={{ xs: 250, md: 400 }}
            width={{ xs: "100%", sm: "90%", lg: 1000 }}
            sx={{
              backgroundImage: `url(${HeroBgTwo})`,
              backgroundSize: "cover",
              borderRadius: "16px 16px 0 0",
            }}
          ></Box> */}
        </Stack>
      </Container>
    </Box>
  );
}
