import React from "react";
import { Container, Info, InputDiv, Name,Send ,Entry} from "./EntradaElements";

class Entrada extends React.Component{
  /*constructor (props){
    super(props)

    this.state = {myValue : ''}
  }*/
  
  render(){
    return (
      <Container>
          <Info>
            <Name>ENTRADA</Name>
            <Send>Compilar</Send>
          </Info>
          <InputDiv>
            <Entry/>
          </InputDiv>
      </Container>
    );
  };

}

export default Entrada;