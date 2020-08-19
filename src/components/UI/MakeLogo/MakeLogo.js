import React from "react";

// css stylesheets
import "./MakeLogo.scss";

const MakeLogo = (props) => {
    return (
        <img
            className="make-logo__logo-image"
            src={props.logo}
            alt={props.title ? props.title : "logo"}
            title={props.title ? props.title : "logo"}
        />
    );
};

export default MakeLogo;
