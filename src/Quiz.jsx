import question from "./questions.js";
import { useState } from "react";
import quizComplete from "./assets/quiz-complete.png";

export default function Quiz() {
  const [answer, setAnswer] = useState([]);
  const len = answer.length;

  function handleClick(ans) {
    setAnswer((prevAns) => [...prevAns, ans]);
  }
  if (len === question.length) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  const shuffle = [...question[len].answers];
  shuffle.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <h2>{question[len].text}</h2>
        <ul id="answers">
          {shuffle.map((ans) => {
            return (
              <li key={ans} className="answer">
                <button onClick={() => handleClick(ans)}>{ans}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
