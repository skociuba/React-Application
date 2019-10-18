import React, { Component } from "react";
import Remove from "./remove";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  background: black;
  margin: 20px;
  padding: 30px;
  border-radius: 14px;
  min-height: 500px;
`;

class Delater extends Component {
  componentDidMount = () => {
    axios
      .get("/api/items")

      .then(res => this.setState({ names: res.data }));
  };

  static defaultProps = {
    names: []
  };
  state = {
    names: [],
    _id: "",

    addName: ""
  };

  addNewTask = event => {
    this.setState({ addName: event.target.value });
  };

  buttonClick = () => {
    const task = this.state.names;
    task.push({ name: this.state.addName });
    this.setState({ names: task, addName: "" });
    const name = { name: this.state.addName };
    axios.post("/api/items", name).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  deletePerson = id => {
    const people = [...this.state.names];
    people.splice(id, 1);
    this.setState({ names: people });

    const _id = this.state.names.map((name, _id) => {
      return name._id;
    });
    const one = _id.splice(id, 1);

    axios.delete(`/api/items/${one}`).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.buttonClick}>
          <input
            type="text"
            onChange={this.addNewTask}
            value={this.state.addTask}
          />
          <button className="btn btn-success">Add task</button>
        </form>
        <br />
        {this.state.names.map((name, _id) => {
          return (
            <Remove
              key={name._id}
              name={name.name}
              id={name._id}
              date={name.date}
              deletePerson={this.deletePerson.bind(this, _id)}
            />
          );
        })}
      </Container>
    );
  }
}

export default Delater;
