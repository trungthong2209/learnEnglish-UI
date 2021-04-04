import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import CoursesForProfile from "./components/courses";
import HeaderUser from "./components/headerUser";
Profile.propTypes = {};
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
}));


const user = {
  id: 1999,
  avt:"https://source.unsplash.com/random/200x200?sig=11",
  name: "Lê Xuân Hiếu",
  numFollowing: 15,
  numFollower: 100,
  facebook:"wwww.faceboook.com/xuanhieu.le.775",
  instargram:"https://www.instagram.com/bellicose_106/",
  intro:"Tôi là người dùng hehehe ",
  courses: [{
    id: 1,
    img:"https://source.unsplash.com/random/200x200?sig=11",
    namecourses: "Từ vựng toeic cơ bản",
    
},
{
    id: 2,
    img:"https://source.unsplash.com/random/200x200?sig=12",
    namecourses: "Từ vựng toiec nâng cao",
    
},{
    id: 3,
    img:"https://source.unsplash.com/random/200x200?sig=13",
    namecourses: "Từ vựng chuyên ngành du lịch",
    
}],
  groups: [{
    id: 1,
    img:"https://source.unsplash.com/random/200x200?sig=14",
    namecourses: "Nhóm học toeic",
},
{
    id: 2,
    img:"https://source.unsplash.com/random/200x200?sig=15",
    namecourses: "Nhóm học ngữ pháp",
},{
    id: 3,
    img:"https://source.unsplash.com/random/200x200?sig=16",
    namecourses: "Nhóm luyện nghe",
}],
}

function Profile(props) {
  const loggedInUser = useSelector((state) => state.user.current);
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Container>
          
            <Grid container spacing={0}>
            <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
                 <HeaderUser user={loggedInUser} userFake={user}/>
                 </Paper>
            </Grid>
              <Grid item xs={12}>
                <Paper  className={classes.paper}>
                 <CoursesForProfile user={loggedInUser} userFake={user}  />
                </Paper>
              </Grid>
            </Grid>
          
        </Container>
      </Grid>
    </div>
  );
}

export default Profile;
