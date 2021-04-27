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
    marginTop: "3rem",
  },
});

const Messenger = () => {
  const classes = useStyles();
  const history = useHistory();
  const [userRe, setUserRe] = useState([
    1,
    "https://material-ui.com/static/images/avatar/1.jpg",
    "Lê Thanh Hà",
  ]);
  const [listFriend, setlistFriend] = useState([
    {
      id: 1,
      avt: "https://material-ui.com/static/images/avatar/1.jpg",
      name: "Lê Thanh Hà",
    },
    {
      id: "60768f44c3f0a0ade9846736",
      avt: "https://material-ui.com/static/images/avatar/4.jpg",
      name: "Lê Xuân Hiếu",
    },

    {
      id: "60685a61a8953bc885582b70",
      avt: "https://material-ui.com/static/images/avatar/2.jpg",
      name: "Đoàn Trung Thông",
    },
    {
      id: "2",
      avt: "https://material-ui.com/static/images/avatar/5.jpg",
      name: "Ngô Ngọc Mỹ",
    },
  ]);
  //resret component
  const [value, setValue] = useState();

  const refresh = ()=>{
      // re-renders the component
      setValue({});
  }
  


  //id send
  const loggedInUser = useSelector((state) => state.user.current);
  const idSend = loggedInUser._id;
  console.log(loggedInUser);
  const [idd, setId] = useState("");
  function sendId(id, avt, name) {
    let data = [id, avt, name];
    setUserRe(data);
    history.push("/tin-nhan/" + id);
    setId(id);
    refresh();
    // window.location.reload();
  }
  console.log("id set: ", idd);

  const { messages, sendMessage } = useChat(userRe[0]);
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

  //get mess

  // lọc phần tử trùng
  function unique(arr) {
    return Array.from(new Set(arr));
  }
  return (
    <div>
      <Container className={classes.chat}>
        <Grid container component={Paper} className={classes.chatSection}>
          <Grid item xs={3} className={classes.borderRight500}>
            <List>
              <ListItem button key="RemySharp">
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Xuân Hiếu"></ListItemText>
              </ListItem>
            </List>
            <Divider />
            <Grid item xs={12} style={{ padding: "10px" }}>
              <TextField
                id="outlined-basic-email"
                label="Search"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Divider />
            <List>
              {listFriend.map((friend, index) => (
                <div
                  key={friend.id}
                  onClick={() => {
                    sendId(friend.id, friend.avt, friend.name);
                  }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <Avatar alt="Lê Hiếu" src={friend.avt} />
                    </ListItemIcon>
                    <ListItemText primary={friend.name}>
                      {friend.name}
                    </ListItemText>
                    {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                  </ListItem>
                </div>
              ))}
            </List>
          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12}>
              <List>
                <ListItem button key="RemySharp">
                  <ListItemIcon>
                    <Avatar alt="Remy Sharp" src={userRe[1]} />
                  </ListItemIcon>
                  <ListItemText primary={userRe[2]}></ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Grid>
            <ListChat />
            <List className={classes.messageArea}>
              {unique(messages).map((mess, index) =>
                mess.authorId != idSend ? (
                  <ListItem key={index}>
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText
                          align="left"
                          primary={mess.message}
                        ></ListItemText>
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText
                          align="left"
                          secondary={mess.timeSend.slice(0, 16)}
                        ></ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                ) : (
                  <ListItem key={index}>
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText
                          align="right"
                          primary={mess.message}
                        ></ListItemText>
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText
                          align="right"
                          secondary={mess.timeSend.slice(0, 16)}
                        ></ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                )
              )}
            </List>
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
    </div>
  );
};

export default Messenger;
