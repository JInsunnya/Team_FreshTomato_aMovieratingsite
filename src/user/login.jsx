import React, {useState} from "react";
import {LoginSpace, LoginWindow, LoginHelp} from "./styles-cr";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

// export const setCookie = (name, value) => {
//   return cookies.set(name, value);
// };

// export const getCookie = (name) => {
//   return cookies.set(name);
// };

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const api = axios.create({
    baseURL:
      'https://freshtomato.store/',
  });
  
  const login = async () => {

    try {
      const response = await api.post("/dj/login/", {
        username: username,
        password: password,
      })
      console.log('로그인 성공', response.data)
      setUsername("")
      setPassword("")
      localStorage.setItem("access", response.data.access)
      navigate(`/`, {replace: true});
      //setCookie("access", response.data.access)
    } catch (error) {
      console.error('에러: ', error)
      setUsername("")
      setPassword("")
      alert("로그인에 실패하였습니다");
      return error;
    }
  }
  localStorage.getItem("access")

  return(
    <div className="login-page">
    <LoginSpace>
      <h1>Login</h1>
      <LoginWindow>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Id"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={login}>로그인</button>
        <LoginHelp>
        <a href="">ID/PW 찾기</a>
        <a href="/Signup">회원가입하기</a>
        </LoginHelp>
      </LoginWindow>
    </LoginSpace>
    </div>
  )
}