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
  background-color: #FFF4EF;

  button {
    width: 312px;
    height: 50px;
    margin-top: 40px;
    border: none;
    background-color: #ffdbd4;
    font-size: 15px;
    color: #ff6347;
  }
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
    color: #FFF4EF;
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
    margin: 10px
  }
`

const RegisterSpace = styled.div`
  margin: 20%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: #FFF4EF;
  color: #ff6347;

  button {
    width: 400px;
    height: 50px;
    margin: 40px;
    border: none;
    background-color: #ff6347;
    font-size: 15px;
    color: #FFF4EF;
  }
`
const RegisterInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 50px;
  margin: 10px;
  
  p {
    font-size: 18px;
  }

  input {
    width: 250px;
    height: 30px;
  }
`

export {LoginSpace, LoginWindow, LoginHelp, RegisterSpace, RegisterInput}