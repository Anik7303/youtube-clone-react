import React from "react";

// css stylesheets
import "./HeaderRight.scss";

// components
import Create from "./Create/Create";
import Apps from "./Apps/Apps";
import Notifications from "./Notifications/Notifications";
import User from "./User/User";

const HeaderRight = (props) => {
    return (
        <section className="header__right-container">
            <Create />
            <Apps />
            <Notifications />
            <User />
        </section>
    );
};

export default HeaderRight;
