import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("access")
    navigate(`/`, {replace: true});
  }

  return (
    <div>
      <p>정말 로그아웃 하시겠습니까?</p>
      <button onClick={logoutHandler}>로그아웃</button>
    </div>
  )
}