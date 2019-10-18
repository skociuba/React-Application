import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  background: #272d4d;
  max-width: 400px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

class Remove extends Component {
  render() {
    return (
      <Container>
        <div>
          <p>
            {" "}
            <button className="btn btn-danger" onClick={this.props.deletePerson}>
              delete
            </button>{" "}
          </p>
          <p> {this.props.name}</p>
          {this.props.date}---{this.props.id}
        </div>
      </Container>
    );
  }
}

export default Remove;
