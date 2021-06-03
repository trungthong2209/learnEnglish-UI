import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Close } from "@material-ui/icons";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import React from "react";
import { Link } from "react-router-dom";
import Socket from "../../../../../service/socket";
import CreateGroups from "../create_groups";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import pic from "./avtGroup.jpg";
GroupList.propTypes = {};
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
    fontSize: "30px",
  },
  font_head: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "20px",
  },
  groups: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "16px",
    textDecoration: "none",
    width: "100%",
    height: "100%",
  },
  addGroup: {
    fontSize: "200px",
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

function GroupList(props) {
  const { groups, loading } = props;
  const loggedInUser = useSelector((state) => state.user.current);
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <CircularProgress size="100px" />;
  }

  console.log(groups);
  const linkto = (id) => {
    history.push("/groups/" + id);
    window.location.reload();
  };

  return (
    <div>
      <Grid container spacing={4}>
        {loggedInUser.role == "teacher" || loggedInUser.role == "admin" ? (
          <Grid item xs={12} sm={6} md={4}>
            <ControlPointIcon
              className={classes.addGroup}
              onClick={handleClickOpen}
            />
          </Grid>
        ) : (
          ""
        )}

        {groups.map((group) => (
          <Grid item key={group._id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActions>
                <Link
                  // to={`/groups/${group._id}`}
                  size="small"
                  color="primary"
                  className={classes.groups}
                  value={group._id}
                  onClick={() => {
                    // console.log(group._id)
                    Socket.emit("joinGroup", group._id);
                    //join group
                    Socket.on("joinGroup", (data) => {
                      console.log("JOIN GROUP: ", data);
                    });
                    linkto(group._id);
                  }}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://thumbs.dreamstime.com/b/studying-english-whiteboard-teacher-explains-teaching-material-to-students-193164791.jpg"
                    title={group.topic}
                  />
                  <CardContent className={classes.font_head}>
                    <Typography
                      gutterBottom
                      className={classes.font_head}
                      variant="h5"
                      component="h2"
                    >
                      {group.groupName}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActions>
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
            <CreateGroups closeDialog={handleClose} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default GroupList;
