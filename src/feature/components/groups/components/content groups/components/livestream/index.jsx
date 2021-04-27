import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Room from './service/room';
import BlockLive from './components/block_live';




Screen.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    back:{
        
        height:"52rem",
    },
    paper1: {
        height:"52rem",
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        
      },
      paper2: {
        marginTop:"2rem",
        height:"28rem",
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        display:"flex",
        justifyContent: "space-around",
      },
      paper3: {
        width:"32%",
        height:"100%",
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
       
        
      },
}));


function Screen(props) {
    const groupId = props.groupId;
    const classes = useStyles();

    return (
        <div className={classes.back}>
          <Paper elevation={3} className={classes.paper1}>
              <BlockLive groupId={groupId} />
            </Paper>
            {/* <Paper elevation={3} className={classes.paper2}>
            <Paper elevation={3} className={classes.paper3}>
              user 1
            </Paper>
            <Paper elevation={3} className={classes.paper3}>
              user 2
            </Paper>
            <Paper elevation={3} className={classes.paper3}>
              user 3
            </Paper>
            </Paper> */}

        </div>
    );
}

export default Screen;