import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CallToAction from "./ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import customsofware from "../assets/Custom Software Icon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import webSiteIcon from "../assets/websiteIcon.svg";
import revelotionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "15px !important",
    marginLeft: "10%",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: "#FFBA60 !important",
    borderRadius: "50px !important",
    height: "39px",
    width: "145px",
    marginRight: " 40px !important",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
  },
  mainContainer: {
    marginTop: "5em ",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
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
    marginTop: "5em ",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revelotionBackground: {
    backgroundImage: `url(${revelotionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolotinCard: {
    position: "absolute",
    boxShadow: `${theme.shadows[10]} !important `,
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingButton: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
}));

function LandingPage() {
  const classes = useStyle();
  const theme = useTheme();
  const machesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer} justify={machesSm ? "center" : undefined}>
      <Grid item>
        {/*--hero block--*/}
        <Grid container justifyContent="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>

            <Grid container justifyContent="center" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained" className={classes.estimateButton} component={Link} to="/estimate">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: "10px" }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
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
        <Grid container direction="row" className={classes.servicesContainer} justify={machesSm ? "center" : undefined}>
          <Grid
            item
            style={{
              marginLeft: machesSm ? 0 : "5em",
              textAlign: machesSm ? "center" : undefined,
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
            <img className={classes.icon} src={webSiteIcon} alt="website" />
          </Grid>
        </Grid>
      </Grid>
      {/*-----The Revolution Block-----*/}
      <Grid item>
        <Grid container alignItems="center" justifyContent="center" style={{ height: "70em", marginTop: "12em" }}>
          <Card className={classes.revolotinCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: "center" }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                  </Typography>
                  <Button variant="outlined" component={Link} to="/revolution" className={classes.learnButton}>
                    {" "}
                    <span style={{ marginRight: "10px" }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revelotionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/* The Information block */}
        <Grid container style={{ height: "50em" }} direction="row" alignItems="center">
          <Grid
            item
            container
            style={{
              position: "absolute",
              textAlign: machesSm ? "center" : "inherit",
            }}
            direction={machesSm ? "column" : "row"}
            spacing={machesSm ? 10 : 0}
          >
            <Grid item sm style={{ marginLeft: machesSm ? 0 : machesSm ? "2em" : "5em" }}>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2"> Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    component={Link}
                    to="/about"
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: "10px" }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              sm
              style={{
                marginRight: machesSm ? 0 : machesSm ? "2em" : "5em",
                textAlign: machesSm ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">say hello</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/contact"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    {" "}
                    <span style={{ marginRight: "10px" }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
      {/* The  callto action block */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
