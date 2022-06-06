import { makeStyles, useTheme } from "@mui/styles";
import Lottie from "lottie-web";
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
const useStyles = makeStyles((theme) => {});

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
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid item>
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h2" align="center" style={{ fontWeight: 300 }} gutterBottom>
            Which Services are you interested in?
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item container direction="column">
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center">
                Custom SoftWare Development
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Estimate;
