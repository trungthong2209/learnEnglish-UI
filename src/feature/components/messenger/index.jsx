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
});

const Messenger = () => {
  const classes = useStyles();
  const history = useHistory();

  const [listFriend, setlistFriend] = useState("");

  const [userRe, setUserRe] = useState([]);

  //get mess
  const [MessesageOld, setMessesageOld] = useState([]);

  //resret component
  const [value, setValue] = useState();

  //id send
  const loggedInUser = useSelector((state) => state.user.current);
  const idSend = loggedInUser._id;
  const avatarSend = "https://material-ui.com/static/images/avatar/1.jpg";
  const userNameSend =  loggedInUser.userName;
  console.log(loggedInUser);
  const [idd, setId] = useState("");

  const [messagess, setMessagess] = useState([]); // Sent and received messages

  const { messages, sendMessage } = useChat(userRe[0], setMessagess, messagess);
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
      const messList = await userApi.getMessById(id);
      console.log("messsss::: ", messList);
      setMessesageOld(messList);
    };
    fetchMessage();

    // window.location.reload();
  }

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
  const handelMatch = () => {
    
    Socket.emit("matchVolunteers","607bd8e8c3f0a0ade9846772")
        let dataVo = {};
        //send data
        Socket.on("matchVolunteers", (data)=>{
          console.log("data đã match: ",data);
          dataVo = data;
        })
        console.log(dataVo)
        Socket.on("pairing", (data)=>{
          console.log("data đã paring: ",data);
          let userRecive =  [data._id, data.avatar, data.userName];
          setUserRe(userRecive);
          console.log('người nhânjnnnnnn: ',userRecive)
          sendId(data._id, data.avatar, data.userName)
            console.log("newwwwww Messs: ",  )
            console.log("người nhận: ", userRe);
            console.log("người gửi: ", userSend);

            sendMessage("Xin chào bạn, hiện tại tôi đang gặp một số vấn đề trong việc học tiêng anh, bạn có thể giúp tôi không ạ? ^^", userSend);

            
            
        })
  };
  console.log("useRRRRRRRRRRREEEEEEEEEEEEEEEE: ", userRe[0]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
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
              ) : (
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
                ? listFriend.map((friend, index) => (
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
                          <Avatar src={friend.recipients.recipientAvatar} />
                        </ListItemIcon>
                        <ListItemText primary={friend.recipients.recipientName}>
                          {friend.recipients.recipientName}
                        </ListItemText>
                        {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                      </ListItem>
                    </div>
                  ))
                : ""}
            </List>
          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12}>
              <List>
                <ListItem button key="RemySharp">
                  <ListItemIcon>
                  {userRe[1] == undefined ? '' : <Avatar src={userRe[1]} />}
                  </ListItemIcon>
                  <ListItemText primary={userRe[2]}></ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Grid>
            <ListChat
              messages={messages}
              idSend={idSend}
              userRe={userRe}
              MessesageOld={MessesageOld}
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
    </div>
  );
};

export default Messenger;
