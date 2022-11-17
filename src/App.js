import Time from "./components/Time/Time";
import { useState, useEffect } from 'react';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1)}, 1));
  };
  
  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return() => {
      if(timer) clearInterval(timer)
    }
  }, []);

  return (
    <div className="app">
      <Time time={time} />
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default App;