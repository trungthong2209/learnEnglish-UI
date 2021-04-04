import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles, Typography } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
Rank.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#fffffe",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    marginBottom: "2rem",
  },
  name: {
    fontSize: "1.6rem",
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#0d0800",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft:"2.5rem  "
    //  display: "-webkit-box",
    //  -webkit-line-clamp: 1, /* number of lines to show */
    //  -webkit-box-orient: vertical,
  },
  // role:{
  //   marginTop:"0.5rem",
  //   fontSize:"3rem",
  //   color:"#fce66d",

  // }
  stt:{
    fontSize: "1.6rem",
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#0d0800",
    margin:"10%  0.5rem 0 0 ",
  },
  soccer:{
    fontSize: "1.6rem",
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#0d0800",
  }
}));

const users = [
  {
    id: 1,
    avt: "https://source.unsplash.com/random/200x200?sig=1",
    name: "Lê Xuân Hiếu",
    soccer: 3000,
  },
  {
    id: 2,
    avt: "https://source.unsplash.com/random/200x200?sig=2",
    name: "Lê Hạ Hiếu",
    soccer: 2500,
  },
  {
    id: 3,
    avt: "https://source.unsplash.com/random/200x200?sig=3",
    name: "Lê Thu Hiếu",
    soccer: 2000,
  },
  {
    id: 4,
    avt: "https://source.unsplash.com/random/200x200?sig=4",
    name: "Lê Đông Hiếu",
    soccer: 1500,
  },
  {
    id: 5,
    avt: "https://source.unsplash.com/random/200x200?sig=5",
    name: "Lê Đông Hiếu",
    soccer: 1500,
  },
  {
    id: 6,
    avt: "https://source.unsplash.com/random/200x200?sig=6",
    name: "Lê Đông Hiếu",
    soccer: 1500,
  },
  {
    id: 7,
    avt: "https://source.unsplash.com/random/200x200?sig=7",
    name: "Lê Đông Hiếu",
    soccer: 1500,
  },
  {
    id: 8,
    avt: "https://source.unsplash.com/random/200x200?sig=9",
    name: "Lê Đông Hiếu",
    soccer: 1500,
  },
  {
    id: 9,
    avt: "https://source.unsplash.com/random/200x200?sig=9",
    name: "Lê Đông Hiếu",
    soccer: 1500,
  },

  {
    id: 10,
    avt: "https://source.unsplash.com/random/200x200?sig=10",
    name: "Lê Đông Hiếu",
    soccer: 1500,
  },
];

function Rank(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid>
        <Paper elevation={3}>
        <List>
        {users.map((top) => (
          <ListItem button key={top.id}>
            <ListItemIcon>
            <Typography className={classes.stt}>{top.id}. </Typography>
              <Avatar alt={top.name} src={top.avt} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography className={classes.name}>{top.name}</Typography>
              }
            ></ListItemText>
            <ListItemText align="right"
            primary={
              <Typography className={classes.soccer}>{top.soccer}</Typography>
            }>
                
              </ListItemText>
          </ListItem>
        ))}
      </List>
        </Paper>
      
      </Grid>
      
    </React.Fragment>
  );
}

export default Rank;
