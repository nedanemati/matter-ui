import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { Button } from "@mui/material";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";
import { Fragment, useState } from "react";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Snackbar } from "@mui/material";
import { CircularProgress } from "@mui/material";

import check from "../../assets/check.svg";
import send from "../../assets/send.svg";
import software from "../../assets/software.svg";
import mobile from "../../assets/mobile.svg";
import website from "../../assets/website.svg";
import backArrow from "../../assets/backArrow.svg";
import backArrowDisabled from "../../assets/backArrowDisabled.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import forwardArrowDisabled from "../../assets/forwardArrowDisabled.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import camera from "../../assets/camera.svg";
import upload from "../../assets/upload.svg";
import person from "../../assets/person.svg";
import persons from "../../assets/persons.svg";
import info from "../../assets/info.svg";
import bell from "../../assets/bell.svg";
import people from "../../assets/people.svg";
import users from "../../assets/users.svg";
import iPhone from "../../assets/iphone.svg";
import gps from "../../assets/gps.svg";
import customized from "../../assets/customized.svg";
import data from "../../assets/data.svg";
import android from "../../assets/android.svg";
import globe from "../../assets/globe.svg";
import biometrics from "../../assets/biometrics.svg";

import estimateAnimation from "../../animations/estimateAnimation/data.json";

import React from "react";

const useStyle = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: "50px !important",
    backgroundColor: `${theme.palette.common.orange}!important`,
    height: 50,
    width: 225,
    marginTop: "5em",
    fontSize: "1.25rem",
    "&:hover": {
      backgroundColor: `{theme.palette.secondary.light}!impotant`,
    },
  },
  message: {
    borderColor: `${theme.palette.common.orange} !important`,
    marginTop: "2em!important",

    borderRadius: 5,
    width: "100%",
  },
  specialText: {
    fontSize: "1.5rem",
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.orange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "outlines of phones and tablets",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iPhone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

function Estimate() {
  const classes = useStyle();
  const theme = useTheme();

  const machesMD = useMediaQuery(theme.breakpoints.down("md"));
  const machesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);

  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [users, setUsers] = useState("");
  const [category, setCategory] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

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
  //   nextQuestion

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  //   previousQuestion

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };
  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };
  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = questions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);

        break;
      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");

        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        break;

      default:
        setQuestions(newQuestions);
    }
  };
  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));
    console.log(selections);
    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];

      setUsers(userCost.title);

      cost -= userCost.cost;
      cost *= userCost.cost;
    }

    setTotal(cost);
  };

  const getPlatforms = () => {
    if (questions.length > 2) {
      let newPlatforms = [];

      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    if (questions.length > 2) {
      let newFeatures = [];

      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );

      setFeatures(newFeatures);
    }
  };
  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter((question) => question.title === "What do you need?")
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].title;

      setCustomFeatures(newCustomFeatures);
    }
  };

  const sendEstimate = () => {
    setLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/todos/1", {
        params: {
          email: email,
          name: name,
          phone: phone,
          message: message,
          total: total,
          category: category,
          service: service,
          platforms: platforms,
          features: features,
          customFeatures: customFeatures,
          users: users,
        },
      })

      .then((res) => {
        setLoading(false);
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");
        setDialogOpen(false);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ open: true, color: "#FF3232" });
        setAlertMesssage("Something went wrong! Please try again.");
        console.error(err);
      });
  };

  const estimateDisabled = () => {
    // let disabled = true;
    // const emptySelections = questions
    //   .map((question) => question.options.filter((option) => option.selected))
    //   .filter((question) => question.length === 0);
    // if (questions.length === 2) {
    //   if (emptySelections.length === 1) {
    //     //disabled = false;
    //     return false;
    //   }
    // } else if (questions.length === 1) {
    //   //disabled = true;
    //   return true;
    // } else {
    //   if (
    //     emptySelections.length < 3 &&
    //     questions[questions.length - 1].options.filter(
    //       (option) => option.selected
    //     ).length > 0
    //   ) {
    //     // disabled = false;
    //     return false;
    //   }
    // }
    // return disabled;
  };
  return (
    <Grid container direction="row">
      {/*  */}
      <Grid
        item
        container
        direction="column"
        lg
        alignItems={machesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{ marginTop: "2em", marginLeft: machesMD ? 0 : "5em" }}
        >
          <Typography variant="h2" align={machesMD ? "center" : undefined}>
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginRight: machesMD ? 0 : "10em",
            maxWidth: "50em",
            marginTop: "7.5em",
          }}
        >
          <Lottie options={defaultOptions} width="100%" height="100%" />
        </Grid>
      </Grid>
      {/*  */}
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        lg
        style={{ marginRight: machesMD ? 0 : "2em", marginBottom: "15em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  variant="h2"
                  alignItems="center"
                  gutterBottom
                  style={{
                    fontWeight: 500,
                    marginTop: "5em",
                    fontSize: "1.25rem",
                    lineHeight: "1.25",
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>

              <Grid item container>
                {question.options.map((option) => (
                  <Grid
                    container
                    direction="column"
                    md
                    onClick={() => handleSelect(option.id)}
                    component={Button}
                    style={{
                      display: "grid",
                      borderRadius: 0,
                      marginBottom: machesSM ? "1.5" : 0,
                      textTransform: "none",
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          justifyContent="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPreviousDisabled()}
              onClick={previousQuestion}
            >
              <img
                src={
                  navigationPreviousDisabled() ? backArrowDisabled : backArrow
                }
                alt="previos question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={nextQuestion}
              disabled={navigationNextDisabled()}
            >
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item mt={3}>
          <Button
            variant="contained"
            disabled={estimateDisabled()}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
            }}
            className={classes.estimateButton}
          >
            Get estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        fullScreen={machesSM}
        open={dialogOpen}
        fullWidth=""
        maxWidth="lg"
        PaperProps={{
          style: {
            paddingTop: machesMD ? "0" : "3em",
            paddingBottom: machesMD ? "0" : "3em",
            paddingLeft: machesMD ? "0" : "5em",
            paddingRight: machesMD ? "0" : "5em",
          },
        }}
        onClose={() => setDialogOpen(false)}
      >
        <Grid container justifyContent="center"></Grid>
        <DialogContent>
          <Grid
            item
            style={{ marginTop: "1em", marginBottom: machesMD ? 0 : "5em" }}
          >
            <Typography
              variant="h2"
              alignItems={machesMD ? "center" : undefined}
            >
              Estimate
            </Typography>
          </Grid>
          <Grid container justifyContent="space-around">
            <Grid item md={7} pr={3}>
              <Grid item container direction="column">
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="name"
                    fullWidth
                    id="name"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Phone"
                    helperText={phoneHelper}
                    error={phoneHelper.length !== 0}
                    id="phone"
                    fullWidth
                    value={phone}
                    onChange={onChange}
                    variant="standard"
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Email"
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    id="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                style={{ maxWidth: machesSM ? "100%" : "20em" }}
                mb={3}
              >
                <TextField
                  label="message"
                  className={classes.message}
                  id="Message"
                  value={message}
                  InputProps={{ disableUnderline: true }}
                  multiline
                  rows={5}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  we can create this digital solution for an estimated
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                    {platforms.length > 0
                      ? `for ${
                          //if only web application is selected...
                          platforms.indexOf("Web Application") > -1 &&
                          platforms.length === 1
                            ? //then finish sentence here
                              "a Web Application."
                            : //otherwise, if web application and another platform is selected...
                            platforms.indexOf("Web Application") > -1 &&
                              platforms.length === 2
                            ? //then finish the sentence here
                              `a Web Application and an ${platforms[1]}.`
                            : //otherwise, if only one platform is selected which isn't web application...
                            platforms.length === 1
                            ? //then finish the sentence here
                              `an ${platforms[0]}`
                            : //otherwise, if other two options are selected...
                            platforms.length === 2
                            ? //then finish the sentence here
                              "an iOS Application and an Android Application."
                            : //otherwise if all three are selected...
                            platforms.length === 3
                            ? //then finish the sentence here
                              "a Web Application, an iOS Application, and an Android Application."
                            : null
                        }`
                      : null}
                  </span>
                </Typography>
                <Typography variant="body1" paragraph>
                  Fill out your name, number, and email, place your request, and
                  we’ll get back to you with details moving forward and a final
                  price.
                </Typography>
              </Grid>
            </Grid>

            <Grid item md={5} mt={5}>
              <Grid item container>
                <Grid item container alignItems="center">
                  <Grid item xs={2}>
                    <img src={check} alt="checkmark" width="20" />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1">you want {service} </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={check} alt="checkmark" width="20" />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1">
                      {"with "}

                      {/* if we have features... */}
                      {features.length > 0
                        ? //...and there's only 1...
                          features.length === 1
                          ? //then end the sentence here
                            `${features[0]}.`
                          : //otherwise, if there are two features...
                          features.length === 2
                          ? //...then end the sentence here
                            `${features[0]} and ${features[1]}.`
                          : //otherwise, if there are three or more features...
                            features
                              //filter out the very last feature...
                              .filter(
                                (feature, index) =>
                                  index !== features.length - 1
                              )
                              //and for those features return their name...
                              .map((feature, index) => (
                                <span key={index}>{`${feature}, `}</span>
                              ))
                        : null}
                      {features.length > 2
                        ? //...and then finally add the last feature with 'and' in front of it
                          ` and ${features[features.length - 1]}.`
                        : null}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={check} alt="checkmark" width="20" />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1">
                      Thired{customFeatures.toLowerCase()}
                      {`project while be used${users} user`}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item mt={3}>
                  <Button
                    onClick={sendEstimate}
                    variant="contained"
                    className={classes.estimateButton}
                  >
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <Fragment>
                        place request
                        <img src={send} alt="send" />
                      </Fragment>
                    )}
                  </Button>
                </Grid>

                <Grid
                  item
                  mt={3}
                  style={{ marginBottom: machesSM ? "5em" : 0 }}
                >
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        en={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />
    </Grid>
  );
}

export default Estimate;
