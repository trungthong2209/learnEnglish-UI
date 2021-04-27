import React, {useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Members from "./components/members";
import Screen from "./components/livestream";
import ChatRoom from "./components/chatRom";
import Record from "./components/record";
import ListGroups from "./components/listGroups";
import { useParams } from "react-router";
import io from "socket.io-client";
import groupsApi from "../../../../../api/groupsApi";
import StorageKeys from "../../../../../constants/storage-key";
import UploadFile from "./components/uploadFile";



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"1rem",
    flexGrow: 1,
    padding:"0 0 0 2rem",
    backgroundColor:"#fafafa",
  },
  back:{
    height:"100%"
},
  paper: {
    marginTop:"2rem",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    
  },
 
}));



export default function ContentGroup() {
  const classes = useStyles();
  const param = useParams();
  const groupId = param.groupId;
  const [infoGroup, setInfoGroup] = useState({});
  const [member, setMember] = useState([]);
  const [file, setFile] = useState();
  const id ={"_id" : groupId};
  useEffect(() => {
    const fetchInfoGroup = async () => {
      let info = await groupsApi.getGroupById(groupId);
      console.log("info: ",info)
      setMember(info[0].userJoinGroup)
      setInfoGroup(info);
    };
    fetchInfoGroup();
  }, []);
   
  
  return (
    <div className={classes.root}>
      <Grid spacing={3} >
        <Grid container spacing={3}>
          <Grid  container item xs={2} spacing={3}>
          {/* <Grid  item  xs={3}>
              
              <Paper className={classes.paper} className={classes.back}>
                <ListGroups />
              </Paper>
            </Grid> */}
            <Grid item xs={12}>
              
            <Paper elevation={3} className={classes.paper} >
              <Members member={member}  />
              
            </Paper>
            <Paper elevation={3} className={classes.paper} >
              <UploadFile groupId={groupId}/>
              
            </Paper>
            
          </Grid>
          </Grid>
          <Grid item xs={7}>
            <Paper elevation={3} className={classes.paper}>
              <Screen groupId={groupId} />
            </Paper>
            <Paper elevation={3} className={classes.paper}>
              <Record />
            </Paper>
          </Grid>
          <Grid  item xs={3}>
            <Paper elevation={3} className={classes.paper}>
              <ChatRoom groupId={groupId}/>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
