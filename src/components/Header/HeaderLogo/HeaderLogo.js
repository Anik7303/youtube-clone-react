import React from "react";

// css stylesheets
import "./HeaderLogo.scss";

// components
import MenuIcon from "./MenuIcon/MenuIcon";
import Logo from "./Logo/Logo";

const HeaderLogo = (props) => {
    return (
        <section className="header__logo-container">
            <MenuIcon />
            <Logo />
        </section>
    );
};

export default HeaderLogo;
