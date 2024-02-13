import {
    Backdrop,
    Box,
    Button,
    Container,
    Stack,
    Typography,
  } from "@mui/material";
//   import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
//   import { navMenu } from "../utils/navLinks";
  import { ArrowRightAlt } from "@mui/icons-material";
  import MenuIcon from "@mui/icons-material/Menu";
  
  export default function Navbar2() {
    const navigate = useNavigate();
  
    // const [navOpen, setNavOpen] = useState(false);
    // const [anchorEl, setAnchorEl] = useState<(HTMLElement | null)[]>([]);
  
    // const handleClick =
    //   (index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    //     const newAnchorEl: (HTMLElement | null)[] = [...anchorEl];
    //     newAnchorEl[index] = event.currentTarget;
    //     setAnchorEl(newAnchorEl);
    //   };
  
    // const handleClose = (index: number) => () => {
    //   const newAnchorEl: (HTMLElement | null)[] = [...anchorEl];
    //   newAnchorEl[index] = null;
    //   setAnchorEl(newAnchorEl);
    // };
  
    return (
      <>
        <Box
          component={"nav"}
          boxShadow={"0px 4px 30px 0px rgba(0, 0, 0, 0.02)"}
          position={"sticky"}
          top={0}
          left={0}
          zIndex={5}
          sx={{ backdropFilter: "blur(15px)" }}
        >
          <Container maxWidth="lg">
            <Stack
              py={{ xs: 1.5, sm: 2 }}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack
                py={{ xs: 2, md: 0 }}
                direction={{ xs: "column", md: "row" }}
                gap={"1.5rem"}
                alignItems={"center"}
                position={{ xs: "fixed", md: "static" }}
                top={65}
                left={0}
                width={{ xs: "100%", md: "auto" }}
                bgcolor={{ xs: "white", md: "transparent" }}
                zIndex={6}
                sx={{
                  transition: "transform .3s",
                  transform: {
                    xs: navOpen ? "translateY(0%)" : "translateY(-200%)",
                    md: "none",
                  },
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    borderRadius: "12px",
                    textTransform: "capitalize",
                    display: { md: "none", xs: "inline-flex" },
                  }}
                  onClick={() => {
                    setNavOpen(false);
                    navigate("/auth/signin");
                  }}
                >
                  <Typography variant="subtitle1">Login</Typography>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "12px",
                    textTransform: "none",
                    display: { md: "none", xs: "inline-flex" },
                  }}
                  endIcon={<ArrowRightAlt />}
                  onClick={() => {
                    setNavOpen(false);
                    navigate("/auth/signup");
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    color={"white"}
                  >
                    Sign up
                  </Typography>
                </Button>
              </Stack>
              <Stack direction={"row"} gap={"1rem"} alignItems={"center"}>
                <Button
                  color="secondary"
                  sx={{
                    borderRadius: "12px",
                    textTransform: "capitalize",
                    display: { xs: "none", md: "inline-flex" },
                  }}
                  onClick={() => navigate("/auth/signin")}
                >
                  <Typography variant="subtitle1" fontWeight={500}>
                    Login
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "12px",
                    textTransform: "none",
                    display: { xs: "none", md: "inline-flex" },
                  }}
                  onClick={() => navigate("/auth/signup")}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    color={"white"}
                  >
                    Sign Up
                  </Typography>
                </Button>
                <Button
                  sx={{
                    minWidth: "fit-content",
                    display: { xs: "block", md: "none" },
                  }}
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <MenuIcon sx={{ fontSize: "2rem" }} />
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </>
    );
  }
  