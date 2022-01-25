import React, { useEffect, useState } from "react";
import Timer from "./Timer";

function App() {
  const [timer, setTimer] = useState(0); // MilliSeconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    var interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  function handleStart() {
    setIsPaused(false);
    setIsActive(true);
  }

  function handleStopResume() {
    setIsPaused(!isPaused);
  }
  function handleReset() {
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  }

  return (
    <div>
      <Timer timer={timer} />

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStopResume}>{isPaused ? "Resume" : "Stop"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
