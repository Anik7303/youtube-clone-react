import React from "react";
import PropTypes from "prop-types";

// css stylesheets
import "./LogoWithText.scss";

const LogoWithText = (props) => {
    const Icon = props.icon;
    return (
        <div className="logo-with-text">
            <div className="logo-with-text__logo">
                <Icon className="icon" />
            </div>
            <p className="logo-with-text__text">{props.text}</p>
        </div>
    );
};

LogoWithText.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
};

export default LogoWithText;
