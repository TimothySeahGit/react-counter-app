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

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            handleDelete={this.handleDelete}
            // handlePlus={this.handlePlus}
            // handleMinus={this.handleMinus}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
