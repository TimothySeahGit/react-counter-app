import React, { Component } from "react";

import { Counter } from "../Counter/Counter";

export class Counters extends Component {
  render() {
    const { data } = this.props;
    const hasSomething = data.length;
    return (
      <div>
        <button
          onClick={this.props.handleReset}
          type="button"
          className="btn btn-outline-danger"
        >
          Danger
        </button>
        {/* {!hasSomething && <h2>no more counters</h2>} */}
        {!hasSomething
          ? "No more counters"
          : data.map(counter => (
              <Counter
                key={counter.id}
                id={counter.id}
                value={counter.value}
                handleDelete={this.props.handleDelete}
                handlePlus={this.props.handlePlus}
                handleMinus={this.props.handleMinus}
                handleReset={this.props.handleReset}
              />
            ))}
      </div>
    );
  }
}
export default Counters;
