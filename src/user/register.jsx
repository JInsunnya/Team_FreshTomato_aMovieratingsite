import React, {useState} from "react";
import { RegisterSpace, RegisterInput } from "./styles-cr";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import { Cookies } from "react-cookie";

//const [cookies, setCookies, removeCookie] = useCookies();

export default function Register() {
  const [username, setUsername] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [nickname, setNickname] = useState("")
  const navigate = useNavigate();

  const api = axios.create({
    baseURL:
      'https://freshtomato.store/',
  });
  
  const handleregister = async () => {
    const data = {
      username: username,
      password1: password1,
      password2: password2,
      nickname: nickname,
    };
    console.log(data);
    try {
      const response = await api.post("dj/registration/", data)
      console.log('회원가입 성공', response.data)
      setUsername("")
      setPassword1("")
      setPassword2("")
      setNickname("")
      localStorage.setItem("access", response.data.access);
      alert("회원가입이 완료되었습니다.");
      navigate(`/`, {replace: true});

    } catch (error) {
      return error;
    };
  };

  return(
    <div className="register-page">
      <RegisterSpace>
        <h2>Create Account</h2>
        <RegisterInput>
          <p>아이디</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </RegisterInput>
        <RegisterInput>
          <p>비밀번호</p>
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </RegisterInput>
        <RegisterInput>
          <p>비밀번호 확인</p>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </RegisterInput>
        <RegisterInput>
          <p>이름(닉네임)</p>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </RegisterInput>
        <button onClick={handleregister}>회원가입하기</button>
      </RegisterSpace>
    </div>
  )
}