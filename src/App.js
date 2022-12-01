import { Box, ThemeProvider, Typography } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';
import { mainTheme } from "./themes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';

const ThemeContext = createContext({theme:{}});
export const useMyTheme = () => useContext(ThemeContext);

function App() {
  const [theme,setMyTheme] = useState(mainTheme)
  return (
    <ThemeContext.Provider value={{theme,setMyTheme}}>
    <ThemeProvider theme={theme}>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
