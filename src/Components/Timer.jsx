import React from "react";

function Timer(props) {
  const hrs = ("0" + (Math.floor(props.timer / 3600000) % 24)).slice(-2);
  const min = ("0" + (Math.floor(props.timer / 60000) % 60)).slice(-2);
  const sec = ("0" + (Math.floor(props.timer / 1000) % 60)).slice(-2);
  const ms = ("0" + (Math.floor(props.timer / 10) % 100)).slice(-2);
  return (
    <h1>
      <span>{hrs}:</span>
      <span>{min}:</span>
      <span>{sec}:</span>
      <span>{ms}</span>
    </h1>
  );
}

export default Timer;
