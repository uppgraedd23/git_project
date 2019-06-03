import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className = {s.Header}>
    <img className = {s.img} src = 'http://www.marketer.ru/wp-content/uploads/2011/10/wwf-logo-design.jpg'></img>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to ={'/login'}> Login</NavLink>}
        </div>
    </header>;
}

export default Header;