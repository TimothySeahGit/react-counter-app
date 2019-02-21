import React, { Component } from "react";

export class Counter extends Component {
  state = { id: 1, value: 0 };

  handlePlus = () => {
    const increment = this.state.value + 1;
    this.setState({ value: increment });
  };
  handleMinus = () => {
    const decrement = this.state.value - 1;
    this.setState({ value: decrement });
  };

  render() {
    return (
      <React.Fragment>
        <h2>
          <span className="badge badge-secondary">{this.state.value}</span>
        </h2>
        <button
          type="button"
          onClick={this.handlePlus}
          className="btn btn-success"
        >
          +
        </button>
        <button
          type="button"
          onClick={this.handleMinus}
          className="btn btn-danger"
        >
          -
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
