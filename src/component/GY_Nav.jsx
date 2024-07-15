import {Link, Outlet} from 'react-router-dom';
import React from 'react';
import "./GY_Nav.css";

function Nav(){

    return(
        <div>
            <div className = "navbar"> 
                <Link className = "navbarMenu" to = {`/`}> FreshTomato</Link>
                <Link className = "navbarMenu" to = {`/Login`}> 로그인 </Link>
                <Link className = "navbarMenu" to = {`/Signup`}> 회원가입 </Link>
            </div>
            {/* <MovieList/> */}
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Nav;