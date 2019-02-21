import React, { Component } from "react";

export class Counter extends Component {
  state = { id: this.props.id, value: this.props.value };

  //these handlers should be moved to the parent Counters as well, since all the state is being stored there
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
          onClick={() => this.props.handlePlus(this.state.id)}
          className="btn btn-success"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => this.props.handleMinus(this.state.id)}
          className="btn btn-danger"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => this.props.handleDelete(this.state.id)}
          className="btn btn-dark"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
