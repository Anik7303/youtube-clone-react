import React from "react";

// css stylesheets
import "./Notifications.scss";

// material ui icons
import NotificationsIcon from "@material-ui/icons/Notifications";

const Notifications = (props) => {
    return (
        <div className="header__actions-notifications">
            <NotificationsIcon />
        </div>
    );
};

export default Notifications;
