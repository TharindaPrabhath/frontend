// mui
import amber from "@mui/material/colors/amber";
import green from "@mui/material/colors/green";
import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: green,
    secondary: amber,
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightMedium: "bold",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
