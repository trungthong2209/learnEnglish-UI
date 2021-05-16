import React from "react";
import Answers from "../Answers";

import Popup from "../popup";

var data = [];
var vocabulary = [
  {
    id: 1,
    vocabulary: "department",
    category: "N",
    pronounce: "dəˈpärtmənt",
    means: "Phòng ban",
  },
  {
    id: 2,
    vocabulary: "encouragement",
    category: "N",
    pronounce: "inˈkərijmənt",
    means: "Sự khuyến khích",
  },
  {
    id: 3,
    vocabulary: "advertisement",
    category: "N",
    pronounce: "advərˌtīzmənt",
    means: "Sự quảng cáo",
  },
];
function unique(arr) {
  return Array.from(new Set(arr));
}
console.log("xxxxxxxxx", unique(data));

class MainQuiz extends React.Component {
  constructor(props) {
    let dataProps = props.data.data;
    unique(dataProps).map((ques) => {
      
      let correctTemp = 0;
      ques.correct == "A"
        ? (correctTemp = 0)
        : ques.correct == "B"
        ? (correctTemp = 1)
        : ques.correct == "C"
        ? (correctTemp = 2)
        : (correctTemp = 3);
      let objtemp = {
        id: ques._id,
        question: ques.question,
        answers: [ques.A, ques.B, ques.C, ques.D],
        correct: correctTemp,
      };
      let temp = 0;
      for (var i = 0; i < data.length; i++) {
        if (ques._id == data[i].id) {
          temp++;
        }
      }
      console.log(objtemp);
      temp == 0 ? data.push(objtemp) : (temp = 0);

      unique(data);
    });

    console.log(unique(data));
    super(props);
    this.state = {
      nr: 0,
      total: unique(data).length,
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: "flex",
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  pushData(nr) {
    this.setState({
      question: data[nr].question,
      answers: [
        data[nr].answers[0],
        data[nr].answers[1],
        data[nr].answers[2],
        data[nr].answers[3],
      ],
      correct: data[nr].correct,
      nr: this.state.nr + 1,
    });
  }

  componentWillMount() {
    let { nr } = this.state;
    this.pushData(nr);
  }

  nextQuestion() {
    let { nr, total, score } = this.state;

    if (nr === total) {
      this.setState({
        displayPopup: "flex",
      });
    } else {
      this.pushData(nr);
      this.setState({
        showButton: false,
        questionAnswered: false,
      });
    }
  }

  handleShowButton() {
    this.setState({
      showButton: true,
      questionAnswered: true,
    });
  }

  handleStartQuiz() {
    this.setState({
      displayPopup: "none",
      nr: 1,
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  render() {
    let {
      nr,
      total,
      question,
      answers,
      correct,
      showButton,
      questionAnswered,
      displayPopup,
      score,
    } = this.state;

    return (
      <div className="container">
        <Popup
          style={{ display: displayPopup }}
          score={score}
          total={total}
          startQuiz={this.handleStartQuiz}
        />

        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question">
              <h4>
                Question {nr}/{total}
              </h4>
              <p>{question}</p>
            </div>
            <Answers
              answers={answers}
              correct={correct}
              showButton={this.handleShowButton}
              isAnswered={questionAnswered}
              increaseScore={this.handleIncreaseScore}
              OnClick={this.nextQuestion}
            />
            {/* <div id="submit">
              {showButton ? (
                <button className="fancy-btn" onClick={this.nextQuestion}>
                  {nr === total ? "Finish quiz" : "Next question"}
                </button>
              ) : null}
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MainQuiz;
