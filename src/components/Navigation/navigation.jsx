import React, { useState, useEffect } from 'react';
import '../../styles/Navigation/navigation.css';
import Header from "../Header/header.jsx";

const Navbar = ({ onTestClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
          <Header isScrolled={isScrolled} />
            {/* Навігаційна панель */}
            <nav className={`navbar ${isScrolled ? 'fixed' : ''}`}>
                <div className="nav-left-menu">
                    <ul className="nav-links">
                        <li><a>HOME</a></li>
                        <li><a>NEWS</a></li>
                        <li><a>CATALOG</a></li>
                        <li><a>LIBRARY</a></li>
                        <li><a>FAQ</a></li>
                        {/*<button onClick={onTestClick}>Test</button>*/}
                        {/*<a href="forja-game://">🎮 Запустити гру</a>*/}
                    </ul>
                </div>
                <div className="nav-search-bar">
                    <input type="text" placeholder="Пошук" />
                </div>
                <div className="nav-right-menu">
                    <ul className="nav-links">
                        <li><a>EN</a></li>
                        <li><a>CART</a></li>
                        <li><a>LOGIN</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
