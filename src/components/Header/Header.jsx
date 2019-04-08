import React from 'react';
import s from './Header.module.css'; 

const Header = () => {
    return <header className = {s.Header}>
    <img className = {s.img} src = 'http://www.marketer.ru/wp-content/uploads/2011/10/wwf-logo-design.jpg'></img>  
    </header>;
}

export default Header;