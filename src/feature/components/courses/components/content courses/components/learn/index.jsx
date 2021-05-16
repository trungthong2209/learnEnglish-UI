import React from "react";
import PropTypes from "prop-types";
import MainQuiz from "./components/main";
import './style/style.css'
Learn.propTypes = {};

function Learn(props) {
  return (
    <div>
      <MainQuiz data={props} />
    </div>
  );
}

export default Learn;
