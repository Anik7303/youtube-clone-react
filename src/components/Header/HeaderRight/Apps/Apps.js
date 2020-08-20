import React, { useState } from "react";

// css stylesheets
import "./Apps.scss";

// material ui icons
import AppsIcon from "@material-ui/icons/Apps";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

// icons
import TvShowIcon from "../../../../assets/icons/tv-show-50.png";
import YoutubePlayIcon from "../../../../assets/icons/play-button-48.png";

// components
import CreateList from "../../../UI/CreateList/CreateList";

const Apps = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const menuList = [
        {
            icon: TvShowIcon,
            text: "YouTube TV",
            link: "/youtube-tv",
            image: true,
            iconStyles: null,
        },
        {
            icon: PlayCircleOutlineIcon,
            text: "YouTube Music",
            link: "youtube-music",
            image: false,
            iconStyles: {
                color: "white",
                backgroundColor: "red",
                borderRadius: "50%",
                fontSize: "30px",
                padding: "5px",
            },
        },
        {
            icon: YoutubePlayIcon,
            text: "YouTube Kids",
            link: "youtube-kids",
            image: true,
            iconStyles: null,
        },
        {
            icon: YoutubePlayIcon,
            text: "Creator Academy",
            link: "/youtube-creator-academy",
            image: true,
            iconStyles: null,
        },
        {
            icon: YoutubePlayIcon,
            text: "YouTube for Artists",
            link: "/youtube-artists",
            image: true,
            iconStyles: null,
        },
    ];

    return (
        <div
            className="header__actions-apps"
            onClick={() => setShowDropdown(!showDropdown)}
        >
            <AppsIcon onClick={() => setShowDropdown(!showDropdown)} />
            <CreateList list={menuList} show={showDropdown} />
        </div>
    );
};

export default Apps;
