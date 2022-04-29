import React, {useState, useContext} from "react";
import { Container, Info, InputDiv, Name,Send ,Entry} from "./EntradaElements";
import { FaPlay } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FiRefreshCw } from "react-icons/fi";
import { InputContext } from './tools/Context'

function Entrada(){
    
    const {EntradaState,setEntradaState} = useContext(InputContext) 

    const [entrada, setentrada] = useState({
      mensaje: ""
    })
    
    console.log(EntradaState)
    console.log(entrada)
    const handleChange = e => {
      setentrada({
          ...entrada,
          [e.target.name]: e.target.value
      })
      setEntradaState(e.target.value)
      console.log(entrada.mensaje)
    }
    let {mensaje} = entrada

    const refresh = () =>{
      setentrada({mensaje : EntradaState.toString()})
    }

    const handleSubmit = () => {
      //validación de los datos
      if (mensaje==='') {
          alert('No hay código para compilar')
          return
      }
      var json={
        'mensaje': mensaje
      }
      //consulta
      const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(json)
      }
      fetch('http://localhost:9000/entrada', requestInit)
      .then(res => res.text())
      .then(res => console.log(res))

      //reiniciando state
      setentrada({mensaje : EntradaState.toString()})
      alert('Se ha creado el curso correctamente')
    } 

    if(mensaje === ""){
      return (
          <Container>
            <Info>
              <Name>ENTRADA</Name>
              <IconContext.Provider  value={{ style: { fontSize: "2em", color: "#000000" } }}>
                <Send onClick={handleSubmit}><FaPlay/></Send>
                <Send onClick={refresh}> <FiRefreshCw/> </Send>
              </IconContext.Provider>
            </Info>
            <InputDiv>
              <Entry value={''} name={"mensaje"} onChange={handleChange}/>
            </InputDiv>
          </Container>
        
      );
    }else{
      return (
          <Container>
            <Info>
              <Name>ENTRADA</Name>
              <IconContext.Provider  value={{ style: { fontSize: "2em", color: "#000000" } }}>
                <Send onClick={handleSubmit}><FaPlay/></Send>
                <Send onClick={refresh}> <FiRefreshCw/> </Send>
              </IconContext.Provider>
            </Info>
            <InputDiv>
              <Entry value={mensaje} name={"mensaje"} onChange={handleChange}/>
            </InputDiv>
          </Container>
        
      );
    }

    
  };


export default Entrada;