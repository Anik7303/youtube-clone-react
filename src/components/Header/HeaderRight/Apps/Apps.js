import React, { useState } from "react";

// css stylesheets
import "./Apps.scss";

// material ui icons
import AppsIcon from "@material-ui/icons/Apps";

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
        },
        {
            icon: YoutubePlayIcon,
            text: "YouTube Music",
            link: "youtube-music",
            image: true,
        },
        {
            icon: YoutubePlayIcon,
            text: "YouTube Kids",
            link: "youtube-kids",
            image: true,
        },
        {
            icon: YoutubePlayIcon,
            text: "Creator Academy",
            link: "/youtube-creator-academy",
            image: true,
        },
        {
            icon: YoutubePlayIcon,
            text: "YouTube for Artists",
            link: "/youtube-artists",
            image: true,
        },
    ];

    return (
        <div className="header__actions-apps">
            <AppsIcon onClick={() => setShowDropdown(!showDropdown)} />
            <CreateList list={menuList} show={showDropdown} />
        </div>
    );
};

export default Apps;
