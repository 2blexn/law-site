import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`header navbar navbar-expand-lg navbar-dark-custom${scrolled ? " scrolled" : ""}`}>
            <div className="container-fluid">
                <Link className="navbar-brand header-logo" to="/">ProLex</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto header-menu">
                        <Link className="nav-link active blue-100" aria-current="page" to="/">Головна</Link>
                        <Link className="nav-link blue-100" to="/" state={{scrollTo: 'about'}}>Про нас</Link>
                        <Link className="nav-link blue-100" to="/" state={{scrollTo: 'services'}}>Послуги</Link>
                        <Link className="nav-link blue-100" to="/" state={{scrollTo: 'reviews'}}>Відгуки</Link>
                        <Link className="nav-link blue-100" to="/contacts">Контакти</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
