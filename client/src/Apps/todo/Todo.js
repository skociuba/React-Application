import React, { Component } from "react";
import Delater from "./delater";

class Todo extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <p>TASK MANAGER</p>
        <Delater />
      </div>
    );
  }
}

export default Todo;
