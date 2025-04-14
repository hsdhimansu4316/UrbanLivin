import React, { useState } from "react";

function Navbar2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header>
                <div id="header-sticky" className="header__area header-1">
                    <div className="container">
                        <div className="mega__menu-wrapper p-relative">
                            <div className="header__main">
                                {/* Logo Section */}
                                <div className="header__logo">
                                    <a href="/">
                                        <div className="logo">
                                            <img src="/assets/imgs/logo/logo1.png" style={{ height: "6vh" }} alt="logo not found" />
                                        </div>
                                    </a>
                                </div>

                                {/* Desktop Menu */}
                                <div className="mean__menu-wrapper d-none d-lg-block">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <a href="/">Home</a>
                                                </li>
                                                <li>
                                                    <a href="/windows">Windows</a>
                                                </li>
                                                <li>
                                                    <a href="/kitchens-and-wardrobs">Kitchens & Interiors</a>
                                                </li>
                                                <li>
                                                    <a href="/roofing">Roofing</a>
                                                </li>
                                                <li>
                                                    <a href="/doors">Doors</a>
                                                </li>
                                                <li>
                                                    <a href="/railing">Railings</a>
                                                </li>
                                                <li>
                                                    <a href="/facade">Facade</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                {/* Mobile Menu Toggle */}
                                <div className="header__hamburger ml-30 d-lg-none">
                                    <div className="sidebar__toggle">
                                        <a
                                            className="bar-icon"
                                            href="#!"
                                            onClick={toggleMenu} // Toggle offcanvas menu on click
                                        >
                                            <span />
                                            <span />
                                            <span />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Off-Canvas Mobile Menu */}
            <div
                className={`offcanvas-menu ${isMenuOpen ? "open" : ""} d-lg-none`}
                onClick={closeMenu} // Close the menu when clicking outside
            >
                <div className="offcanvas-content" onClick={(e) => e.stopPropagation()}>
                    <div className="offcanvas-header">
                        <button className="close-btn" onClick={closeMenu}>
                            &times;
                        </button>
                    </div>
                    <nav className="offcanvas-nav">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/windows">Windows</a>
                            </li>
                            <li>
                                <a href="/kitchens-and-wardrobs">Kitchens & Interiors</a>
                            </li>
                            <li>
                                <a href="/roofing">Roofing</a>
                            </li>
                            <li>
                                <a href="/doors">Doors</a>
                            </li>
                            <li>
                                <a href="/railing">Railings</a>
                            </li>
                            <li>
                                <a href="/facade">Facade</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Styling for Off-Canvas Menu */}
        </>
    );
}

export default Navbar2;
