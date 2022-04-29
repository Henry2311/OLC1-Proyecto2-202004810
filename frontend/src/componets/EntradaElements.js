import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #335471;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 6fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const ContainerO = styled.div`
  width: 100%;
  height: 275px;
  background-color: #335471;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 6fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const Info =  styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 80px;
`;

export const InputDiv =  styled.div`
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const Entry = styled.textarea`
  width: 90%;
  height: 75%;
  border: 1px solid #E2E2E2;
  border-radius: 6px;
  color: #fff;
  background-color: #7A797E;
  resize: none;
`;

export const OutPut = styled.textarea`
  width: 90%;
  height: 70%;
  border: 1px solid #E2E2E2;
  border-radius: 6px;
  color: #fff;
  background-color: #7A797E;
  margin-top: 0;
  resize: none;
`;

export const Send =  styled.button`
  appearance: none;
  background-color: #e0792a;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 20px;
  padding: 6px 16px;
  margin-top: 60px;
  margin-left: 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  &:hover {
    color: #fff;
    background-color: #CC5E12;
    transition: 0.5s all ease;
  }
`;

export const Name = styled.label`
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 60px;
    margin-right: 30px;
`;

export const NameS = styled.label`
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    margin-right: 30px;
`;

export const Load =  styled.button`
  appearance: none;
  background-color: #e0792a;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 20px;
  padding: 6px 16px;
  margin-left: 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  &:hover {
    color: #fff;
    background-color: #CC5E12;
    transition: 0.5s all ease;
  }
`;