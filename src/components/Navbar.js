import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          className="flex justify-center p-5"
        >
          Joe Deering
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          className="flex justify-center"
        >
          Junior Developer
        </Typography>
        <Toolbar>
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
              offset={-200}
              className="hover:scale-150"
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-175}
              className="hover:scale-150"
            >
              Projects
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
              className="hover:scale-150"
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-175}
              className="hover:scale-150"
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
