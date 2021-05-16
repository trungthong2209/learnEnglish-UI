import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import HeaderCourses from "./components/headerCourse";
import Rank from "./components/topUser";
import Vocabulary from "./components/vocabulary";
import { useParams } from "react-router";
import CoursesApi from "../../../../../api/courses";
import Learn from "./components/learn";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TextField } from "@material-ui/core";
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
    fontSize:"25px",
    fontWeight:"700",
  },
  main:{
    marginTop:"30px",
  },
  none:{
    display: "none",
  },
  appBar: {
    backgroundImage: 'linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)',
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ContentCourse(props) {
  const classes = useStyles();
  const param = useParams();
  const coursesId = param.courseId;
  const [dataQuizz, setDataQuizz] = useState([]);
  console.log(coursesId);
  const [infoCourse, setInfoCourse] = useState({});
  useEffect(() => {
    const fetchInforCourse = async () => {
      let info = await CoursesApi.getCoursesById(coursesId);
      console.log("info: ",info)
      setInfoCourse(info);
      setDataQuizz(info[0].quizz)
    };
    fetchInforCourse();
  }, []);
  console.log(dataQuizz)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Grid className={classes.main}>
        <Container >
          <Paper elevation={3}>
            <Grid container spacing={0}>
              <HeaderCourses onClick={handleClickOpen}/>
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
      <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Học từ vựng
            </Typography>
            <b  >
              Điểm : 1000
            </b>
          </Toolbar>
        </AppBar>
        <div>
          < Learn data={dataQuizz} />
        </div>
      </Dialog>
    </div>
      </div>
      
  );
}

export default ContentCourse;
