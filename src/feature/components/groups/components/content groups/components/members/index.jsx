import { makeStyles, Typography } from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import React from "react";
Members.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
   
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#fffffe",
    background: "linear-gradient(315deg, #83eaf1 30%, #63a4ff 90%)",
    marginBottom:"2rem"
  },
  name: {
    fontSize: "1.6rem",
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#0d0800",
    overflow: "hidden",
    textOverflow: "ellipsis",
  //  display: "-webkit-box",
  //  -webkit-line-clamp: 1, /* number of lines to show */
  //  -webkit-box-orient: vertical, 
  },
  role:{
    marginTop:"0.5rem",
    fontSize:"3rem",
    color:"#fce66d",

  }
}));

const users = [
  {
    id: 1,
    avt:"https://source.unsplash.com/random/200x200?sig=1",
    name: "Lê Xuân Hiếu",
    role: "owner",
    status: "online",
  },
  {
    id: 2,
    avt:"https://source.unsplash.com/random/200x200?sig=2",
    name: "Lê Hạ Hiếu",
    role: "member",
    status: "ofline",
  },
  {
    id: 3,
    avt:"https://source.unsplash.com/random/200x200?sig=3",
    name: "Lê Thu Hiếu",
    role: "member",
    status: "ofline",
  },
  {
    id: 4,
    avt:"https://source.unsplash.com/random/200x200?sig=4",
    name: "Lê Đông Hiếu",
    role: "member",
    status: "online",
  },
  {
    id: 5,
    avt:"https://source.unsplash.com/random/200x200?sig=5",
    name: "Lê Mưa Hiếu",
    role: "member",
    status: "ofline",
  },
  {
    id: 6,
    avt:"https://source.unsplash.com/random/200x200?sig=6",
    name: "Lê Khô Hiếu",
    role: "member",
    status: "online",
  },
];
  

function Members(props) {
  const classes = useStyles();
  let member = props.member;
  console.log(member)
  return (
    <React.Fragment>
      <Grid item xs={12} >
      <Paper className={classes.title}>
      <Typography variant="h3" className="header-message">
          Thành viên
        </Typography>
      </Paper>
        
      </Grid>
      <List>
        {member.map((mem) => (
          <ListItem button key={mem.id}>
            <ListItemIcon>
              <Avatar
                alt={mem.name}
                src={mem.avatar}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography className={classes.name}>{mem.userName}</Typography>
              }
            >
              
            </ListItemText>
            {/* {mem.role === "owner" ? (
              <ListItemText >
                <StarsIcon className={classes.role}/>
              </ListItemText>
            ) : (
              " "
            )}
            {mem.status === "online" ? (
              <ListItemText align="right">
                <FiberManualRecordIcon color="primary" />
              </ListItemText>
            ) : (
              <ListItemText align="right">
                <FiberManualRecordIcon />
              </ListItemText>
            )} */}
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

export default Members;
