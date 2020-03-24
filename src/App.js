import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.State = {
      count: 0
    };
  }

  makeIncrumenter = amount => () =>
    this.setState(prevState => ({ count: prevState.count + amount }));

  increment = this.makeIncrumenter(1);

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default App;
