import "./ScoreBoard.css";

function ScoreBoard() {
  return (
    <div className="scoreboard">
      <div className="scoreboard__gameName">
        <img src="/images/ROCKPAPERSCISSORS.svg" alt="Rock Paper Sissor" />
      </div>
      <div className="scoreboard__score">
        <p>Score</p>
        <h1>12</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;
