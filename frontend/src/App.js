import React from 'react';
import NavBar from './componets/Nav/NavBar';
import Entrada from './componets/Entrada';

class App extends React.Component{
  handleEntrada = (e) =>{
    console.log('ACA ESTAMOS EN LA PRINCIPAL \n'+e)
  } 

  render() {
    return (
      <>
        <NavBar handleEntrada = {this.handleEntrada}/>
        
        <Entrada/>
      </>
      
      
    );
  }

}

export default App;
