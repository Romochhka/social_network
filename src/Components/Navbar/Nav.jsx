import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

// let s = {
//     'nav':'Nav_Nav__yIfLs',
//     'item':'Nav_item__CMLiP'
// }

// let c1 = 'item';
// let c2 = 'active';
// let classes = '${.item} ${c2}';
const Nav = () => {
    return <nav className={s.Nav}>
        <div className={s.item}>
            <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }> My Profile</NavLink>
        </div>
        <div className={'${s.item} ${s.active}'}>
            <NavLink to='/Dialogs' className = { navData => navData.isActive ? s.active : s.item }> My Messages</NavLink>
            <div className={s.item}>
                <NavLink to='./News' className = { navData => navData.isActive ? s.active : s.item }> News</NavLink>
                <div className={s.item}>
                    <NavLink to='./Music' className = { navData => navData.isActive ? s.active : s.item }> My Music</NavLink>
                    <div className={s.item}>
                        <NavLink to='./Settings' className = { navData => navData.isActive ? s.active : s.item }> Settings</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default Nav;