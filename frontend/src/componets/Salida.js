import React,{useEffect,useState} from "react";
import { ContainerO, Info, InputDiv, NameS, OutPut,Load} from "./EntradaElements";
import { FiRefreshCw } from "react-icons/fi";
import { IconContext } from "react-icons";

function Salida(){
  const [salida, setSalida] = useState() 

  useEffect(() => {
    const getSalida = () => {
      fetch('http://localhost:9000/entrada')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setSalida(res.mensaje)
      })
    }
    getSalida()
  }, [])

  const handleShow = () => {
    fetch('http://localhost:9000/entrada')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setSalida(res.mensaje)
    })
  }

  if(salida === undefined){
    <ContainerO>
          <Info>
            <NameS>CONSOLA</NameS>
            <IconContext.Provider  value={{ style: { fontSize: "2em", color: "#000000" } }}>
                <Load onClick={handleShow}><FiRefreshCw/></Load>
            </IconContext.Provider>
          </Info>
          <InputDiv>
            <OutPut disabled={true}/>
          </InputDiv>
      </ContainerO>
  }else{
    return (
      <ContainerO>
          <Info>
            <NameS>CONSOLA</NameS>
            <IconContext.Provider  value={{ style: { fontSize: "2em", color: "#000000" } }}>
                <Load onClick={handleShow}><FiRefreshCw/></Load>
            </IconContext.Provider>
          </Info>
          <InputDiv>
            <OutPut disabled={true} value={salida}/>
          </InputDiv>
      </ContainerO>
    );
  }

  }


export default Salida;