import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider, Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../minimalist.css';

// Import themes
import synthwaveTheme from '../theme';
import minimalistTheme from '../themes/minimalistTheme';

// Create context
export const ThemeContext = createContext();

export const ThemeNames = {
  SYNTHWAVE: 'synthwave',
  MINIMALIST: 'minimalist'
};

export const ThemeProvider2 = ({ children }) => {
  // Get saved theme from localStorage or default to synthwave
  const [themeName, setThemeName] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || ThemeNames.SYNTHWAVE;
  });

  // Get current theme object based on name
  const theme = themeName === ThemeNames.SYNTHWAVE ? synthwaveTheme : minimalistTheme;
  
  // Apply synthwave CSS only when that theme is active
  const isSynthwave = themeName === ThemeNames.SYNTHWAVE;

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = themeName === ThemeNames.SYNTHWAVE ? ThemeNames.MINIMALIST : ThemeNames.SYNTHWAVE;
    setThemeName(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', themeName);
    
    // Apply or remove synthwave body styles
    if (isSynthwave) {
      document.body.classList.add('synthwave-theme');
    } else {
      document.body.classList.remove('synthwave-theme');
    }
  }, [themeName, isSynthwave]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme, isSynthwave }}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useThemeContext = () => useContext(ThemeContext);