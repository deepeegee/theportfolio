import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme, ThemeProvider } from "@mui/material";
import { theme, darkTheme } from "../../Theme/Theme";

const DrawerMobileNavigation = () => {
  const [open, setOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const currentTheme = useTheme();

  const navLinks = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Projects", path: "/projects" },
    { id: 4, label: "Contact", path: "/contact" },
  ];

  return (
    <ThemeProvider
      theme={currentTheme.palette.mode === "dark" ? darkTheme : theme}
    >
      <React.Fragment>
        {/* Menu Icon Button */}
        {!open && (
          <Box
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
              display: isSmallScreen ? "block" : "none",
            }}
          >
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}

        {/* Drawer */}
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: isSmallScreen ? "100%" : 350,
              padding: 2,
              background:
                currentTheme.palette.mode === "dark"
                  ? "rgba(36, 33, 36, 0.95)"
                  : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          {/* Close Icon */}
          <IconButton
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "rotate(90deg) scale(1.2)" },
            }}
            onClick={() => setOpen(false)}
          >
            <CancelIcon />
          </IconButton>

          {/* Nav Links */}
          <List
            component="nav"
            sx={{
              mt: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            {navLinks.map((link, index) => (
              <ListItemButton
                key={link.id}
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "uppercase",
                  position: "relative",
                  overflow: "hidden",
                  opacity: 0,
                  animation: `fadeIn 0.4s ease forwards`,
                  animationDelay: `${index * 0.1 + 0.2}s`,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#C61036",
                    left: 0,
                    bottom: 0,
                    transform: "translateX(-100%)",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover": {
                    color: "primary.main",
                    "&::before": {
                      transform: "translateX(0%)",
                    },
                  },
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </ListItemButton>
            ))}
          </List>

          <style>
            {`
              @keyframes fadeIn {
                to {
                  opacity: 1;
                  transform: none;
                }
              }
            `}
          </style>
        </Drawer>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default DrawerMobileNavigation;
