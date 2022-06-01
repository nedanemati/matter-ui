import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import history from "../../assets/history.svg";
import profile from "../../assets/founder.jpg";
import yearbook from "../../assets/yearbook.svg";
import puppy from "../../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  missionStatemnt: {
    fontStyle: "italic",
    fontSize: "1.5rem",
    fontWeight: 300,
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em !important",
    width: "25em !important",
  },
}));

function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid item container justifyContent="center" className={classes.rowContainer}>
        <Typography variant="h4" align="center" className={classes.missionStatemnt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque quam velit voluptas non sed nam eveniet
          nobis ipsum. Repellat cupiditate cum asperiores doloribus tenetur impedit illo quibusdam maxime excepturi fuga
          vel corporis ipsa, voluptas ut enim est temporibus officia quasi nulla! Velit quod est provident? Totam
          expedita, necessitatibus, voluptatem fugiat id hic eveniet omnis, dolor porro eius assumenda nemo!
        </Typography>
      </Grid>
      <Grid item container className={classes.rowContainer} justifyContent="space-around">
        <Grid item>
          <Grid item container direction="column" lg style={{ maxWidth: "35em" }}>
            <Grid item>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph style={{ fontWeight: 700, fontStyle: "italic" }}>
                where the new kid on the block
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste saepe amet dolor, dolorem non
                similique ab suscipit ratione vero molestias porro temporibus quam veritatis officiis sunt unde, quo
                cupiditate cumque ut excepturi voluptas quas officia. Voluptates quia iure incidunt error alias iusto
                ea. Similique illo alias assumenda ex debitis!
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, asperiores velit. Ea harum, fugiat
                nobis aut soluta natus eius laborum.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item lg container justifyContent="center">
            <img src={history} alt="quill pen sittingon top of book" style={{ maxHeight: "22em" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column" className={classes.rowContainer} alignItems="center">
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item lg>
          <Typography variant="body1" paragraph align="center">
            Zacary Reece Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started codeing when i was 9 years old
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container>
          <Grid item container direction="column" lg>
            <Grid item>
              <img src={yearbook} alt="yearbook page about founder" />
            </Grid>
            <Grid item>
              <Typography variant="caption">a page from my sophomore yearbook</Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
            <Typography variant="body1" align="center" paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis quibusdam ducimus impedit
              quaerat quisquam nihil excepturi corrupti dicta ab nisi maiores, placeat ex dignissimos molestiae
              doloribus. Quia, optio iusto!
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, amet unde architecto culpa deserunt
              obcaecati?
            </Typography>
          </Grid>
          <Grid item container direction="column" lg alignItems="flex-end">
            <Grid item>
              <img src={puppy} alt="grey spotted puppy" />
            </Grid>
            <Grid item>
              <Typography variant="caption"> my miniator dapple dachshund</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
