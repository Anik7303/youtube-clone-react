import React from "react";
import PropTypes from "prop-types";

// css stylesheets
import "./LogoWithText.scss";

// Components
import CreateLogo from "../CreateLogo/CreateLogo";

const LogoWithText = (props) => {
    return (
        <div className="logo-with-text">
            <div className="logo-with-text__logo">
                <CreateLogo
                    logo={props.icon}
                    title={props.text}
                    image={props.image}
                    styles={props.iconStyles}
                />
            </div>
            <p className="logo-with-text__text">{props.text}</p>
        </div>
    );
};

LogoWithText.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    text: PropTypes.string.isRequired,
};

export default LogoWithText;
