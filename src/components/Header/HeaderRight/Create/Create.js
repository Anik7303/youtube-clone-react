import React, { useState } from "react";

// css stylesheets
import "./Create.scss";

// icons
import UploadIcon from "../../../../assets/icons/youtube-play.png";
import LiveIcon from "../../../../assets/icons/youtube-live-51.png";

// material ui icons
import VideoCallIcon from "@material-ui/icons/VideoCall";

// components
import CreateList from "../../../UI/CreateList/CreateList";

const Create = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const menuList = [
        {
            icon: UploadIcon,
            text: "Upload Video",
            link: "/upload",
            image: true,
            iconStyles: null,
        },
        {
            icon: LiveIcon,
            text: "Go Live",
            link: "/go-live",
            image: true,
            iconStyles: null,
        },
        {
            icon: VideoCallIcon,
            text: "Video Call",
            link: "/video-call",
            image: false,
            iconStyles: null,
        },
    ];
    return (
        <div
            className="header__actions-create"
            onClick={() => setShowDropdown(!showDropdown)}
        >
            <VideoCallIcon
                className="icon"
                onClick={() => setShowDropdown(!showDropdown)}
            />
            <CreateList list={menuList} show={showDropdown} />
        </div>
    );
};

export default Create;
