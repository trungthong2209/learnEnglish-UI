import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import CoursesForYou from "../courses/components/courser_personal";
import GroupsForYou from "../groups/components/group_personal";
import Clock from "./components/clock";
import ProfileHome from "./components/profileHome";

Home.propTypes = {};
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
  },
  clock:{

  }
}));

export default function Home() {
  const loggedInUser = useSelector((state) => state.user.current);
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper elevation={3} className={classes.paper}>
              <ProfileHome user={loggedInUser} />
            </Paper>
            <Paper user={loggedInUser}  elevation={3} className={classes.paper}><Clock/></Paper>
            <Paper elevation={3} className={classes.paper}>Result</Paper>
            <Paper elevation={3} className={classes.paper}>rank</Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper user={loggedInUser} elevation={3} className={classes.paper}>
              <CoursesForYou />
            </Paper>
            <Paper user={loggedInUser} elevation={3} className={classes.paper}>
              <GroupsForYou />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
