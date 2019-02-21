import React, { Component } from "react";
import { Counters } from "./Components/Counters/Counters";
import { counters } from "./sampleData";
import { Total } from "./Components/Total/Total";

export class App extends Component {
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
    const updated = copy.map(element => {
      element.value = 0;
      return element;
    });
    this.setState({ data: updated });
  };

  render() {
    const numCounters = this.state.data.length;
    const sumCounters = this.state.data.reduce((acc, element) => {
      return acc + element.value;
    }, 0);
    return (
      <React.Fragment>
        <h1>Counter Lab</h1>
        <Total numCounters={numCounters} sumCounters={sumCounters} />
        <Counters
          data={this.state.data}
          handleDelete={this.handleDelete}
          handlePlus={this.handlePlus}
          handleMinus={this.handleMinus}
          handleReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
