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
import HeaderCourses from "./components/headerCourse";
import Vocabulary from "./components/vocabulary";
import Rank from "./components/topUser";
import { Redirect, Route } from 'react-router';
import Learn from "../../../learn";
ContentCourse.propTypes = {};
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
  title:{
    fontSize:"2.5rem",
    fontWeight:"700",
  },
  main:{
    marginTop:"3rem",
  }
}));

function ContentCourse(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.main}>
        <Container >
          <Paper elevation={3}>
            <Grid container spacing={0}>
              <HeaderCourses />
              <Grid item xs={8}>
                
                <Paper elevation={0}  className={classes.paper}>
                <p className={classes.title}>Từ vựng khóa học</p> 
                  <Vocabulary />
                  
                </Paper>
              </Grid>
              <Grid item xs={4}>
             
                <Paper elevation={0} className={classes.paper}>
                <p className={classes.title}>Bảng xếp hạng</p> 
                  <Rank />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
    </div>
  );
}

export default ContentCourse;
