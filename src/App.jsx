import { useEffect, useState } from "react";

import Game from "./Game";
import { getRandomColor } from "./utils";

const DIFFICULTY = {
  easy: {
    name: "Fácil",
    seconds: 30,
    rule: "30 segundos y al fallar no descuenta puntos 🍰",
    color: "#0c9300",
  },
  medium: {
    name: "Medio",
    seconds: 25,
    rule: "25 segundos y al fallar descuenta un punto 💪",
    color: "#006cab",
  },
  hard: {
    name: "Difícil",
    seconds: 20,
    rule: "20 segundos y al fallar descuenta tres puntos 😰",
    color: "#a16209",
  },
  veryHard: {
    name: "Muy Difícil",
    seconds: 30,
    rule: "30 segundos y al fallar vuelve a cero el puntaje 💀",
    color: "#b60202",
  },
};

function App() {
  const [color, setColor] = useState("#ff8");
  const [difficulty, setDifficulty] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const difficulties = Object.keys(DIFFICULTY);

  useEffect(() => {
    console.log("effect");
    const id = setInterval(() => setColor(getRandomColor()), 1500);
    return () => clearInterval(id);
  }, []);

  // const [seconds, setSeconds] = useState(DIFFICULTY[difficulty].seconds);
  // const difficulties = Object.keys(DIFFICULTY);

  // useEffect(() => {
  //   if (isGameStarted) {
  //     const intervalId = setInterval(() => {
  //       setSeconds((prevSeconds) => --prevSeconds);
  //       // setBgColor(seconds);
  //     }, 1000);
  //     if (seconds === 0) {
  //       clearInterval(intervalId);
  //     }

  //     return () => clearInterval(intervalId);
  //   }
  // }, [isGameStarted, seconds]);

  // useEffect(() => {
  //   setSeconds(DIFFICULTY[difficulty].seconds);
  // }, [difficulty]);
  console.log(difficulty);
  return (
    <main>
      {isGameStarted ? (
        <Game />
      ) : (
        <div className="container" style={{ backgroundColor: color }}>
          <h1>Color Game</h1>
          <p className="rules">Divertido juego de colores en el que debes seleccionar el botón con el color del nombre que diga la palabra</p>
          <p className="rules">Para empezar, selecciona la dificultad y luego da click en el botón Jugar</p>
          <section className="btn-container">
            {difficulties.map((dif) => {
              const isSelected = difficulty === dif;
              return (
                <button
                  key={dif}
                  style={{
                    backgroundColor: DIFFICULTY[dif].color,
                    border: isSelected ? "3.5px solid #050300" : "",
                  }}
                  className={isSelected ? `btn btn-${dif} selected` : `btn btn-${dif}`}
                  onClick={() => setDifficulty(dif)}
                >
                  {DIFFICULTY[dif].name}
                </button>
              );
            })}
          </section>
          {difficulty && <span className="description">{DIFFICULTY[difficulty].rule}</span>}
          <footer>
            <button className="game-btn" disabled={difficulty === ""} onClick={() => setIsGameStarted(true)}>
              Jugar
            </button>
          </footer>
        </div>
      )}
    </main>
  );
}

export default App;
