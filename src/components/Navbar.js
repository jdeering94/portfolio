import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="success">
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          className="flex justify-center p-5"
        >
          Joe Deering
        </Typography>
        <Toolbar color="black">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="flex justify-around"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="class"
            >
              About
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="class"
            >
              Projects
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="class"
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="class"
            >
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Navbar;
