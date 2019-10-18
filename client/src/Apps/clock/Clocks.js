import React, { Component } from 'react';
import Clock from 'react-live-clock';
import styled from  'styled-components'

const Container = styled.div`
background:grey;
color:white;
margin:20px;

border-radius:14px;

`

class Clocks extends Component {
   
    
    render() { 
        return ( <Container>
          <h1> <Clock
        format={'HH:mm:ss'}
        ticking={true}
        timezone={'CET'} /></h1></Container> );
    }
}

 
export default Clocks;