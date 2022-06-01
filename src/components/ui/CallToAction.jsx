import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { Button } from "@mui/material";
import ButtonArrow from "../../components/ui/ButtonArrow";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

import background from "../../assets/background.jpg"
import mobileBackground from "../../assets/mobileBackground.jpg"


const useStyle = makeStyles((theme) => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em !important",
        },
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        }
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
            margin: "0 !important"
        }

    }

}))


export default function CallToAction() {
    const classes = useStyle();
    const theme = useTheme();
    const machesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container
            style={{ height: "50em" }}
            alignItems="center"
            justifyContent={machesSM ? "center" : "space-between"}
            className={classes.background}
            direction={machesSM ? "column" : "row"}

        >
            <Grid item style={{
                marginLeft: machesSM ? 0 : "5em",
                textAlign: machesSM ? "center" : "inherit"
            }}>
                <Grid container direction="column">
                    <Grid item>
                    <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
                        <Grid container item justifyContent={machesSM ? "center" : undefined}>
                            <Button variant="outlined" className={classes.learnButton}>
                              
                                <span style={{ marginRight: 5 }}>Learn More</span>
                                <ButtonArrow
                                    width={15}
                                    height={15}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button variant="contained"
                    className={classes.estimateButton}
                    component={Link}
                    to="/revolution"
                >
                    Free estimate
                </Button>
            </Grid>

        </Grid>
    )
}
