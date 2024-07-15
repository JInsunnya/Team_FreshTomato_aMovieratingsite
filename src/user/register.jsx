import React, {useState} from "react";
import { RegisterSpace, RegisterInput } from "./styles-cr";
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [nickname, setNickname] = useState("")

  const api = axios.create({
    baseURL:
      'https://freshtomato.store/',
  });
  
  const register = async () => {
    const data = {
      username: username,
      password1: password1,
      password2: password2,
      nickname: nickname,
    }
    try {
      const response = await api.post("/dj/registration/", data)
      console.log('회원가입 성공', response.data)
      setUsername("")
      setPassword1("")
      setPassword2("")
      setNickname("")
      setCookie("access", response.data.access);
    } catch (error) {
      return error;
    }
  }

  return(
    <div className="register-page">
      <RegisterSpace>
        <h2>Create Account</h2>
        <RegisterInput>
          <p>아이디</p>
          <input
            type="text"
          />
        </RegisterInput>
        <RegisterInput>
          <p>비밀번호</p>
          <input
            type="password"
          />
        </RegisterInput>
        <RegisterInput>
          <p>비밀번호 확인</p>
          <input
            type="password"
          />
        </RegisterInput>
        <RegisterInput>
          <p>이름(닉네임)</p>
          <input
            type="text"
          />
        </RegisterInput>
        <button onClick={register}>회원가입하기</button>
      </RegisterSpace>
    </div>
  )
}