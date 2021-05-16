import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { default as React, useEffect, useState } from "react";
import userApi from "../../../../../api/userApi";
import { makeStyles } from "@material-ui/core/styles";

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
  messageRight:{
    width:"500px",
    marginLeft: "600px",
  }
});

function ListChat(props) {
     const classes = useStyles();
     let {messages, idSend, userRe, MessesageOld} = props;
     console.log("MessesageOld", MessesageOld)
    var pathArray = window.location.pathname.split('/');

    
    //get message old

    const [id, setId] = useState(userRe[[0]]);
    console.log("settiid",id)
  
  // lọc phần tử trùng
  function unique(arr) {
    return Array.from(new Set(arr));
  }
  

    return (
        <div>
          <List className={classes.messageArea}>
              {unique(MessesageOld).map((mess, index) =>
                mess.author.authorId != idSend ? (
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

