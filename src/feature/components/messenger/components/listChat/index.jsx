import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { default as React, useEffect, useState } from "react";
import userApi from "../../../../../api/userApi";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  content:{
    display:"block",
    width:"450px",
    position:"relative",
    margin:"0 0 70px 0"
    
  }
  ,
  content2:{
    display:"block",
    width:"450px",
    position:"relative",
    margin:"0 0 70px 0"
  },
  textMess:{
    position:"absolute",
    border:"1px solid gray",
    padding:"10px",
    borderRadius:"20px",
    wordWrap:"break-word",
    margin:"0 0 0px 0" 
    
    
  },
  time:{
    position:"absolute",
    margin:"0 0 0px 10px",
    bottom:"-360%",
  },
  textMess2:{
    border:"1px solid gray",
    padding:"10px",
    borderRadius:"20px",
    wordWrap:"break-word",
    position:"absolute",
    right: "-100%",
    margin:"0 0 20px 0" 
  },
  time2:{
    position:"absolute",
    bottom:"-465%",
    right: "-100%",
  }
});

function ListChat(props) {
     const classes = useStyles();
     let {messages, idSend, userRe, MessesageOld,loading} = props;
     console.log("MessesageOld", MessesageOld)
    var pathArray = window.location.pathname.split('/');

    
    //get message old

    const [id, setId] = useState(userRe[[0]]);
    console.log("settiid",id)
  
  // lọc phần tử trùng
  function unique(arr) {
    return Array.from(new Set(arr));
  }
  if (loading) {
    return <CircularProgress size="20px" />;
  }
  

    return (
        <div>
          <List className={classes.messageArea}>
              {unique(MessesageOld).map((mess, index) =>
                mess.author.authorId != idSend ? (
                  <ListItem key={index} className={classes.content}>
                    <p className={classes.textMess}>{mess.message}</p>
                    <p className={classes.time}>{mess.timeSend.slice(0, 16)}</p>

                   
                  </ListItem>
                ) : (
                  <ListItem key={index} className={classes.content2}>
                    <p className={classes.textMess2}>{mess.message}</p>
                    <p className={classes.time2}>{mess.timeSend.slice(0, 16)}</p>
                  </ListItem>
                )
              )}
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
        </div>
    //     <List className={classes.messageArea}>
    //     {unique(messages).map((mess, index) => (
    //       <ListItem key={index}>
    //           <Grid container>
    //             <Grid item xs={12}>
    //               <ListItemText
    //                 align="left"
    //                 primary={mess.message}
    //               ></ListItemText>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <ListItemText
    //                 align="left"
    //                 secondary={mess.timeSend.slice(0,16)}
    //               ></ListItemText>
    //             </Grid>
    //           </Grid>
    //       </ListItem>
    //     ))}
    //   </List>
    )
}

ListChat.propTypes = {

}

export default ListChat

