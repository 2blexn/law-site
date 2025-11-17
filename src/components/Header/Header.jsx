import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/contacts") {
            setScrolled(true);
            return;
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`header navbar navbar-expand-lg navbar-dark-custom${scrolled ? " scrolled" : ""}`}>
            <div className="container-fluid">
                <Link className="navbar-brand header-logo" to="/">ProLex</Link>
                <button 
                    className={`navbar-toggler custom-toggler ${isMenuOpen ? 'open' : ''}`} 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded={isMenuOpen} 
                    aria-label="Toggle navigation"
                    onClick={handleMenuToggle}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto header-menu">
                        <Link className="nav-link active blue-100" aria-current="page" to="/" onClick={closeMenu}>Головна</Link>
                        <Link className="nav-link blue-100" to="/" state={{scrollTo: 'about'}} onClick={closeMenu}>Про нас</Link>
                        <Link className="nav-link blue-100" to="/" state={{scrollTo: 'services'}} onClick={closeMenu}>Послуги</Link>
                        <Link className="nav-link blue-100" to="/" state={{scrollTo: 'reviews'}} onClick={closeMenu}>Відгуки</Link>
                        <Link className="nav-link blue-100" to="/contacts" onClick={closeMenu}>Контакти</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
