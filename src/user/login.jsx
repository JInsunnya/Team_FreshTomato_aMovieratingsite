import React, {useState} from "react";
import {LoginSpace, LoginWindow, LoginHelp} from "./styles-cr";

export default function Login() {
  {/*const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");
  
  const login = async () => {
    try {
      const response = await api.post("", {
        username: userId,
        password: password,
      })
      console.log('로그인 성공', response.data)
      setuserId("")
      setPassword("")
      localStorage.setItem("access", response.data.access)
    } catch (error) {
      console.error('에러: ', error)
      return error;
    }
  }
  localStorage.getItem("access")
*/}
  return(
    <div className="login-page">
    <LoginSpace>
      <h1>Login</h1>
      <LoginWindow>
        <input
          type="text"
          //value={userId}
          //onChange={(e) => setUserId(e.target.value)}
          placeholder="Id"
        />
        <input
          type="pass"
          //value={password}
          //onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button>로그인</button>
        <LoginHelp>
        <a href="">ID/PW 찾기</a>
        <a href="/Signup">회원가입하기</a>
        </LoginHelp>
      </LoginWindow>
    </LoginSpace>
    </div>
  )
}