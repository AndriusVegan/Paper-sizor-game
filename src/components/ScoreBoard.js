import { useSelector } from "react-redux";
import { selectScore } from "../slices/gameSlice";
import "./ScoreBoard.css";

function ScoreBoard() {
  const score = useSelector(selectScore);
  return (
    <div className="scoreboard">
      <div className="scoreboard__gameName">
        <img src="/images/ROCKPAPERSCISSORS.svg" alt="Rock Paper Scissor" />
      </div>
      <div className="scoreboard__score">
        <p>Score</p>
        <h1>{score}</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;
