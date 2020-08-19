import React, { useState } from "react";
import { Link } from "react-router-dom";

// css stylesheets
import "./HeaderInput.scss";

// Material UI Icons
import SearchIcon from "@material-ui/icons/Search";

const HeaderInput = (props) => {
    const [searchInput, setSearchInput] = useState("");

    const searchInputHandler = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    };

    return (
        <section className="header__input-container">
            <input
                className="header__search-input"
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={searchInputHandler}
            />
            <Link
                className="header__search-button"
                to={{
                    pathname: "/result",
                    search: `?search_query=${searchInput}`,
                }}
            >
                <SearchIcon />
            </Link>
        </section>
    );
};

export default HeaderInput;
