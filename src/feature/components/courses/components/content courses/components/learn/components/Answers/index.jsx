import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const useStyles = makeStyles((theme) => ({}));

function Answers(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  var answers = props.answers;
  var selectClick = props.OnClick;
  const [stateAnswers, setStateAnswers] = useState({
    isAnswered: false,
    classNames: ["", "", "", ""],
  });
  let checkAnswer = (e) => {
    let { isAnswered } = props.isAnswered;

    if (!isAnswered) {
      let elem = e.currentTarget;
      let correct = props.correct;
      let increaseScore = props.increaseScore;
      let answer = Number(elem.dataset.id);
      let updatedClassNames = stateAnswers.classNames;

      if (answer === correct) {
        updatedClassNames[answer - 1] = "right";
        increaseScore();
        selectClick();
      } else {
        updatedClassNames[answer - 1] = "wrong";
        handleClickOpen();
      }
      const newstateAnswers = {
        ...stateAnswers,
        classNames: updatedClassNames,
      };
      setStateAnswers(newstateAnswers);

      props.showButton();
    }
  };

  return (
    <div>
      <div id="answers">
        <ul>
          <li
            onClick={checkAnswer}
            className={stateAnswers.classNames[0]}
            data-id="1"
          >
            <span>A</span> <p>{answers[0]}</p>
          </li>
          <li
            onClick={checkAnswer}
            className={stateAnswers.classNames[1]}
            data-id="2"
          >
            <span>B</span> <p>{answers[1]}</p>
          </li>
          <li
            onClick={checkAnswer}
            className={stateAnswers.classNames[2]}
            data-id="3" 
          >
            <span>C</span> <p>{answers[2]}</p>
          </li>
          <li
            onClick={checkAnswer}
            className={stateAnswers.classNames[3]}
            data-id="4"
          >
            <span>D</span> <p>{answers[3]}</p>
          </li>
        </ul>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Bạn đã chọn sai
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sự quảng cáo có nghĩa là
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Answers.propTypes = {};

export default Answers;
