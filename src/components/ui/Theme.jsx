import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9 !important";
const arcOrange = "#FFBA60 !important";

export default createTheme({
  h4: {
    fontFamily: "Raleway",
    fontWeight: 500,
    color: `${arcBlue} !important `,
  },
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    Primery: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    typography: {
      tab: {
        fontFamily: "Raleway !important",
        textTransform: "none !important",
        fontWeight: 700,
        fontSize: "1rem !important",
        color: "white !important",
      },
      estimate: {
        fontFamily: "pacifico !important",
        textTransform: "none !important",
        fontSize: "1rem !important",
        color: "white !important",
      },
      h2: {
        fontFamily: "Raleway",
        fontSize: "2.5rem",
        fontWeight: 700,
        color: `${arcBlue} !important `,
        lineHeight: 1.5,
      },

      caption: {
        fontSize: "1rem",
        fontWeight: 300,
        color: "arcGray",
      },
    },
    overrides: {
      MuiInputLabel: {
        root: {
          color: arcBlue,
          fontSize: "1rem",
        },
      },

      MuiInput: {
        underline: {
          "&:before": {
            borderBottom: `2px solid ${arcBlue}`,
          },
          ":&hover:not($disabled):not($focused):not($error):before": {
            borderBottom: `2px solid ${arcBlue}`,
          },
        },
      },
    },
  },
});
