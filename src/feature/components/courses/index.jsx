import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

Courses.propTypes = {};
const cards = [1, 2, 3];
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexWrap: "wrap",
  },
  toolbar: {
    background: "linear-gradient(315deg, #83eaf1 30%, #63a4ff 90%)",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "1.6 rem",
    marginTop: "3rem",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  fontOpen: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  font_title: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "3rem",
  },
  font_head: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "2rem",
  },
  font_content: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
    textDecoration: "none",
    height:"100%",
    width:"100%"
  },
}));

const courses = [
  {
    id: "1",
    img: "https://source.unsplash.com/random",
    name: "Khóa học từ vựng toeic cơ bản",
  },
  {
    id: "2",
    img: "https://source.unsplash.com/random",
    name: "Khóa học từ vựng toeic nâng cao",
  },
  {
    id: "3",
    img: "https://source.unsplash.com/random",
    name: "Khóa học từ vựng du lịch",
  },
];

function Courses(props) {
  const classes = useStyles();
  const [roomName, setRoomName] = useState("Nhóm");
  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CssBaseline />

            <AppBar className={classes.toolbar} position="relative">
              <Toolbar>
                <LocalLibraryIcon
                  className={classes.icon}
                  fontSize="large"
                  color="white"
                  large
                />
                <Typography
                  className={classes.fontOpen}
                  className={classes.font_title}
                  variant="h3"
                  color="inherit"
                  noWrap
                >
                  KHÓA HỌC
                </Typography>
              </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
              <Grid container spacing={4}>
                {courses.map((course) => (
                  <Grid item key={course.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardActions>
                        <Link
                          to={`/courses/${course.id}`}
                          size="small"
                          color="primary"
                          className={classes.font_content}
                          value={course.id}
                          onClick={handleRoomNameChange}
                        >
                          <CardMedia
                            className={classes.cardMedia}
                            image={course.img}
                            title={course.name}
                          />
                          <CardContent className={classes.font_head}>
                            <Typography
                              gutterBottom
                              className={classes.font_head}
                              variant="h5"
                              component="h2"
                            >
                              {course.name}
                            </Typography>
                          </CardContent>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Courses;
