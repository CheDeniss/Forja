import React from 'react';
import "../../styles/Header/header.css";
import flame from "../../assets/images/logos/Flame.svg";
import logo from "../../assets/images/logos/Forja.png";

import fb_icon from "../../assets/icons/header-social-icons/fb-sl-icon.svg";
import insta_icon from "../../assets/icons/header-social-icons/inst-sl-icon.svg";
import x_icon from "../../assets/icons/header-social-icons/x-sl-icon.svg";
import eg_icon from "../../assets/icons/header-social-icons/eg-sl-icon.svg";


const Header = ({ isScrolled }) => {
    return (
        <header className={`header ${isScrolled ? 'hidden' : ''}`}>
            <img className="header-flame" src={flame} alt={'FLAME'}/>
            <div className="logo-slicons-container">
                <img className="sl-icon" src={fb_icon} alt={'social icon'} />
                <img className="sl-icon" src={insta_icon} alt={'social icon'} />
                <img className="sl-icon" src={x_icon} alt={'social icon'} />
                <img className="sl-icon" src={eg_icon} alt={'social icon'} />

                <img className="header-logo" src={logo} alt={'FORJA'}/>
            </div>
        </header>
    );
};

export default Header;
