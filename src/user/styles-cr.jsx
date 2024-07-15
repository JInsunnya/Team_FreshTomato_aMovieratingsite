import styled from "styled-components";

const LoginSpace = styled.div`
  margin: 20%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: tomato;
`

const LoginWindow = styled.div`
  padding: 30px;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 300px;
    height: 50px;
    margin: 5px;
    background-color: #ffdbd4;
    border: none;
    padding-left: 10px;
  }

  button {
    width: 312px;
    height: 50px;
    margin-top: 40px;
    border: none;
    background-color: #ff6347;
    font-size: 15px;
    color: #ffdbd4;
  }
`;

const LoginHelp = styled.div`
  width: 300px;
  font-size: 13px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

  a {
    color: tomato;
  }
`

export {LoginSpace, LoginWindow, LoginHelp}