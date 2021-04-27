import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Box, IconButton } from "@material-ui/core";
import CreateTopics from "../create_topic";

import ActionTopic from "./components/action";

TopicList.propTypes = {};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexWrap: "wrap",
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
  groups: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
    textDecoration: "none",
    width: "100%",
    height: "100%",
  },
  addGroup: {
    fontSize: "20rem",
    margin: "auto",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

function TopicList(props) {
  const { topics, loading } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <CircularProgress size="10rem" />;
  }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ControlPointIcon
            className={classes.addGroup}
            onClick={handleClickOpen}
          />
        </Grid>
        {topics.map((topic) => (
          <Grid item key={topic._id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActions>
              <Link
                  to={`/topics/${topic._id}`}
                  size="small"
                  color="primary"
                  className={classes.groups}
                  value={topic._id}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={topic.topic}
                  />
                  <CardContent className={classes.font_head}>
                    <Typography
                      gutterBottom
                      className={classes.font_head}
                      variant="h5"
                      component="h2"
                    >
                      {topic.topic}
                     
                    </Typography>
                  </CardContent>
                  </Link>
              </CardActions>
              <CardActions>
              <ActionTopic idTopic={topic._id} topic={topic.topic} description={topic.description}  />
                  </CardActions >
            </Card>
          </Grid>
        ))}
      </Grid>
      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
          <DialogContent>
            <CreateTopics closeDialog={handleClose} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default TopicList;
