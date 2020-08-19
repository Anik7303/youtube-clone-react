import React, { useState } from "react";
import { Link } from "react-router-dom";

// css stylesheets
import "./Create.scss";

// components
import ListItem from "../../../UI/LogoWithText/LogoWithText";
import MakeLogo from "../../../UI/MakeLogo/MakeLogo";

// icons
import UploadIcon from "../../../../assets/icons/youtube-play.png";
import LiveIcon from "../../../../assets/icons/youtube-live-51.png";

// material ui icons
import VideoCallIcon from "@material-ui/icons/VideoCall";

const Create = (props) => {
    const [listStatus, setListStatus] = useState(false);
    const listClasses = ["header__action"];
    if (listStatus) {
        listClasses.push("show");
    }

    const list = [
        {
            icon: UploadIcon,
            title: "Upload Video",
            link: "/upload",
        },
        {
            icon: LiveIcon,
            title: "Go Live",
            link: "/go-live",
        },
    ];
    return (
        <div
            className="header__actions-create"
            onClick={() => setListStatus(!listStatus)}
        >
            <VideoCallIcon
                className="icon"
                onClick={() => setListStatus(!listStatus)}
            />
            <ul className={listClasses.join(" ")}>
                {list.map((item) => {
                    return (
                        <li>
                            <Link
                                className="header__action-link"
                                to={item.link}
                            >
                                <ListItem
                                    icon={() => (
                                        <MakeLogo
                                            logo={item.icon}
                                            title={item.title}
                                        />
                                    )}
                                    text={item.title}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Create;
