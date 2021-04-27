import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import PropTypes from 'prop-types'
import List from "@material-ui/core/List";
import userApi from "../../../../../api/userApi";

function ListChat(props) {
    var pathArray = window.location.pathname.split('/');

    
    //get message old

    const [id, setId] = useState(String(pathArray[2]));
    console.log("settiid",id)
  const [MessesageOld, setMessesageOld] = useState([]);
  useEffect(() => {
      
    const fetchMessage = async () => {
      const messList = await userApi.getMess();
      console.log("mess::: ",messList)
      setMessesageOld(messList);
    };
    fetchMessage();
  }, []);
  
  

    return (
        <div></div>
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

