import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  background: black;
  color: white;
  margin-top:15px;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
  max-width: 1800px;
  max-heigth: 200px;
  border-radius: 14px;
  
`;

class Pictures extends Component {
  state = {
    imageUrl: "https://picsum.photos/1000"
  };

  

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-lg-10 offset-md-1">
            <img src={this.state.imageUrl} className="img-fluid"  alt="" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Pictures;
