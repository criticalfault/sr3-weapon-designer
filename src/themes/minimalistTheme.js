import { createTheme } from '@mui/material/styles';

// Minimalist theme with clean, modern design
const minimalistTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2', // Standard MUI blue
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#9c27b0', // Purple
          light: '#ba68c8',
          dark: '#7b1fa2',
          contrastText: '#ffffff',
        },
        background: {
          default: '#f5f5f5', // Light gray
          paper: '#ffffff',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
        error: {
          main: '#d32f2f',
        },
        warning: {
          main: '#ed6c02',
        },
        info: {
          main: '#0288d1',
        },
        success: {
          main: '#2e7d32',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#90caf9', // Lighter blue for dark mode
          light: '#e3f2fd',
          dark: '#42a5f5',
          contrastText: '#000000',
        },
        secondary: {
          main: '#ce93d8', // Lighter purple for dark mode
          light: '#f3e5f5',
          dark: '#ab47bc',
          contrastText: '#000000',
        },
        background: {
          default: '#121212', // Dark gray
          paper: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0bec5',
        },
        error: {
          main: '#f44336',
        },
        warning: {
          main: '#ff9800',
        },
        info: {
          main: '#29b6f6',
        },
        success: {
          main: '#66bb6a',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default minimalistTheme;