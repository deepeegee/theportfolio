import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme, ThemeProvider } from '@mui/material';
import { theme, darkTheme } from "../../Theme/Theme";

const DrawerMobileNavigation = () => {
  const [open, setOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  const currentTheme = useTheme();

  return (
    <ThemeProvider theme={currentTheme.palette.mode === 'dark' ? darkTheme : theme}>
      <React.Fragment>
        <Box
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
          }}
        >
          <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              ml: 'auto',
              mt: isSmallScreen ? 9 : 30,
              mr: 30,
            }}
          >
            <Typography
              component="label"
              htmlFor="close-icon"
              fontSize="sm"
              fontWeight="lg"
              sx={{ cursor: 'pointer' }}
            ></Typography>
            <IconButton
              id="close-icon"
              sx={{ position: 'absolute', top: isSmallScreen ? '30px' : '20px', right: '95px' }}
              onClick={() => setOpen(false)}
            >
              <CancelIcon />
            </IconButton>
          </Box>
          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}
          >
            <ListItemButton sx={{ fontWeight: 'lg' }}>Home</ListItemButton>
            <ListItemButton>About</ListItemButton>
            <ListItemButton>Projects</ListItemButton>
            <ListItemButton>Contact</ListItemButton>
          </List>
        </Drawer>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default DrawerMobileNavigation;
