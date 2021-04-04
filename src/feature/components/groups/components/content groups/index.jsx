import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Members from "./components/members";
import Screen from "./components/livestream";
import ChatRoom from "./components/chatRom";
import Record from "./components/record";
import ListGroups from "./components/listGroups";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"1rem",
    flexGrow: 1,
    padding:"0 0 0 2rem",
    backgroundColor:"#fafafa",
  },
  back:{
    height:"100%"
},
  paper: {
    marginTop:"2rem",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    
  },
 
}));

export default function ContentGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid spacing={3} >
        <Grid container spacing={3}>
          <Grid  container item xs={2} spacing={3}>
          {/* <Grid  item  xs={3}>
              
              <Paper className={classes.paper} className={classes.back}>
                <ListGroups />
              </Paper>
            </Grid> */}
            <Grid item xs={12}>
              
            <Paper elevation={3} className={classes.paper} >
              <Members />
            </Paper>
          </Grid>
          </Grid>
          <Grid item xs={7}>
            <Paper elevation={3} className={classes.paper}>
              <Screen />
            </Paper>
            <Paper elevation={3} className={classes.paper}>
              <Record />
            </Paper>
          </Grid>
          <Grid  item xs={3}>
            <Paper elevation={3} className={classes.paper}>
              <ChatRoom />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
