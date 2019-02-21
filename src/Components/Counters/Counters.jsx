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

  settingState = (counterID, operator) => {
    const copy = [...this.state.data];
    copy.find(element => element.id === counterID).value += operator;

    this.setState({ data: copy });
  };

  handlePlus = counterID => {
    this.settingState(counterID, 1);
  };
  handleMinus = counterID => {
    this.settingState(counterID, -1);
  };

  handleReset = () => {
    const copy = [...this.state.data];
    const updated = copy.map(counter => {
      counter.value = 0;
    });
    this.setState({ data: updated });
  };
  render() {
    const { data } = this.state;
    const hasSomething = data.length;
    return (
      <div>
        <button
          onClick={this.handleReset}
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
