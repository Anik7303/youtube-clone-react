import React from "react";

// css stylesheets
import "./User.scss";

// material ui icons
import Avatar from "@material-ui/core/Avatar";

const User = (props) => {
    return (
        <div className="header__actions-user">
            <Avatar />
        </div>
    );
};

export default User;
