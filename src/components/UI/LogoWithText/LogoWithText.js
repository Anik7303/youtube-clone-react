import React from "react";
import PropTypes from "prop-types";

// css stylesheets
import "./LogoWithText.scss";

// Components
import CreateLogo from "../CreateLogo/CreateLogo";

const LogoWithText = (props) => {
    const Icon = props.icon;
    return (
        <div className="logo-with-text">
            <div className="logo-with-text__logo">
                {/* <Icon className="icon" /> */}
                <CreateLogo
                    logo={props.icon}
                    title={props.text}
                    image={props.image}
                />
            </div>
            <p className="logo-with-text__text">{props.text}</p>
        </div>
    );
};

LogoWithText.propTypes = {
    icon: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default LogoWithText;

{
    /* <Icon className="icon" /> */
}
