"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import About from "@/components/About";
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
                <div className="breadcrumb__background" data-background="./assets/imgs/breadcrumb/facade.png" />
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
                                                <span>Facade</span>
                                            </li>
                                        </ul>
                                    </nav>
                                    <img src="/assets/imgs/icon/facade1.png" className="bread-icon" alt="" />
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
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/facade/1.png" alt="image not found" style={{ "height": "270px !important" }} /> */}
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/facade/1.png" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper ">
                                    <h2 className="section__title   title-animation">Clay Facade </h2>
                                    <p className="      ">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/4.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"We have a new-age commitment to promoting sustainable and revolutionary cladding to build smart and of its kind living spaces. The patented cladding &amp; lightweight cladding solutions for distinct types of structures."} defaultWords={23} /> */}
                                <p>We have a new-age commitment to promoting sustainable and revolutionary cladding to build smart and of its kind living spaces. The patented cladding &amp; lightweight cladding solutions for distinct types of structures.</p>

                                <a href="https://www.mcmcladding.com/" target="blank" className="rr-btn">
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

            <section className="choose-us py-3 my-5 section-space alt-sec section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Glazing</h2>
                                    <p className="mb-0">
                                        {" "}
                                        <img className="wow clip-a-z bg-white" src="/assets/imgs/logo/7.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"Structural Steel Glazings are fabricated from roll formed sections made of galvanized colour coated steel with a combination of specially designed components made up of CRCA with zinc phosphate. Required stiffeners will be inserted to take care of wind loads. A specially designed glass holding section will take care of weight of the glass. Silicon will be applied to arrest water leakages."} defaultWords={23} /> */}
                                <p>Structural Steel Glazings are fabricated from roll formed sections made of galvanized colour coated steel with a combination of specially designed components made up of CRCA with zinc phosphate. Required stiffeners will be inserted to take care of wind loads. A specially designed glass holding section will take care of weight of the glass. Silicon will be applied to arrest water leakages.</p>

                                <a href="https://nclbuildtek.com/" target="blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 right-img-padding" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/facade/2.png" alt="image not found" style={{ "height": "270px !important", "float": "right" }} /> */}
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/facade/2.png" alt="image not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choose-us py-3 my-5  section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/facade/mdc.jpg" alt="image not found" style={{ "height": "270px !important" }} /> */}
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/facade/mdc.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Metal Duct Coverings </h2>
                                    <p className="mb-0">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/11.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"We cater to users with a keen sense of design and an innovative approach to modern architecture. Specializing in molded metal products, Schepper offers a diverse range including metal false ceilings, exterior elevations, duct coverings and façades."} defaultWords={23} /> */}
                                <p>We cater to users with a keen sense of design and an innovative approach to modern architecture. Specializing in molded metal products, Schepper offers a diverse range including metal false ceilings, exterior elevations, duct coverings and façades.</p>
                                <p></p>
                                <a href="https://schepper.in/" target="blank" className="rr-btn">
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

            <section className="choose-us py-3 my-5 section-space alt-sec section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">ACP & HPL Facade </h2>
                                    <p className=" mb-0 ">
                                        {" "}
                                        <img className="wow clip-a-z bg-white" src="/assets/imgs/logo/1.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"We are a market leader of Metal Composite Panels (MCP) in India, constantly on the outlook for industry innovation and challenges. Alstone, a two decades old brand is trusted by architects, builders, façade consultants, and fabricators. Alstone has the widest range of products in industry to meet unique needs of the market."} defaultWords={23} /> */}
                                <p>We are a market leader of Metal Composite Panels (MCP) in India, constantly on the outlook for industry innovation and challenges. Alstone, a two decades old brand is trusted by architects, builders, façade consultants, and fabricators. Alstone has the widest range of products in industry to meet unique needs of the market.</p>

                                <a href="https://www.alstoneindia.com/" target="blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 right-img-padding" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/facade/4.png" alt="image not found" style={{ "height": "270px !important", "float": "right" }} /> */}
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/facade/4.png" alt="image not found" />
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
