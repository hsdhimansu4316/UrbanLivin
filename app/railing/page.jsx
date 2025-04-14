"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import ReadMore from "@/components/read-more/read-more";

function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <>
            <Navbar2 />
            <div className="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
                <div className="breadcrumb__background" data-background="./assets/imgs/breadcrumb/railingbanner.jpg" />
                <div className="container">

                    <div className="row align-items-center justify-content-between">
                        <div className="col-12">
                            <div className="breadcrumb__content text-center">
                                <h2 className="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">Products</h2>
                                <div className="breadcrumb__menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <span>
                                                    <a href="index.html">Home</a>
                                                </span>
                                            </li>
                                            <li className="active">
                                                <span>Railings</span>
                                            </li>
                                        </ul>
                                    </nav>
                                    <img src="/assets/imgs/icon/railing1.png" className="bread-icon" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="choose-us py-3 my-5  section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/railing/railing3.jpg" alt="image not found" style={{ "height": "270px !important" }} /> */}
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown">
                                </div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/railing/railing3.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Railings</h2>

                                    <p className="mb-0">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/15.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"With India’s only CE Certified Modular Railing Systems, discover sophistication in Aluminium, transparency in Glass, and timeless appeal in Baluster Railing Systems. Elevate your space with TECHNORAILL precision-crafted products through Precision, Innovation, &amp; Unwavering Commitment."} defaultWords={23} /> */}
                                <p>With India’s only CE Certified Modular Railing Systems, discover sophistication in Aluminium, transparency in Glass, and timeless appeal in Baluster Railing Systems. Elevate your space with TECHNORAILL precision-crafted products through Precision, Innovation, &amp; Unwavering Commitment.</p>

                                <a href="https://technoraill.com/" target="blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Page;
