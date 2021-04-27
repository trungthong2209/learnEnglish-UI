import io from "socket.io-client";
import StorageKeys from "../constants/storage-key";

// Creates a WebSocket connection
    var Socket = io("http://3.131.71.201:3001/", {
    auth: {
        token:
        `${localStorage.getItem(StorageKeys.TOKEN)}`,
    },
    });
    export default Socket;