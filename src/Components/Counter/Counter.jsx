import React, { Component } from "react";

export class Counter extends Component {
  state = { id: this.props.id, value: this.props.value };

  handlePlus = () => {
    const increment = this.state.value + 1;
    this.setState({ value: increment });
  };
  handleMinus = () => {
    const decrement = this.state.value - 1;
    this.setState({ value: decrement });
  };

  positive = () => {
    // if (this.state.value > 0) {
    //   return existingClass + "-primary";
    // }
    // return existingClass + "-warning";
    return this.state.value > 0 ? "primary" : "warning";
  };

  render() {
    return (
      <React.Fragment>
        <h2>
          <span className={`badge badge-${this.positive()}`}>
            {this.state.value}
          </span>
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
