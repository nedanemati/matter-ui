import documentsAnimations from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hidden from "@mui/material/Hidden";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";
import roots from "../../assets/root.svg";
import automationAnimation from "../../animations/automationAnimation/data.json";
import uxAnimation from "../../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em !important",
  },
  arrowContainer: {
    marginTop: "0.5em !important",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  itemContainer: {
    maxWidth: "40em !important",
  },
}));

function CustomSoftware(props) {
  const classes = useStyles();

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimations,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
          {/* <IconButton style={{ backgroundColor: "transparent" }}>
            <img src={backArrow} alt="back to service page" />
          </IconButton> */}
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => props.selectedIndex(0)}
          >
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque distinctio, magnam mollitia, ex deleniti
              doloremque voluptas unde praesentium voluptates ab veniam iure dolorum aperiam cum quasi fugit
              perferendis, consequuntur maiores qui obcaecati? Doloremque, nihil reprehenderit animi et incidunt illum?
              Culpa!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus necessitatibus iure, aliquam
              fugit modi quis? Assumenda laudantium voluptas molestiae eos odit quisquam eum? Voluptatum corrupti soluta
              labore et officia totam illo harum, tempore, facilis, voluptatem inventore rem. Totam tempore sapiente
              sunt harum corporis ea iusto nisi inventore explicabo veniam.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cupiditate vel non iste! Eligendi autem
              eum inventore unde delectus cumque cupiditate enim neque, dignissimos assumenda veritatis. Necessitatibus,
              perferendis. Corrupti, nihil.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum!
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => props.selectedIndex(2)}
          >
            <img src={forwardArrow} alt="Forward to Ios/Android" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container direction="row" justifyContent="center" style={{ marginTop: "15em", marginBottom: "20em" }}>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4">Save Entergy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4">Save Mony</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="row" justifyContent="space-around">
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Document</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, molestiae.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped={true}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        <Grid item container className={classes.itemContainer}>
          <Grid item md>
            <Lottie options={scaleOptions} isStopped={true} style={{ maxHeight: 260, maxWidth: 280 }} />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="center">
                Scale{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis dolores repellendus ipsum?
                Architecto ea voluptate distinctio dolorem at vel aliquam ratione eum, illum nisi repellendus mollitia,
                quo quisquam quas dicta laboriosam fuga officiis commodi unde sequi quia? Cumque, laborum quis omnis
                distinctio hic voluptas ratione corrupti molestiae dignissimos doloremque.
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item md></Grid> */}
        </Grid>
      </Grid>

      <Grid item container direction="row" style={{ marginTop: "20em", marginBottom: "20em" }}>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img src={roots} alt="tree whit roots extending out" height="450" width="450" />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root Cause
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptate! Rerum cumque non laboriosam
              repellat hic nemo vel ea labore.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="row" justifyContent="space-around" style={{ marginBottom: "10em" }}>
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, molestiae.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie options={automationOptions} isStopped={true} style={{ maxHeight: 290, maxWidth: 280 }} />
          </Grid>
        </Grid>

        <Grid item container className={classes.itemContainer}>
          <Grid item md>
            <Lottie options={uxOptions} isStopped={true} style={{ maxHeight: 310, maxWidth: 155 }} />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="center">
                User Expreience Desgin
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis dolores repellendus ipsum?
                Architecto ea voluptate distinctio dolorem at vel aliquam ratione eum, illum nisi repellendus mollitia,
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis dolores repellendus ipsum?
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                Architecto ea voluptate distinctio dolorem at vel aliquam ratione eum, illum nisi repellendus mollitia,
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CustomSoftware;
