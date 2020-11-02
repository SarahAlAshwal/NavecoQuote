import { useState } from "react";

export function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  //set next transition and store the previous on history
  const transition = (mode, replace = false) => {
    if (!replace){
      setHistory([...history, mode]);
    }
    setMode(mode);

}
  // set transition to the previous one using history, then remove it from history
  const back = () => {
    if (history.length > 1) {
      history.pop();
    }
    setMode(history[history.length - 1]);
  };

  return {mode, transition, back};
};