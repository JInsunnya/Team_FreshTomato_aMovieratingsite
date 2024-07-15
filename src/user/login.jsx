import React, {useState} from "react";
import {LoginSpace, LoginWindow, LoginHelp} from "./styles-cr";

export default function Login() {
//   const [userId, setuserId] = useState("");
//   const [password, setPassword] = useState("");
//   const login = async () => {
//     try {
      
//     }
//   }
  return(
    <div className="login-page">
    <LoginSpace>
      <h1>Sign in</h1>
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
        <a href="">회원가입하기</a>
        </LoginHelp>
      </LoginWindow>
    </LoginSpace>
    </div>
  )
}