import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles/';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

import '../styles/output.css';

const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
    secondary: { main: '#524F4E' },
  },
  typography: {
    fontFamily: ['Baskerville'],
  },
});

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
