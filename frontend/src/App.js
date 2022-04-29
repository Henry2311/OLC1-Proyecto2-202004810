import React, {useState} from 'react';
import NavBar from './componets/Nav/NavBar';
import Entrada from './componets/Entrada';
import Salida from './componets/Salida';
import {InputContext} from './componets/tools/Context'


function App() {
  const [EntradaState,setEntradaState] = useState('')
    return (
      <InputContext.Provider value={{EntradaState,setEntradaState}}>
        <NavBar/>
        <Entrada/>
        <Salida/>
      </InputContext.Provider>
    );
  }

export default App;
