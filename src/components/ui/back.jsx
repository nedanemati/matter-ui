import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonArrow from "./ButtonArrow";
import mobileBackground from "../../assets/mobileBackground.jpg";

import background from "../../assets/background.jpg";
import phoneIcon from "../../assets/phone.svg";
import emailIcone from "../../assets/email.svg";
import airplane from "../../assets/send.svg";
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em !important",
    paddingBottom: "10em !important",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: "50px !important",
    height: 60,
    width: 170,
    backgroundColor: `${theme.palette.common.orange} !important`,
    fontSize: "1.3em !important",
    marginRight: "5em!important",
    marginLeft: "2em!important",
    [theme.breakpoints.down("sm")]: {
      margin: "0 !important",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem !important",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em !important",
    },
    message: {
      border: `2px solid $(theme.palette.common.blue)`,
      marginTop: "5em !important",
      borderRadius: 10,
    },
    sendButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 45,
      width: 245,
      fontSize: "1rem",
      backgroundColor: theme.palette.common.orange,
      ":&hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  },
}));

function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg={4}
        xl={3}
        style={{ marginBottom: matchesMd ? "5em" : 0, marginTop: matchesMd ? "5em" : 0 }}
      >
        <Grid item>
          <Grid container direction="column"></Grid>
        </Grid>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" style={{ color: theme.palette.common.blue }}>
            we are waitig.
          </Typography>
        </Grid>
        <Grid item container style={{ marginTop: "2em" }}>
          <Grid item>
            <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
              (555)555-5555
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ marginBottom: "2em" }}>
          <Grid item>
            <img src={emailIcone} alt="email" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
              nemati@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ maxWidth: "20em" }}>
          <Grid item>
            <TextField
              fullWidth
              label="Name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Phone"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item direction="column" style={{ maxWidth: "20em" }}>
          <TextField
            InputProps={{ disableUnderline: true }}
            className={classes.message}
            value={message}
            multiline
            rows={10}
            id="message"
            onChange={(event) => setMessage(event.target.value)}
          />
        </Grid>
        <Grid item justifyContent="center" style={{ marginTop: "2em" }}>
          <Button variant="contained" className={classes.sendButton}>
            Send Message <img src={airplane} alt="airplane" style={{ marginLeft: "1em" }} />
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.background}
        alignItems="center`"
        direction={matchesMd ? "colomn" : "row"}
        lg={8}
        xl={9}
        justifyContent={matchesMd ? "center" : "undefind"}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSm ? 0 : "3em",
            textAlign: matchesSm ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesMd ? "center" : "undefind"}>
                Custom Software Development
              </Typography>
              <Typography align={matchesMd ? "center" : "undefind"} variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography align={matchesMd ? "center" : "undefind"} variant="subtitle1">
                Complete digital solutions, from investigation to
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Grid container item justifyContent={matchesSm ? "center" : undefined}>
                <Button variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Contact;
