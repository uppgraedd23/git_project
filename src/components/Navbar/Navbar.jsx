import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {




    return (<nav className={s.nav}>

        <div className={s.item}>
            <NavLink to ="/Profile" activeClassName={s.activeLink} >Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to ="/News" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to ="/Music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={`${s.item} `}>
            <NavLink to ="/Settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>




        <div className={s.friends} >
            <h3>Friends</h3>
            <div>
            <Friends friends={props.friends}/>
            </div>

        </div>
    </nav>
    )
}

export default Navbar;