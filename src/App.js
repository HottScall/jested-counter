import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  makeIncrumenter = amount => () =>
    this.setState(prevState => ({ count: prevState.count + amount }));

  increment = this.makeIncrumenter(1);
  decrement = this.makeIncrumenter(-1);

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>
          Increment Count
        </button>
        <button className="decrement" onClick={this.decrement}>
          Decrement Count
        </button>
      </div>
    );
  }
}

export default App;
