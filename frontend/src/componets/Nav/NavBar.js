import React from "react";
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

class NavBar extends React.Component{
  constructor (props){
    super(props)

    this.state = {myValue : ''}
  }
  
 
  render(){
    
    const Open = ( e ) => {
  
      const file = e.target.files[0];
      if ( !file ) return;
  
      const fileReader = new FileReader();
  
      fileReader.readAsText( file );
  
      fileReader.onload = () => {
        console.log( fileReader.result );
        this.setState({myValue : fileReader.result});
      }
  
      fileReader.onerror = () => {
        console.log( fileReader.error );
      }
  
    }
    const {handleEntrada} = this.props;

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
                <MenuItemLink >
                  <div>
                    <FaHome />
                    NUEVO
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink >
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
                <MenuItemLink >
                  <div>
                    <FaGlasses />
                    ERRORES
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink >
                  <div>
                    <FaGlasses />
                    ARBOL AST
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink >
                  <div>
                    <FaGlasses />
                    SIMBOLOS
                  </div>
                </MenuItemLink>
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
        <InputAux onChange={handleEntrada(this.state.myValue)} defaultValue={this.state.myValue}/>
      </Container>
      
    );
  };

}



export default NavBar;