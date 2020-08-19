import React from "react";

// css stylesheets
import "./Header.scss";

// components
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderInput from "./HeaderInput/HeaderInput";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header = (props) => {
    return (
        <header className="header-container">
            <HeaderLogo />
            <HeaderInput />
            <HeaderRight />
        </header>
    );
};

export default Header;
