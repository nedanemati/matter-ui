import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import ButtonArrow from "./ButtonArrow";
import customsofware from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import webSiteIcon from "../../assets/websiteIcon.svg";

const useStyle = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em !important",
    },
  },
  subtitle: {
    marginButton: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      margin: "0 auto",
    },
  },
  servicesContainer: {
    marginTop: "10em ",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em !important",
    },
  },
}));

function Services(props) {
  const classes = useStyle();
  const theme = useTheme();
  const machesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid item style={{ marginLeft: machesSm ? 0 : "5em", marginTop: machesSm ? "1em" : "2em" }}>
        <Typography align={machesSm ? "center" : "undefined"} variant="h2" gutterBottom>
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* -- ios/android block -- */}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justifyContent={machesSm ? "center" : "flex-end"}
          style={{ marginTop: "5em" }}
        >
          <Grid
            item
            style={{
              marginLeft: machesSm ? 0 : "5em",
              textAlign: machesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Ios/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {machesSm ? null : <br />}with either mobile platform.
            </Typography>
            <Button variant="outlined" component={Link} to="/mobileapps" className={classes.learnButton}>
              {" "}
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: machesSm ? 0 : "5em" }}>
            <img className={classes.icon} src={mobileAppIcon} alt="custo software" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* --custom software block -- */}
        <Grid container direction="row" className={classes.servicesContainer}>
          <Grid
            item
            style={{
              marginLeft: machesSm ? 0 : "5em",
              textAlign: machesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton} component={Link} to="/customsoftware">
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={customsofware} alt="custo software" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* -- ios/android block -- */}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justifyContent={machesSm ? "center" : "flex-end"}
          style={{ marginTop: machesSm ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              width: machesSm ? "center" : "35em",
              textAlign: machesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Ios/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {machesSm ? null : <br />}with either mobile platform.
            </Typography>
            <Button variant="outlined" component={Link} to="/mobileapps" className={classes.learnButton}>
              {" "}
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: machesSm ? 0 : "5em" }}>
            <img className={classes.icon} src={mobileAppIcon} alt="custo software" width="250em" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* --website block -- */}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={machesSm ? "center" : "flex-end"}
          style={{
            marginBottom: "10em",
          }}
        >
          <Grid
            item
            style={{
              textAlign: machesSm ? "center" : undefined,
              width: machesSm ? "center" : "35em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">Optimized for Search Engines, built for speed.</Typography>
            <Button variant="outlined" className={classes.learnButton} component={Link} to="/websites">
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={webSiteIcon} alt="website" width="250em" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Services;
