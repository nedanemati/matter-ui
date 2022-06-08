import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9 !important";
const arcOrange = "#FFBA60 !important";
const arcGrey = "#868686";

export default createTheme({
  h2: {
    fontFamily: "Raleway !important",
    fontSize: "1.75rem",
    fontWeight: 700,
    color: `${arcBlue} !important `,
    lineHeight: 1.5,
  },
  h3: {
    fontFamily: "pacifico !important",
    fontSize: "1.75rem",
    color: `${arcBlue} !important `,
  },
  h4: {
    fontFamily: "Raleway",
    fontSize: "1.75rem",
    color: `${arcBlue} !important `,
    fontWeight: 700,
  },
  h6: {
    fontFamily: "Raleway",
    color: `${arcBlue} !important `,
    fontWeight: 500,
    lineHeight: 1,
  },
  subtitle1: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: arcGrey,
  },
  subtitle2: {
    color: "white",
    fontWeight: 300,
    fontSize: "1.25rem",
  },
  body1: {
    fontSize: "1rem",
    color: arcGrey,
    fontWeight: 300,
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
