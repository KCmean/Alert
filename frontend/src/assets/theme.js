import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 500,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: "#13724A",
      contrastText: "#fff",
    },
    secondary: {
      main: "#165C3F",
      contrastText: "#fff",
    },
    custom: {
      main: "#fff",
      contrastText: "#000",
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        input: {
          color: "white",
          "&::before": {
            border: "1px solid rgba(0, 0, 0, 0.42)",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          letterSpacing: "0.1rem",
          borderRadius: "15px",
        }
      }
    }
  },
});

export function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
