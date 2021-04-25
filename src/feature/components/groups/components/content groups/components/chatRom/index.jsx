import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import SendIcon from "@material-ui/icons/Send";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, makeStyles, Typography } from "@material-ui/core";
import * as yup from "yup";
import InputField from "../../../../../../../components/form-controls/InputField";
import { yupResolver } from "@hookform/resolvers/yup";

import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import useChat from "./components/useChat";
import groupsApi from "../../../../../../../api/groupsApi";
import { Server } from "socket.io";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import StorageKeys from "../../../../../../../constants/storage-key";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "hiden",
  },
  headerMessage: {
    fontSize: "1.6rem",
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#fffffe",
    background: "linear-gradient(315deg, #83eaf1 30%, #63a4ff 90%)",
  },
  paper: {
    marginTop: "1rem",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  chatRom: {
    width: "42.6rem",
    marginTop: "1rem",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  avt: {
    height: "4rem",
    width: "4rem",
  },
  name: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginLeft: "1rem",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#0d0800",
    textAlign: "justify",
    textJustify: "inter-word",
    height: "100%",
    width: "20rem",
  },
  message: {
    fontSize: "1.8rem",
    fontWeight: "500",
    marginLeft: "0.5rem",
    fontFamily: ["Open Sans", "sans-serif"].join(","),

    color: "#0d0800",
  },
  time: {
    fontSize: "1.3rem",
    marginRight: "7rem",
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#gray",
  },
  mess: {
    padding: 0,
    width: "40rem",
    wordWrap: "breakWord",
  },
  inputMess: {
    marginTop: "0.3rem",
    fontSize: "2rem",
    // borderWidth: "calc(var(--border-width) * 1px)",
    // borderStyle: "solid",
    // borderColor: "0.5rem",
    // borderRadius: "calc(var(--border-radius) * 1px",
    // outline: "transparent",
    // width: "100%",
    // transition: "border-color calc(var(--transition, 0.2) * 1s) ease",
    borderStyle: "none",
    width: "100%",
    height: "80%",
  },
  paperInput: {
    padding: " 0.5rem 0.5rem",
    marginTop: "2rem",
  },
  submit: {
    background: "linear-gradient(315deg, #83eaf1 30%, #63a4ff 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    padding: "0 30px",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
  },
}));

const userSend = {
  id: 1,
  avt: "https://source.unsplash.com/random/200x200?sig=1",
  user: "Lê Xuân Hiếu",
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eum provident accusamus sed repellat totam commodi ipsum distinctio deleniti fugiat asperiores itaque, libero mollitia illo quia deserunt vel doloremque eius.",
  time: "06:00 09/10/1999",
};
// ChatRoom.propTypes = {
//     onSubmit: PropTypes.func,

// };
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

var socket = io("http://3.131.71.201:3001/", {
  auth: {
    token:
    `${localStorage.getItem(StorageKeys.TOKEN)}`,
  },
});
let textMessSend= '';

const ChatRoom = (props) => {
  const classes = useStyles();
  const roomId = props.groupId;
  const [listMess,setlistMess] = useState([]);
  //get message old
  const [MessesageOld, setMessesageOld] = useState([]);
  const [loading, setLoading] = useState(false);
  const groupId ={'groupId' : roomId};
  console.log(groupId)
  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      const messList = await groupsApi.getMess(roomId);
      console.log("mess",messList)
      setMessesageOld(messList);
      setLoading(false);
    };
    fetchMessage();
  }, []);

  // socket
  socket.on("send-message-public", (data)=>{
    console.log("data đã send: ",data);
  })
 
  const [newMessage, setNewMessage] = useState("");
  const loggedInUser = useSelector((state) => state.user.current);
  

  if (socket !== undefined) {
    console.log(socket);
    console.log("Connected to server");
    //join group
    socket.on("joinGroup", (data) =>{
      console.log( "xxxxxxxxxxxxx: ",data);
    });

    //send public
    socket.on("send-message-public", (data)=>{
      console.log("data đã send: ",data);
    })

    // //out group
    // socket.on("leavingGroup", (message) => {
    //   console.log(message);
    // });
    // socket.on("pairing", (data) => {
    //   console.log(data);
    // });
  }
  
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleSendMessage = () => {
    textMessSend = newMessage;
    let data = {
      groupId: roomId,
      message: textMessSend,
    };
    console.log("dataaaaaaaaa: ",data);
    socket.emit("send-message-public", data)
    socket.on("send-message-public", (data)=>{
      console.log("data đã send: ",data);
    })

    // let data = {  
    //   sendToId: '60685a61a8953bc885582b70',
    //   message: textMessSend,
    //   }

    // console.log("data máy: ",data);
    //  socket.emit("send-message-private", data)
    //  socket.on("send-message-private", (data)=>{
    //   console.log(data)
    // })
    console.log("mess: ",textMessSend)
    setNewMessage("");

  };

    let userSend = {
      id: loggedInUser._id,
      avt: "https://source.unsplash.com/random/200x200?sig=1",
      user: loggedInUser.userName,
      content: textMessSend,
      time: time,
    };

    
  const outputMessage = (message)=>{
    //output mess
    socket.on("message", message =>{
      outputMessage(message);
   });
  }


  
  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.headerMessage}>
          <Typography variant="h3" className="header-message">
            Trò chuyện
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.chatRom}>
          <List className={classes.messageArea}>
             {MessesageOld.map((message, i) => ( 
            <ListItem
            key={i}
            className={`message-item ${
              message.ownedByCurrentUser ? "my-message" : "received-message"
            }`}
            >
              <Grid container>
                <Grid item xs={1}>
                  <Avatar
                    className={classes.avt}
                    alt={message.user}
                    src={message.avt}
                  />
                </Grid>
                <Grid item xs={11}>
                  <ListItemText
                    align="left"
                    className={classes.mess}
                    primary={
                      <Typography className={classes.name}>
                        <Typography className={classes.name}>{userSend.user} <span className={classes.message}>{message.content}</span> </Typography>
                        {/* <Typography className={classes.name}>
                          {userSend.user}{" "}
                          <span className={classes.message}> </span>{" "}
                        </Typography> */}
                      </Typography>
                    }
                  ></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText
                    align="center"
                    primary={
                      <Typography className={classes.time}> {message.timeSend}</Typography>
                    }
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={3} className={classes.paperInput}>
          <Grid container>
            <Grid item xs={10}>
              <input
                value={newMessage}

                onChange={handleNewMessageChange}
                placeholder="Nhập tin nhắn"
                className={classes.inputMess}
                // onKeyPress={(ev) => {
                //   if (ev.key === "Enter") {
                //     textMessSend= newMessage;
                //     setNewMessage("");
                //     ev.preventDefault();
                //   }
                // }}
              />
            </Grid>
            <Grid xs={2} align="right">
              <Button
                type="submit"
                className={classes.submit}
                variant="contained"
                fullWidth
                onClick={handleSendMessage}
              >
                Gửi
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default ChatRoom;
