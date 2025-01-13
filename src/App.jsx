import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <Players />

        <GameBoard />
      </div>
      <div id="log">
        log
      </div>
    </main>
  );
}

export default App;