import React from 'react';
import './Footer.css';
import {Flex} from "antd";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                    <div className="footer-brand">
                        <Flex align="center">
                            <img src="/genetic-data-svgrepo-com.svg" alt="logo" />
                            WOW Car Rental
                        </Flex>
                    </div>
                    <div className="footer-copyright">
                    Copyright © 2023 WOW Inc.
                </div>
                    <div className="footer-links">
                    <a href="/legal">Legal Stuff</a> |
                    <a href="/privacy">Privacy Policy</a> |
                    <a href="/security">Security</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;