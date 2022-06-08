import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import IconButton from "@mui/material/IconButton";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import swiss from "../../assets/swissKnife.svg";
import access from "../../assets/extendAccess.svg";
import engagment from "../../assets/increaseEngagement.svg";
import integrationAnimation from "../../animations/integrationAnimation/data.json";

const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

function MobileApps({ setSelectedIndex }) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.mainContainer}>
        <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/customsoftware"
            onClick={() => setSelectedIndex(0)}
          >
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              ios/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your
              business tackle technology.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff
              you do need, and ultimately controls the way you work. Without using any software at all you risk falling
              behind competitors and missing out on huge savings from increased efficiency.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This
              collaborative process produces finely tuned software that is much more effective at improving your
              workflow and reducing costs than generalized options.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>

        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => setSelectedIndex(2)}
          >
            <img src={forwardArrow} alt="Forward to iOS/Android App Development Page" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis, sunt dignissimos esse
              voluptatem nesciunt omnis distinctio itaque nam corrupti assumenda ex laborum, ipsam, velit dolorum
              exercitationem saepe asperiores quaerat.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis, sunt dignissimos esse
              voluptatem nesciunt omnis distinctio itaque nam corrupti assumenda ex laborum, ipsam, velit dolorum
              exercitationem saepe asperiores quaerat.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: "20em" }}></Lottie>
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align="right" variant="h4" gutterBottom>
              simple platform
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis, sunt dignissimos esse
              voluptatem nesciunt omnis distinctio itaque nam corrupti assumenda ex laborum, ipsam, velit dolorum
              exercitationem saepe asperiores quaerat.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis, sunt dignissimos esse
              voluptatem nesciunt omnis distinctio itaque nam corrupti assumenda ex laborum, ipsam
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Fuunctionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss" />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img src={access} alt="access" style={{ maxWidth: "25em" }} />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagment} alt="swiss" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MobileApps;
