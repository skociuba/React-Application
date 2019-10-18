import React, { Component } from "react";
import styled from "styled-components";
import Calculator from "./Calculator";

const Container = styled.div`
  background: black;
  color: white;
  padding: 30px;
  max-width: 1800px;
  max-heigth: 200px;
  border-radius: 14px;
`;

class Calculators extends Component {
  render() {
    return (
      <Container>
        <Calculator />
      </Container>
    );
  }
}

export default Calculators;
