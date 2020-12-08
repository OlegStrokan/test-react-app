import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header_img} src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt='logo'/>
        </header>
    )
}

export default Header