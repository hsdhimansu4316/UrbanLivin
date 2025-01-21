import React from 'react'

function Navbar() {
  return (
    <>
     <div id="header-sticky" className="header__area header-3">
       <div className="container">
        <div className="mega__menu-wrapper p-relative">
          <div className="header__main">
            <div className="header__logo">
              <a href="index.html">
                <div className="logo">
                <img src="/assets/imgs/logo/logo1.png" style={{height:'6vh'}} alt="logo not found" />

                </div>
              </a>
            </div>
            <div className="mean__menu-wrapper d-none d-lg-block">
              <div className="main-menu main-menu-3">
                <nav id="mobile-menu">
                  <ul>
                    <li className="has-dropdown has-mega-menu active">
                      <a href="javascript:void(0)">Home</a>
                      <ul className="mega-menu mega-menu-grid-3">
                        <li>
                          <div className="home__menu-item">
                            <div className="home__menu-thumb">
                              <img src="assets/imgs/menu/menu-home-1.jpg" alt="thumb not found" />
                              <div className="home__menu-buttons">
                                <a href="index.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">Multi Page</span>
                                    <span className="text-two">Multi Page</span>
                                  </span>
                                </a>
                                <a href="index-one-page.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">One Page</span>
                                    <span className="text-two">One Page</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="home__menu-title">Home-1</h4>
                          </div>
                        </li>
                        <li>
                          <div className="home__menu-item">
                            <div className="home__menu-thumb">
                              <img src="assets/imgs/menu/menu-home-2.jpg" alt="thumb not found" />
                              <div className="home__menu-buttons">
                                <a href="index-2.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">Multi Page</span>
                                    <span className="text-two">Multi Page</span>
                                  </span>
                                </a>
                                <a href="index-2-one-page.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">One Page</span>
                                    <span className="text-two">One Page</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="home__menu-title">Home-2</h4>
                          </div>
                        </li>
                        <li>
                          <div className="home__menu-item">
                            <div className="home__menu-thumb">
                              <img src="assets/imgs/menu/menu-home-3.jpg" alt="thumb not found" />
                              <div className="home__menu-buttons">
                                <a href="index-3.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">Multi Page</span>
                                    <span className="text-two">Multi Page</span>
                                  </span>
                                </a>
                                <a href="index-3-one-page.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">One Page</span>
                                    <span className="text-two">One Page</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="home__menu-title">Home-3</h4>
                          </div>
                        </li>
                        <li>
                          <div className="home__menu-item">
                            <div className="home__menu-thumb">
                              <img src="assets/imgs/menu/menu-home-4.jpg" alt="thumb not found" />
                              <div className="home__menu-buttons">
                                <a href="index-4.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">Multi Page</span>
                                    <span className="text-two">Multi Page</span>
                                  </span>
                                </a>
                                <a href="index-4-one-page.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">One Page</span>
                                    <span className="text-two">One Page</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="home__menu-title">Home-4</h4>
                          </div>
                        </li>
                        <li>
                          <div className="home__menu-item">
                            <div className="home__menu-thumb">
                              <img src="assets/imgs/menu/menu-home-5.jpg" alt="thumb not found" />
                              <div className="home__menu-buttons">
                                <a href="index-5.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">Multi Page</span>
                                    <span className="text-two">Multi Page</span>
                                  </span>
                                </a> 
                                <a href="index-5-one-page.html" className="rr-btn__header">
                                  <span className="btn-wrap">
                                    <span className="text-one">One Page</span>
                                    <span className="text-two">One Page</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="home__menu-title">Home-5</h4>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li><a href="about-us.html">About us</a></li>
                    <li className="has-dropdown">
                      <a href="services.html">Service</a>
                      <ul className="submenu">
                        <li><a href="services.html">Service</a></li>
                        <li><a href="service-details.html">Service Details</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown ">
                      <a href="javascript:void(0)">Pages</a>
                      <ul className="submenu">
                        <li><a href="our-team.html">Team</a></li>
                        <li><a href="team-details.html">Team Details</a></li>
                        <li><a href="protfolio.html">Protfolio</a></li>
                        <li><a href="protfolio-details.html">Protfolio Details</a></li>
                        <li><a href="latest-article.html">latest-article</a></li>
                        <li><a href="404.html">404 Page</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="blog-grid.html">Blog</a>
                      <ul className="submenu">
                        <li><a href="blog-grid.html">Blog</a></li>
                        <li><a href="blog-list.html">Blog List</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact-us.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header__right">
              <div className="header__action d-flex align-items-center">
                <div className="header__btn-wrap align-items-center d-inline-flex">
                  <div className="rr-header-icon-search">
                    <button className="search-open-btn">
                      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.88966 18.7793C14.7993 18.7793 18.7793 14.7993 18.7793 9.88966C18.7793 4.98004 14.7993 1 9.88966 1C4.98004 1 1 4.98004 1 9.88966C1 14.7993 4.98004 18.7793 9.88966 18.7793Z" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.0017 20.9978L16.168 16.1641" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>                                            
                    </button>
                  </div>
                  <div className="rr-header-contact-btn d-flex align-items-center d-none d-sm-flex">
                    <a href="index.html" className="rr-btn__header">
                      <span className="btn-wrap">
                        <span className="text-one">Read More 
                          <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.5H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 1.5L11 6.5L6 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-two">Read More 
                          <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.5H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 1.5L11 6.5L6 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="header__hamburger ml-30 d-xl-none">
                  <div className="sidebar__toggle">
                    <a className="bar-icon" href="javascript:void(0)">
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
      </div>
      </div>
    </>
  )
}

export default Navbar
