import { useState } from "react";

import { ALL_COLORS } from "./colors";

const DIFFICULTY = {
  easy: {
    name: "Fácil",
    seconds: 30,
  },
  medium: {
    name: "Medio",
    seconds: 20,
  },
  hard: {
    name: "Difícil",
    seconds: 10,
  },
};

function Game() {
  const [color, setColor] = useState(ALL_COLORS);
  const [difficulty, setDifficulty] = useState("easy");

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [seconds, setSeconds] = useState(DIFFICULTY[difficulty].seconds);
  const difficulties = Object.keys(DIFFICULTY);

  return (
    <>
      <header>
        <h1>{0} puntos</h1>
        <h1>{seconds} segundos</h1>
        {difficulties.map((dif) => (
          <button key={DIFFICULTY[dif].name} disabled={isGameStarted} className={difficulty === dif ? "selected" : ""} onClick={() => setDifficulty(dif)}>
            {DIFFICULTY[dif].name}
          </button>
        ))}
      </header>
      <section>
        <span>{color[0]}</span>
      </section>
      <footer>{!isGameStarted && <button onClick={() => setIsGameStarted(true)}>Jugar</button>}</footer>
      <footer>
        {isGameStarted && (
          <div className="color-btn-container">
            <button className="color-btn"></button>
            <button className="color-btn"></button>
          </div>
        )}
      </footer>
    </>
  );
}

export default Game;
