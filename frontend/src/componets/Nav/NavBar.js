import React, {useState, useContext} from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  InputFile,
  InputFileContainer,
  InputFileTrigger,
  InputAux
} from "./NavBarElements";
import {
  FaBattleNet,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { InputContext } from '../tools/Context'

  function NavBar(){
    

    const [fileValue, setfileValue] = useState('')

    const {EntradaState,setEntradaState} = useContext(InputContext) 

    const Open = ( e ) => {
  
      const file = e.target.files[0];
      if ( !file ) return;
  
      const fileReader = new FileReader();
  
      fileReader.readAsText( file );
  
      fileReader.onload = () => {
        console.log( fileReader.result );
        setfileValue( fileReader.result );
        setEntradaState( fileReader.result );
      }
  
      fileReader.onerror = () => {
        console.log( fileReader.error );
      }
    }

    return (
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <LogoContainer>
              <FaBattleNet />
              <p>Compscript</p>
            </LogoContainer>
  
            <Menu>
              <MenuItem>
                <MenuItemLink onClick={()=>{console.log("Crear nuevo archivo")}}>
                  <div>
                    <FaHome />
                    NUEVO
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  <div>
                    <FaUserAlt />
                    <InputFileContainer>
                      <InputFile onChange={Open}/>
                      <InputFileTrigger>ABRIR</InputFileTrigger>
                    </InputFileContainer>
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  <div>
                    <FaBriefcase />
                    GUARDAR
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink  href="http://192.168.1.69:8080/error.html">
                  <div>
                    <FaGlasses />
                    ERRORES
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink href="http://192.168.1.69:8080/arbolast.html">
                  <div>
                    <FaGlasses />
                    ARBOL AST
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink href="http://192.168.1.69:8080/simbolos.html">
                  <div>
                    <FaGlasses />
                    SIMBOLOS
                  </div>
                </MenuItemLink>
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
      
    );
  };

export default NavBar;