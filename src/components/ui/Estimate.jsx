import { makeStyles, useTheme } from "@mui/styles";
import Lottie from "react-lottie";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import chech from "../../assets/check.svg";
import mobile from "../../assets/mobile.svg";
import send from "../../assets/send.svg";
import website from "../../assets/website.svg";
import software from "../../assets/software.svg";
import backArrowDisabled from "../../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../../assets/forwardArrowDisabled.svg";
import camera from "../../assets/camera.svg";
import upload from "../../assets/upload.svg";
import person from "../../assets/person.svg";
import persons from "../../assets/persons.svg";
import people from "../../assets/people.svg";
import info from "../../assets/info.svg";
import bell from "../../assets/bell.svg";
import users from "../../assets/users.svg";
import iphone from "../../assets/iphone.svg";
import gps from "../../assets/gps.svg";
import customized from "../../assets/customized.svg";
import data from "../../assets/data.svg";
import android from "../../assets/android.svg";
import globe from "../../assets/globe.svg";
import biometrics from "../../assets/biometrics.svg";

import estimateAnimation from "../../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: "10em",
    width: "12em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    ":&hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

// const defaultQuestions = [{ id:1 ,title:""}];

function Estimate() {
  const classes = useStyles();
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid item style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}>
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: "2em", marginBottom: "25em" }}
      >
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{ fontWeight: 500, fontSize: "2.25rem", marginBottom: "2.5em", marginTop: "5em" }}
            gutterBottom
          >
            Which Services are you interested in?
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center" style={{ marginBottom: "1em" }}>
                Custom SoftWare Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={software} alt="software" className={classes.icon} />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center" style={{ marginBottom: "1em" }}>
                Android/ios
              </Typography>
            </Grid>
            <Grid item>
              <img src={mobile} alt="mobile" className={classes.icon} />
            </Grid>
          </Grid>

          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center" style={{ marginBottom: "1em" }}>
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={website} alt="website" className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-between" style={{ width: "15em", marginTop: "3em" }}>
          <Grid item>
            <img src={backArrow} alt="backArrow" />
          </Grid>
          <Grid item>
            <img src={forwardArrow} alt="forwardArrow" />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.estimateButton}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Estimate;
