import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

// css stylesheets
import "./CreateList.scss";

// components
import LogoWithText from "../LogoWithText/LogoWithText";
import CreateLogo from "../CreateLogo/CreateLogo";

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
                            />
                            {/* <LogoWithText
                                icon={() => (
                                    <CreateLogo
                                        logo={item.icon}
                                        title={item.text}
                                        image={item.image}
                                    />
                                )}
                                text={item.text}
                            /> */}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

CreateList.propTypes = {
    list: PropTypes.array.isRequired,
    show: PropTypes.bool,
};

export default CreateList;
