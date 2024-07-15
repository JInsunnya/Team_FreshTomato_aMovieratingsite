import React, {useState} from "react";
import { RegisterSpace, RegisterInput } from "./styles-cr";

export default function Register() {

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
          <p>이름</p>
          <input
            type="text"
          />
        </RegisterInput>
        <button>회원가입하기</button>
      </RegisterSpace>
    </div>
  )
}