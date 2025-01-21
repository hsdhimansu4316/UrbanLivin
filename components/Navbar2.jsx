import React from "react";

function Navbar2() {
    return (
        <>
            <header>
                <div id="header-sticky" className="header__area header-1">
                    <div className="container">
                        <div className="mega__menu-wrapper p-relative">
                            <div className="header__main">
                                <div className="header__logo">
                                    <a href="/">
                                        <div className="logo">
                                            <img src="/assets/imgs/logo/logo1.png" style={{ height: "6vh" }} alt="logo not found" />
                                        </div>
                                    </a>
                                </div>
                                <div className="mean__menu-wrapper d-none d-lg-block">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                {/* <li className="has-dropdown">
                                                    <a href="/products">Products</a>
                                                    <ul
                                                        className="submenu"
                                                        style={{
                                                            display: "grid",
                                                            gridTemplateColumns: "repeat(2, 1fr)",
                                                        }}
                                                    >
                                                        <li>
                                                            <a href="windows">Windows</a>
                                                        </li>
                                                        <li>
                                                            <a href="kitchens-and-wardrobs">Kitchens & Wardrobs</a>
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
                                                </li> */}
                                                <li>
                                                            <a href="windows">Windows</a>
                                                        </li>
                                                        <li>
                                                            <a href="kitchens-and-wardrobs">Kitchens & Wardrobs</a>
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
                                                {/* <li>
                                                    <a href="">Enquire</a>
                                                </li> */}

                                                {/* <li><a href="contact-us.html">Contact</a></li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* <div className="header__right">
                  <div className="header__action d-flex align-items-center">
                    <div className="header__hamburger">
                      <div className="sidebar__toggle">
                        <a className="bar-icon" href="javascript:void(0)">
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar2;
