import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Hands from "./components/Hands";

function App() {
  return (
    <div className="app">
      Go Vegan
      <ScoreBoard />
      <Hands />
    </div>
  );
}

export default App;
