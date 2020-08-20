import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

// css stylesheets
import "./CreateList.scss";

// components
import LogoWithText from "../LogoWithText/LogoWithText";

const CreateList = (props) => {
    const listClasses = ["create-list"];
    if (props.show) {
        listClasses.push("show");
    }
    return (
        <ul className={listClasses.join(" ")}>
            {props.list.map((item, index) => {
                return (
                    <li className="create-list__item" key={index}>
                        <Link className="create-list__item-link" to={item.link}>
                            <LogoWithText
                                icon={item.icon}
                                text={item.text}
                                image={item.image}
                                iconStyles={item.iconStyles}
                            />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

CreateList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.exact({
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
                .isRequired,
            text: PropTypes.string.isRequired,
            link: PropTypes.string,
            image: PropTypes.bool.isRequired,
            iconStyles: PropTypes.object,
        })
    ),
    show: PropTypes.bool,
};

export default CreateList;
