import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import airplane from "../../assets/send.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonArrow from "../../components/ui/ButtonArrow";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em important",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: "50px!important",
    height: "60px!important",
    width: "160px!important",
    backgroundColor: theme.palette.common.blue,
    marginTop: "10px !important",
    fontSize: "19px!important",
    marginRight: "5em !important",
    marginLeft: "2em !important",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0 !important",
      marginRight: "0 !important",
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
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em !important",
    marginBottom: "2em!important ",
    borderRadius: "0.75em !important",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: "0.75em !important",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: "40 !important",
      width: "22!important5",
    },
  },
}));
const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
  const onConfirm = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({ open: true, message: "Message sent Successfuly", backgroundColor: "#4BB543" });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ open: true, message: "something went wrong ,please try again", backgroundColor: "#FF3232" });
      });
  };
  const buttonContants = (
    <>
      send Message
      <img src={airplane} alt="airplane" style={{ marginLeft: "1em" }} />
    </>
  );

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{ marginBottom: matchesMD ? "5em" : "0em", marginTop: matchesMD ? "5em" : "0em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" textAlign={matchesMD ? "center" : "undefined"}>
                Contact Us
              </Typography>
              <Typography variant="body1" textAlign={matchesMD ? "center" : "undefined"}>
                we are Wating
              </Typography>
            </Grid>
            <Grid item container mt={2}>
              <Grid item>
                <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: "theme.pallete.common.blue", fontSize: "1rem" }}>
                  <a href="tel:(555)555-5555" style={{ textDecoration: "none", color: "inherit" }}>
                    (555)555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container mb={2}>
              <Grid item>
                <img src={emailIcon} alt="email" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: "theme.pallete.common.blue", fontSize: "1rem" }}>
                  <a href="mailto:nemati.neda69@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                    nemati.neda69@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ maxWidth: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  id="name"
                  label="Name"
                  variant="standard"
                  value={name}
                  fullWidth
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  id="email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  label="Email"
                  variant="standard"
                  value={email}
                  fullWidth
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  id="phone"
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  variant="standard"
                  value={phone}
                  fullWidth
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                id="message"
                style={{ marginBottom: "0.5em" }}
                fullWidth
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                rows={10}
                label="Message"
                variant="standard"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justifyContent="center" mt={2}>
              <Button variant="contained" className={classes.sendButton} onClick={() => setOpen(true)}>
                {buttonContants}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        style={{ zIndex: "1302" }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            paddingBottom: matchesXS ? "1em" : "3em",
            paddingLeft: matchesXS ? "0em" : matchesSM ? "5em" : matchesMD ? "10em" : "15em",
            paddingRight: matchesXS ? "0em" : matchesSM ? "5em" : matchesMD ? "10em" : "15em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography alignItems="center" variant="h4 " gutterBottom style={{ fontSize: "25px", color: "blue" }}>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                id="name"
                label="Name"
                variant="standard"
                value={name}
                fullWidth
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                id="email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                label="Email"
                variant="standard"
                value={email}
                fullWidth
                onChange={onConfirm}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                id="phone"
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                variant="standard"
                value={phone}
                fullWidth
                onChange={onChange}
              />
            </Grid>

            <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
              <TextField
                id="message"
                style={{ marginBottom: "0.5em" }}
                fullWidth
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                rows={10}
                label="Message"
                variant="standard"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ margintop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button variant="contained" className={classes.sendButton} onClick={onConfirm}>
                {loading ? <CircularProgress size={50} color="success" /> : buttonContants}
              </Button>
            </Grid>

            <Grid item>
              <Button onClick={() => setOpen(false)} style={{ fontWeight: "300" }}>
                Cancle
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      ></Snackbar>

      <Grid
        item
        container
        justifyContent={matchesMD ? "center" : "undefined"}
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        lg={8}
        xl={9}
        alignItems="center"
      >
        <Grid item style={{ marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit" }}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" textAlign={matchesMD ? "center" : "undefined"}>
                Lorem ipsum dolor <br /> adipisicing elit
              </Typography>
              <Typography variant="subtitle2" textAlign={matchesMD ? "center" : "undefined"}>
                Lorem ipsum dolor sit, amet consectetur
              </Typography>
              <Grid container item justifyContent={matchesMD ? "center" : undefined}>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  style={{ border: "1px solid blue" }}
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: "10px" }}>Learn More</span>
                  <ButtonArrow width={15} height={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
