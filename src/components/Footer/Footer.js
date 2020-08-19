import React from "react";

import "./Footer.scss";

const Footer = (props) => {
    return (
        <footer className="footer-main">
            <p>
                2020 &copy;{" "}
                <span className="footer__author">Anik Mohammad</span>
            </p>
            <p className="footer__credits-icon">
                Icons used from <a href="https://icons8.com/icons">Icons8</a> &{" "}
                <a href="https://material-ui.com">Material Icons</a>
            </p>
        </footer>
    );
};

export default Footer;
