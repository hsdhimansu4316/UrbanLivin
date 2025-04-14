"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";

function Footer() {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true); // Open the popup
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Close the popup
    };
    return (
        <>
            <footer>
                <section className="footer__area-common theme-bg-heading-primary overflow-hidden">
                    <div className="footer__main-wrapper footer__bottom-border">
                        <div className="container">
                            <div className="row mb-minus-50">
                                <div className="col-lg-6 col-6">
                                    <div className="footer__widget footer__widget-item-4">
                                        <ul>
                                            <li className="rr-header-contact-btn d-flex  pb-4 align-items-center">
                                                <button className="rr-btn__header" onClick={handleOpenPopup}>
                                                    <span className="btn-wrap">
                                                        <span className="text-one">
                                                            Enquiry Now
                                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 6.5H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M6 1.5L11 6.5L6 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-two">
                                                            Enquiry Now
                                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 6.5H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M6 1.5L11 6.5L6 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </button>
                                            </li>
                                        </ul>
                                        <a href="#">
                                            {" "}
                                            <p className="text-white ">
                                                <u>Career</u>
                                            </p>
                                        </a>
                                        <div className="footer__widget-title">
                                            <h6>Bhubaneswar Office</h6>
                                        </div>
                                        <div className="footer__contact">
                                            <ul>
                                                <li className="address">
                                                    <span className="icon">
                                                        <img src="assets/imgs/icon/map.svg" alt="" />
                                                       
                                                    </span>
                                                    <span className="text">
                                                        <a >
                                                            Urban Livin, Plot No - 208, opposite of Post Office, Saheed Nagar, Bhubaneswar, Odisha 751007
                                                        </a>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <img src="assets/imgs/icon/call.svg" alt="" />
                                                    </span>
                                                    <span className="text">
                                                        <a href="tel:9831177153">+91 9831177153</a>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <img src="assets/imgs/icon/mail.svg" alt="" />
                                                    </span>
                                                    <span className="text">
                                                        <a href="mailto:example@gmail.com">livinwithurban@gmail.com</a>
                                                    </span>
                                                </li>
                                                <li>
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4439.015952507762!2d85.8456625758276!3d20.29107571270506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c3887c217b%3A0xe10b24e2919fcc85!2sUrban%20Livin!5e1!3m2!1sen!2sin!4v1733485240586!5m2!1sen!2sin" width="600" height="90" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-lg-4 col-6">
                                    <div className="footer__widget footer__widget-item-4">
                                        <div className="footer__widget-title">
                                            <h6>Other Locations</h6>
                                        </div>
                                        <div className="footer__contact">
                                            <ul>
                                                <li className="address">
                                                    <span className="icon">
                                                        <img src="assets/imgs/icon/map.svg" alt="" />
                                                    </span>
                                                    <span className="text">
                                                        <a target="_blank" href="https://maps.app.goo.gl/1N77c8d8zieLRaot7">
                                                            Urban Livin, Plot No - 208, opposite of Post Office, Saheed Nagar, Bhubaneswar, Odisha 751007
                                                        </a>
                                                    </span>
                                                </li>
                                                <li className="address">
                                                    <span className="icon">
                                                        <img src="assets/imgs/icon/map.svg" alt="" />
                                                    </span>
                                                    <span className="text">
                                                        <a target="_blank" href="https://maps.app.goo.gl/1N77c8d8zieLRaot7">
                                                            Urban Livin, Plot No - 208, opposite of Post Office, Saheed Nagar, Bhubaneswar, Odisha 751007
                                                        </a>
                                                    </span>
                                                </li>
                                                <li className="address">
                                                    <span className="icon">
                                                        <img src="assets/imgs/icon/map.svg" alt="" />
                                                    </span>
                                                    <span className="text">
                                                        <a target="_blank" href="https://maps.app.goo.gl/1N77c8d8zieLRaot7">
                                                            Urban Livin, Plot No - 208, opposite of Post Office, Saheed Nagar, Bhubaneswar, Odisha 751007
                                                        </a>
                                                    </span>
                                                </li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-6 col-6">
                                    <div className="footer__widget right-footer pl-0 footer__widget-item-4">
                                        <div className="footer__widget-title">
                                            <h6 className="text-center">Contact Us</h6>
                                        </div>
                                        <div className="footer__contact">
                                       <a href=""> <p className="text-white text-center"><u>Join Now</u></p></a>
                                        
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="footer__copyright text-lg-center text-center">
                                        <p className="mb-0">
                                            Copyright © 2025 Urban Livin | All Rights Reserved. Developed By<a href="https://thetechnovate.com/"> Technovate</a>
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6">
                                    <div className="footer__copyright-menu  last_no_bullet">
                                        <ul>
                                            <li>
                                                <a href="about-us.html">Privacy &amp; Policy </a>
                                            </li>
                                            <li>
                                                <a href="about-us.html">Careers</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Media centre</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
            {showPopup && <PopupForm onClose={handleClosePopup} />}
        </>
    );
}

export default Footer;
