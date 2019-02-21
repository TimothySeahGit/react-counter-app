import React from "react";
import Counters from "../Counters/Counters";

export function Total(props) {
  return (
    <React.Fragment>
      <h1>Total: {props.sumCounters}</h1>
    </React.Fragment>
  );
}

export default Total;
