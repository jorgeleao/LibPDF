import React, { useEffect, useState } from "react";
import ProgressBar from "./progressbar";
import "./style.css";

let interval = undefined;

export default function App() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev - 0.2);
      }, 10);
    } else {
      clearInterval(interval);
      setProgress(0);
    }
  }, [running]);

  useEffect(() => {
    if (progress <= 0) {
      setRunning(false);
      setProgress(0);
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className="App">
      

      <button
        onClick={() => {
          setRunning(false);
          setProgress(100);
        }}
      >
        Clear
      </button>
      <ProgressBar progress={progress} />
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>

    </div>
  );
}
