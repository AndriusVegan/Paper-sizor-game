import { useSelector } from "react-redux";
import { selectScore } from "../slices/gameSlice";
import "./ScoreBoard.css";
import GameOver from "./GameOver";

function ScoreBoard() {
  const score = useSelector(selectScore);
  // const score = -1;
  return (
    <div className="scoreboard">
      <div className="scoreboard__gameName">
        <img src="/images/ROCKPAPERSCISSORS.svg" alt="Rock Paper Scissor" />
      </div>
      <div className="scoreboard__score">
        {score < 0 ? (
          <>
            <p>Score</p>
            <h1> -- </h1>
            <GameOver />
          </>
        ) : (
          <>
            <p>Score</p>
            <h1>{score}</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default ScoreBoard;
