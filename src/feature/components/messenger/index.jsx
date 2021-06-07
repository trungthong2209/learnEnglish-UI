import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import userApi from "../../../api/userApi";
import useChat from "./components/chat";
import { useHistory } from "react-router-dom";
import ListChat from "./components/listChat";
import { Button } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Socket from "../../../service/socket";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from 'notistack';
import { useParams } from "react-router";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "100%",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "2px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
  chat: {
    marginTop: "30px",
  },
  submit: {
    background: "linear-gradient(315deg, #63a4ff  0%, #83eaf1  74%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  closeButton: {
    position: "absolute",
    right: "10px",
    top: "10px",
    color: "gray",
  },
  wait: {
    margin: "0 0 10px 40%",
  },
  text: {
    margin: "0 0 10px 20%",
  },
});

const Messenger = () => {
  const classes = useStyles();
  const history = useHistory();
  const {enqueueSnackbar} = useSnackbar();
  const [listFriend, setlistFriend] = useState("");
  const [profile, setProfile]= useState([]);
  const [userRe, setUserRe] = useState([window.location.pathname.split("/")[2]]);
  const [loading, setLoading] = useState(false);
  //get mess
  const [MessesageOld, setMessesageOld] = useState([]);
  const param = useParams();
  //resret component
  const [value, setValue] = useState();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //id send
  const loggedInUser = useSelector((state) => state.user.current);
  const idSend = loggedInUser._id;
  const avatarSend = "https://material-ui.com/static/images/avatar/1.jpg";
  const userNameSend = loggedInUser.userName;
  console.log(loggedInUser);
  const [idd, setId] = useState("");

  const [messagess, setMessagess] = useState([]); // Sent and received messages

  const { messages, sendMessage } = useChat(userRe[0], setMessagess, messagess,idSend);
  const [newMessage, setNewMessage] = useState("");
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  //user send
  let userSend = {
    authorId: idSend,
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    userName: loggedInUser.userName,
    message: newMessage,
    timeSend: time,
  };
  const handleSendMessage = () => {
    sendMessage(newMessage, userSend);
    setNewMessage("");
  };

  function sendId(id, avt, name) {
    let data = [id, avt, name];
    setUserRe(data);
    history.push("/tin-nhan/" + id);
    setMessagess([]);
    setId(id);
    const fetchMessage = async () => {
      setLoading(true);
      const messList = await userApi.getMessById(id);
      console.log("messsss::: ", messList);
      setMessesageOld(messList);
      setLoading(false);
    };
    fetchMessage();

    // window.location.reload();
  }
  useEffect(() => {
    const fetchInfoGroup = async () => {
      let id= window.location.pathname.split('/')[2];
      let info = await userApi.infoProfile(id);
      console.log(info[0])
       setProfile(info[0]);

    };
    fetchInfoGroup();
  }, []);

  console.log(userRe);
  useEffect(() => {
    const fetchFriend = async () => {
      const userList = await userApi.getUserMess();
      setlistFriend(userList);
      console.log("console.log(userList);", userList);
      if (userList == []) {
        sendId(
          userList[0].recipients.recipientId,
          userList[0].recipients.recipientAvatar,
          userList[0].recipients.recipientName
        );
      }
    };

    if (listFriend == "") fetchFriend();
  }, []);

  //match
  //check togle
  const [freeTime, setfreeTime] = React.useState({
    checked: false,
  });
  if (loading) {
    return <CircularProgress size="20px" />;
  }
  const handleChange = (event) => {
    setfreeTime({ ...freeTime, [event.target.name]: event.target.checked });

    if (freeTime.checked == false) {
      Socket.emit("freeTimeMode");
      //send data
      Socket.on("turnOnMode", (data) => {
        console.log("data bật free time, data: ", data);
      });
    } else {
      console.log("đã tắt");
    }
  };
  let temp = 0;
  Socket.on("pairing", (data) => {
    console.log("data đã paring: ", data);
      sendId(data._id, data.avatar, data.userName);
      Socket.emit("stopMatching");
      handleClose();
  });
  const handelMatch = () => {
   
    Socket.emit("matchVolunteers", "607bd8e8c3f0a0ade9846772");
    let dataVo = {};
    //send data
    setOpen(true);
    // setLoading(true);
    Socket.on("matchVolunteers", (data) => {
      enqueueSnackbar('Tìm thành công, hãy tương tác với người đó đi nào.',{variant:'success'});
      console.log("data đã match: ", data);
      dataVo = data;
      handleClose();
        Socket.emit("stopMatching");
        setLoading(false);
    });
    console.log(dataVo);
  };

  const cancelMatch = () => {
    Socket.emit("stopMatching");
      handleClose();
    temp++;
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  var arrayIdList = [];

  if (listFriend == "") console.log("frieeasd", listFriend);

  console.log("idddd", arrayIdList);
  console.log("prooooooo: "+ profile);

  return (
    <div>
      <Container className={classes.chat}>
        <Grid container component={Paper} className={classes.chatSection}>
          <Grid item xs={3} className={classes.borderRight500}>
            <List>
              <ListItem button key="RemySharp">
                <ListItemIcon>
                  <Avatar
                    alt={loggedInUser.userName}
                    src={loggedInUser.avatar}
                  />
                </ListItemIcon>
                <ListItemText primary={loggedInUser.userName}></ListItemText>
              </ListItem>
            </List>
            <Divider />
            <Grid item xs={12} style={{ padding: "10px" }}>
              {loggedInUser.role == "teacher" ? (
                <FormControlLabel
                  control={
                    <Switch
                      checked={freeTime.checkedB}
                      onChange={handleChange}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Chế độ rảnh"
                />
              ) :  loggedInUser.role == "admin"? (
                <div>
                  <FormControlLabel
                  control={
                    <Switch
                      checked={freeTime.checkedB}
                      onChange={handleChange}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Chế độ rảnh"
                />
                  <Button
                  className={classes.submit}
                  variant="contained"
                  fullWidth
                  onClick={handelMatch}
                >
                  Tìm người trợ giúp
                </Button>
                </div>
                
              ):(
                <Button
                  className={classes.submit}
                  variant="contained"
                  fullWidth
                  onClick={handelMatch}
                >
                  Tìm người trợ giúp
                </Button>
              )}
            </Grid>
            <Divider />
            <List>
              {listFriend != []
                ? listFriend.map((friend, index) =>
                    friend.author.authorNameId == idSend ? (
                      arrayIdList.indexOf(idSend) != -1 ? (
                        <div
                          key={friend.recipients.recipientId}
                          onClick={() => {
                            sendId(
                              friend.recipients.recipientId,
                              friend.recipients.recipientAvatar,
                              friend.recipients.recipientName
                            );
                          }}
                        >
                          <ListItem button>
                            <ListItemIcon>
                              (friend.recipients.recipientAvatar == "" ? (
                                <Avatar src={friend.recipients.recipientAvatar} />
                             
                              ) : (
                                <Avatar src="/static/images/avatar/1.jpg" />
                              ))
                            </ListItemIcon>
                            <ListItemText
                              primary={friend.recipients.recipientName}
                            >
                              {friend.recipients.recipientName}
                            </ListItemText>
                            {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                          </ListItem>
                        </div>
                      ) : (
                        ""
                      )
                    ) : arrayIdList.indexOf(friend.author.authorNameId) ==
                      -1 ? (
                      <div
                        key={friend.author.authorNameId}
                        onClick={() => {
                          sendId(
                            friend.author.authorNameId,
                            friend.author.authorAvatar,
                            friend.author.authorName
                          );
                        }}
                      >
                        <ListItem button>
                          <ListItemIcon>
                            <Avatar src={friend.author.authorAvatar} />
                          </ListItemIcon>
                          <ListItemText primary={friend.author.authorName}>
                            {friend.author.authorName}
                          </ListItemText>
                          {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                        </ListItem>
                      </div>
                    ) : (
                      ""
                    )
                  )
                : ""}
            </List>
          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12}>
              <List>
                <ListItem button key="RemySharp">
                  <ListItemIcon>
                    {profile.avatar == ""? (
                      <Avatar src="/static/images/avatar/1.jpg" />
                    ) : (
                      <Avatar src={profile.avatar} />
                      // <Avatar src={userRe[1]} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={userRe[2]}>{profile.userName}</ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Grid>
            <ListChat
              messages={messages}
              idSend={idSend}
              userRe={userRe}
              MessesageOld={MessesageOld}
              loading={loading}
            />

            <Divider />
            <Grid container style={{ padding: "20px" }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  value={newMessage}
                  onChange={handleNewMessageChange}
                  placeholder="Nhập tin nhắn"
                  className={classes.inputMess}
                  fullWidth
                  onKeyDown={handleKeyDown}
                />
              </Grid>
              <Grid xs={1} align="right">
                <Fab
                  color="primary"
                  aria-label="add"
                  onClick={handleSendMessage}
                >
                  <SendIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          ></DialogTitle>
          <DialogContent>
            <CircularProgress size="100px" className={classes.wait} />
            <h2 className={classes.text}>Đang tìm kiếm, bạn vui lòng chờ!!!</h2>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              className={classes.submit}
              variant="contained"
              fullWidth
              onClick={cancelMatch}
            >
              Hủy
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Messenger;
