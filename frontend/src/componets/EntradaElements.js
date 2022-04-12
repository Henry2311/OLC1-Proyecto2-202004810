import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff000;
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
  
`;

export const Send =  styled.button`
    background: #ffffff;
    margin-top: 60px;
`;

export const Name = styled.label`
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 60px;
    margin-right: 30px;
`;