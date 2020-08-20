import React from "react";

import "./Footer.scss";

const Footer = (props) => {
    return (
        <footer className="footer-main">
            <p>
                &copy; 2020{" "}
                <span className="footer__author">Anik Mohammad</span>
            </p>
            <p className="footer__credits-icon">
                Icons used from <a href="https://icons8.com/icons" target="_blank">Icons8</a> &{" "}
                <a href="https://material-ui.com" target="_blank">Material Icons</a>
            </p>
        </footer>
    );
};

export default Footer;
