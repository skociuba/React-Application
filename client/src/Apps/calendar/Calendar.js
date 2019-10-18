import React, { Component } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  color: white;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
  border-radius: 14px;
`;

class Calendars extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className ="row">
        <div className ="col-lg-4 offset-lg-4">
          <Container>
            <Calendar onChange={this.onChange} value={this.state.date} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Calendars;
