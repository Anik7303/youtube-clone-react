import React from "react";
import { Link } from "react-router-dom";

// css stylesheets
import "./Logo.scss";

// Logo
import LogoIcon from "../../../../assets/icons/youtube-logo.png";

const Logo = (props) => {
    return (
        <Link className="header__logo" to="/">
            <img
                className="icon"
                src={LogoIcon}
                alt="Youtube Logo"
                title="Logo"
            />
        </Link>
    );
};

export default Logo;
