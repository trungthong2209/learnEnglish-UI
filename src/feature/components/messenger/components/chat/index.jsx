import { useEffect, useRef, useState } from "react";
import Socket from "../../../../../service/socket";

const useChat = (idUser) => {
    const [messages, setMessages] = useState([]); // Sent and received messages
    useEffect(() => {
       
        Socket.on("send-message-private", (data)=>{
        // console.log("data đã send: ",data);
        setMessages((messages) => [...messages, data]);
      })
    }, [idUser]);
    const sendMessage = (messageBody,user) => {
        let data = {
        sendToId: idUser,
        message: messageBody,
        };
        setMessages((messages) => [...messages, user]);
        Socket.emit("send-message-private", data);
        console.log(data)
    };
    return { messages, sendMessage };
  };

export default useChat;