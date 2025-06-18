import { createTheme } from '@mui/material/styles';

// Synthwave-inspired theme with bright pinks, purples, and 80s vibes
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff2a6d', // Hot pink
          light: '#ff71a3',
          dark: '#c8003d',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#05d9e8', // Neon cyan
          light: '#6effff',
          dark: '#00a7b5',
          contrastText: '#000000',
        },
        background: {
          default: '#2d1b69', // Deep purple
          paper: '#341677',
        },
        text: {
          primary: '#ffffff',
          secondary: '#d1b3ff',
        },
        error: {
          main: '#ff3864',
        },
        warning: {
          main: '#ffb800',
        },
        info: {
          main: '#00f9ff',
        },
        success: {
          main: '#39ff14',
        },
        divider: 'rgba(255, 42, 109, 0.3)',
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#ff2a6d', // Hot pink
          light: '#ff71a3',
          dark: '#c8003d',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#05d9e8', // Neon cyan
          light: '#6effff',
          dark: '#00a7b5',
          contrastText: '#000000',
        },
        background: {
          default: '#1a0933', // Darker purple for dark mode
          paper: '#2d1b69',
        },
        text: {
          primary: '#ffffff',
          secondary: '#d1b3ff',
        },
        error: {
          main: '#ff3864',
        },
        warning: {
          main: '#ffb800',
        },
        info: {
          main: '#00f9ff',
        },
        success: {
          main: '#39ff14',
        },
        divider: 'rgba(255, 42, 109, 0.3)',
      },
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textShadow: '0 0 10px rgba(255, 42, 109, 0.7), 0 0 20px rgba(255, 42, 109, 0.5)',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textShadow: '0 0 8px rgba(255, 42, 109, 0.7), 0 0 16px rgba(255, 42, 109, 0.5)',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textShadow: '0 0 6px rgba(255, 42, 109, 0.7)',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '0.03em',
      textShadow: '0 0 4px rgba(255, 42, 109, 0.7)',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'linear-gradient(180deg, #2d1b69 0%, #1a0933 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '0 0 10px rgba(255, 42, 109, 0.5)',
          '&:hover': {
            boxShadow: '0 0 15px rgba(255, 42, 109, 0.7)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #ff2a6d 30%, #ff71a3 90%)',
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #05d9e8 30%, #6effff 90%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(135deg, rgba(52, 22, 119, 0.9) 0%, rgba(45, 27, 105, 0.9) 100%)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 42, 109, 0.3)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 42, 109, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 42, 109, 0.5)',
            },
            '&:hover fieldset': {
              borderColor: '#ff2a6d',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ff2a6d',
              boxShadow: '0 0 8px rgba(255, 42, 109, 0.5)',
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(52, 22, 119, 0.9) 0%, rgba(45, 27, 105, 0.9) 100%)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 42, 109, 0.2)',
          '&:before': {
            backgroundColor: 'rgba(255, 42, 109, 0.3)',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          marginBottom: '8px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#ff2a6d',
        },
      },
    },
  },
});

export default theme;