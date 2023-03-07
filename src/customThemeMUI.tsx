import createTheme from "@mui/material/styles/createTheme";

export const customThemeMUI = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000000",
          textTransform: "none",
        },
      },
    },
  },
});
