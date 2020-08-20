import React from "react";

// css stylesheets
import "./CreateLogo.scss";

const CreateLogo = (props) => {
    if (props.image) {
        return (
            <img
                className="create-logo__logo-image"
                src={props.logo}
                alt={props.title ? props.title : "logo"}
                title={props.title ? props.title : "logo"}
            />
        );
    }
    const Icon = props.logo;
    return <Icon className="create-logo__logo-image" style={props.styles} />;
};

export default CreateLogo;
