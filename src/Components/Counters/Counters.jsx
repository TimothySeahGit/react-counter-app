import React, { Component } from "react";
import { counters } from "../../sampleData";
import { Counter } from "../Counter/Counter";

export class Counters extends Component {
  state = { data: counters };
  //Counter is a child of Counters
  //passed handle from parent to child since button is in child but state is in parent
  handleDelete = counterID => {
    const filteredData = this.state.data.filter(
      counter => counter.id !== counterID
    );
    this.setState({ data: filteredData });
  };

  //these handlers should be moved to the parent Counters as well, since all the state is being stored there
  handlePlus = counterID => {
    console.log(counterID);
    const increment = this.state.value + 1;
    this.setState({ value: increment });
  };
  handleMinus = counterID => {
    console.log(counterID);
    const decrement = this.state.value - 1;
    this.setState({ value: decrement });
  };

  render() {
    const { data } = this.state;
    const hasSomething = data.length;
    return (
      <div>
        {/* {!hasSomething && <h2>no more counters</h2>} */}
        {!hasSomething
          ? "No more counters"
          : data.map(counter => (
              <Counter
                key={counter.id}
                id={counter.id}
                value={counter.value}
                handleDelete={this.handleDelete}
                handlePlus={this.handlePlus}
                handleMinus={this.handleMinus}
              />
            ))}
      </div>
    );
  }
}
export default Counters;
