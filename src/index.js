import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
      if (time === 0) {
        clearInterval(myInterval);
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  var isodate = new Date(time * 1000)
    .toUTCString()
    .match(/(\d\d:\d\d:\d\d)/)[0];

  return (
    <div className="ui container">
      <h3>Time Remaining: {isodate}</h3>
      <button className="ui button primary" onClick={() => useEffect}>
        Start Timer
      </button>
      <div>
        <h3>Set time</h3>
        <div>
          <p>Hours</p>
          <button onClick={() => setTime(time + 3600)}>+</button>
          <button onClick={() => setTime(time - 3600)}>-</button>
        </div>
        <div>
          <p>Minutes</p>
          <button onClick={() => setTime(time + 60)}>+</button>
          <button onClick={() => setTime(time - 60)}>-</button>
        </div>
        <div>
          <p>seconds</p>
          <button onClick={() => setTime(time + 1)}>+</button>
          <button onClick={() => setTime(time - 1)}>-</button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
