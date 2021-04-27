import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import { Avatar, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Close } from "@material-ui/icons";
import { Box, IconButton } from "@material-ui/core";
import Upload from "./upload";
import groupsApi from "../../../../../../../api/groupsApi";

UploadFile.propTypes = {};
const useStyles = makeStyles((theme) => ({
  font_button: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
    textAlign: "center",
    boxShadow: "none",
    backgroundColor: "#63a4ff",
    backgroundImage: "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width: "100%",
    padding: "0, 3rem",
  },
  title: {
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#fffffe",
    background: "linear-gradient(315deg, #83eaf1 30%, #63a4ff 90%)",
    marginBottom: "2rem",
  },
  name: {
    fontSize: "1.6rem",
    fontWeight: "500",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#0d0800",
    overflow: "hidden",
    textOverflow: "ellipsis",
    //  display: "-webkit-box",
    //  -webkit-line-clamp: 1, /* number of lines to show */
    //  -webkit-box-orient: vertical,
  },
}));

function UploadFile(props) {
  let { groupId } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [fileUpload, setFileUpload] = useState("");
//   function setFile(event) {
//     // Get the details of the files
//     setFileUpload(event.target.files);
//   }
//   const postFile = async (event) => {
//     // HTTP POST
//     try {
//       console.log("evennt: ", typeof fileUpload[0]);
//       let file = fileUpload[0];
//       let data = {
//         groupId: groupId,
//         Files:
//           '{name: "C2SE12_TOPIC.docx", lastModified: 1614875186141, lastModifiedDate: Thu Mar 04 2021 23:26:26 GMT+0700 (Indochina Time), webkitRelativePath: "", size: 20287, …}',
//       };
//       console.log(data);
//       await groupsApi.uploadFile(JSON.stringify(data));
//     } catch (error) {
//       console.log("LỖI", error);
//     }
//   };

    const handleChange = (event) => {
        console.log(event.target.value);
        setFileUpload(event.target.value);
        
    }
    

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let formData = new FormData();
            formData.append("groupId", groupId);
            formData.append("files", fileUpload);
            // console.log(formData);
            // console.log(typeof fileUpload);
            // const data = {
            //     "groupId": groupId,
            //     "files" : fileUpload
            // }
            // console.log(data);
            await groupsApi.uploadFile(formData, groupId);
                } catch (error) {
                  console.log("LỖI", error);
                }


      
    }
  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.title}>
          <Typography variant="h4" className="header-message">
            Tệp
          </Typography>
        </Paper>
      </Grid>
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography className={classes.name}>Tệp 1</Typography>}
          ></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography className={classes.name}>Tệp 1</Typography>}
          ></ListItemText>
        </ListItem>
      </List>

      <Button className={classes.font_button} onClick={handleClickOpen} component="label">
        Upload File
        
      </Button>
      {/* <div>
        <input type="file" name="docx" onChange={setFile.bind(this)} />
        <input type="button" onClick={postFile} value="Upload" />
      </div> */}
      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
          <DialogContent>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <h1>File Upload</h1>
              <input type="file" onChange={handleChange} />
              <button type="submit">Upload</button>
            </form>

          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default UploadFile;
