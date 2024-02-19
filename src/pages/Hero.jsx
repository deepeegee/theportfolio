import {
  Box,
  Container,
  Stack,
  Typography,
  makeStyles,
  Button,
} from "@mui/material";
import HeroBg from "../assets/bggg.png";
import { Link } from "react-router-dom";
import StyledButton from "../components/Button";

export default function Hero() {
  return (
    <>
      <Box
        sx={{ justifyContent: "space-between", display: "flex" }}
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
              Hi, My name is Tosin <br /> I am a Frontend developer
            </Typography>
            <Typography
              variant="h5"
              maxWidth={768}
              fontWeight={400}
              color={"black"}
            >
              When the world gives you bugs, I code them into features.
              <br />
              With a few years of experience in digital product design, I'm
              passionate about creating engaging and functional solutions that
              meet users' needs.
            </Typography>

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
          <br />
          <Stack
            direction={"row"}
            gap={"1.5rem"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* <Link to={"/"}> */}
            <Button
              size="large"
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "12px",
                bgcolor: "black",
              }}
            >
              Get Started
            </Button>
            {/* </Link> */}
            {/* <Link to={"/"}> */}
            {/* <Button
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
            </Button> */}
            {/* </Link> */}
          </Stack>

          <Typography color={"red"} variant="h5">
            7-day trial. No credit card required.
          </Typography>
        </Container>
        <Container sx={{ flex: 1 }}>
          <Stack>
            <img src={HeroBg} alt="" width={400} border={0} />
          </Stack>
        </Container>
      </Box>
      <Stack alignItems={"center"} justifyContent={"center"} padding={"30px"}>
        <Typography color={"red"}>lfggg</Typography>
        <StyledButton text={"Click Me"} link={"/"}></StyledButton>
      </Stack>
    </>
  );
}
