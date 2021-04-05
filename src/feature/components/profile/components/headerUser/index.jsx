import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PropTypes from "prop-types";
import React from "react";
HeaderUser.propTypes = {
    user: PropTypes.object.isRequired,
};
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
  paperImg: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    flexWrap: "wrap",
  },
  paperName: {
    marginTop: "10%",
  },
  imgUser: {
    height: "25rem",
    width: "25rem",
  },
  nameUser: {
    fontSize: "3.5rem",
    textAlign: "left",
    fontWeight:"700",
  },
  info:{
    fontSize: "1.3rem",
    color:"gray",
    textAlign: "left",
    fontWeight:"500",
  },
  introUser: {
    fontSize: "1.6rem",
    fontStyle: "italic",
    textAlign: "left !important",
  },
  link: {
    display: "flex",
    justifyContent: "center",
  },
  linkShare: {
    marginTop: "20%",
  },
  button: {
    margin: theme.spacing(1),
  },
  Learn: {
    marginLeft: "3%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 40,
    padding: "0 30px",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
  },
  linkSocciel:{
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
    fontWeight:700,
  },
}));

function HeaderUser(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Paper className={classes.paperImg} elevation={0}>
                  <img
                    src={props.userFake.avt}
                    className={classes.imgUser}
                    alt=""
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paperName} elevation={0}>
                  <p className={classes.nameUser}>
                    {props.user.userName}
                    <Button
                    variant="contained"
                    color="default"
                    className={classes.Learn}
                    
                  >
                    Theo dõi 
                  </Button>
                  </p>
                  <p className={classes.info}><b>{props.userFake.numFollower}</b>  Người theo dõi &emsp;&emsp;&emsp;&emsp; Đang theo dõi <b>{props.userFake.numFollowing}</b> người dùng</p>
                  <p className={classes.introUser}>
                    {props.userFake.intro}
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0} className={classes.linkShare}>
                  <div className={classes.link}>
                   
                    <div className={classes.linkSocciel}>
                        Liên kết mạng xã hội
                    </div>
                  </div>
                  <div className={classes.share}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<FacebookIcon />}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<InstagramIcon />}
                    >
                      Instagram
                    </Button>
                  </div>
                </Paper>
              </Grid>
             
            </Grid>
         
    </React.Fragment>
  );
}

export default HeaderUser;
