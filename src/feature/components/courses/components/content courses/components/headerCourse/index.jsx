import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
HeaderCourses.propTypes = {
  user: PropTypes.object.isRequired,
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexWrap: "wrap",
    boxShadow: "0",
  },
  paperImg: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    flexWrap: "wrap",
  },
  paperName: {
    marginTop: "10%",
  },
  imgCourses: {
    height: "25rem",
    width: "25rem",
  },
  nameCourses: {
    fontSize: "3.5rem",
    textAlign: "left",
    fontWeight:"700",
  },
  introCourses: {
    fontSize: "2rem",
    textAlign: "left !important",
  },
  creator: {
    display: "flex",
    justifyContent: "center",
  },
  CreatorShare: {
    marginTop: "20%",
  },
  imgCreator: {
    height: "5rem",
    width: "5rem",
    margin: "6% ",
  },
  textCreator: {
    fontSize: "1.6rem",
    fontWeight:"600"
  },
  share: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  Learn: {
    marginLeft: "77%",
    background: "linear-gradient(315deg, #83eaf1 30%, #63a4ff 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 40,
    padding: "0 30px",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
  },
}));

function HeaderCourses({user}) {
  const classes = useStyles();
  return (
    <React.Fragment>
 
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Paper className={classes.paperImg} elevation={0}>
                  <img
                    src="https://source.unsplash.com/random"
                    className={classes.imgCourses}
                    alt=""
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paperName} elevation={0}>
                  <p className={classes.nameCourses}>
                    Từ Vựng Tiếng Anh cơ bản
                  </p>
                  <p className={classes.introCourses}>
                    Tự giới thiệu bản thân, khám phá xung quanh, và học các câu
                    nói đời thường hữu ích sẽ làm mọi người cười ngạc nhiên.
                  </p>
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.Learn}
                    endIcon={<KeyboardArrowRightIcon />}
                  >
                    Học
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0} className={classes.CreatorShare}>
                  <div className={classes.creator}>
                    <img
                      src="https://source.unsplash.com/random"
                      className={classes.imgCreator}
                      alt=""
                    />
                    <div>
                      <p className={classes.textCreator}>Người tạo</p>
                      <p className={classes.textCreator}>C2SE.12</p>
                    </div>
                  </div>
                  <div className={classes.share}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<FacebookIcon />}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<InstagramIcon />}
                    >
                      Instagram
                    </Button>
                  </div>
                </Paper>
              </Grid>
             
            </Grid>
         
    </React.Fragment>
  );
}

export default HeaderCourses;
