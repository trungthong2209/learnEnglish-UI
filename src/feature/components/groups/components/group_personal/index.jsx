import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GroupIcon from "@material-ui/icons/Group";
import React from "react";

GroupsForYou.propTypes = {};
const cards = [1, 2, 3];
const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
    fontFamily: [
      "Open Sans",
      'sans-serif',
    ].join(','),
  },
  font_title:{
    fontFamily: [
        "Open Sans",
        'sans-serif',
      ].join(','),
    fontSize:"3rem",
  },
  font_head:{
    fontFamily: [
        "Open Sans",
        'sans-serif',
      ].join(','),
    fontSize:"2rem",
  },
  font_content:{
    fontFamily: [
        "Open Sans",
        'sans-serif',
      ].join(','),
    fontSize:"1.6rem",
  },
}));

function GroupsForYou(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <GroupIcon
            className={classes.icon}
            fontSize="large"
            color="white"
            large
          />
          <Typography  className= {classes.font_title} variant="h6" color="inherit" noWrap>
            NHÓM CỦA BẠN
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h3" component="h2"  className= {classes.font_head} >
                      Heading
                    </Typography>
                    <Typography  className= {classes.font_content}>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"  className= {classes.font_content}>
                      View
                    </Button>
                    <Button size="small" color="primary"  className= {classes.font_content}>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default GroupsForYou;
