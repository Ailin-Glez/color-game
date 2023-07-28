import { useEffect, useState } from "react";

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

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [seconds, setSeconds] = useState(DIFFICULTY[difficulty].seconds);
  const difficulties = Object.keys(DIFFICULTY);

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => setSeconds((prevSeconds) => --prevSeconds), 1000);
      if (seconds === 0) {
        clearInterval(intervalId);
      }

      return () => clearInterval(intervalId);
    }
  }, [isGameStarted, seconds]);

  useEffect(() => {
    setSeconds(DIFFICULTY[difficulty].seconds);
  }, [difficulty]);

  return (
    <main>
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
        <span>Blanco</span>
      </section>
      <footer>{!isGameStarted && <button onClick={() => setIsGameStarted(true)}>Jugar</button>}</footer>
    </main>
  );
}

export default App;
