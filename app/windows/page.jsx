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
                <div className="breadcrumb__background" data-background="./assets/imgs/breadcrumb/window.jpg" />
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
                                                    <a href="/">Home</a>
                                                </span>
                                            </li>
                                            <li className="active">
                                                <span>Windows</span>
                                            </li>
                                        </ul>
                                    </nav>
                                    <img src="/assets/imgs/icon/window1.png" className="bread-icon" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="choose-us section-space mb-0  section-space__top overflow-hidden py-3 my-5">
                <div className="container">
                    <div className="row align-items-center p-3">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">System Alumunium Windows</h2>
                                    <p className="   mb-0   ">
                                        {" "}
                                        <img className="wow clip-a-z bg-white" src="/assets/imgs/logo/16.png " style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"TOSTEM introduces sophisticated, sturdy, and highly resilient aluminium windows for your home and office spaces. Combining aesthetics with pragmatism, TOSTEM uses modern design as the bedrock of innovation, we manufacture Japanese pre-engineered windows that require exceptionally low maintenance."} defaultWords={500} /> */}
                                <p>TOSTEM introduces sophisticated, sturdy, and highly resilient aluminium windows for your home and office spaces. Combining aesthetics with pragmatism, TOSTEM uses modern design as the bedrock of innovation, we manufacture Japanese pre-engineered windows that require exceptionally low maintenance.</p>

                                <a href="https://www.tostemindia.com/" target="_blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 right-img-padding" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/windows/1.jpg" alt="image not found"  /> */}
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/windows/1.jpg" alt="image not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choose-us alt-sec  section-space__top overflow-hidden py-3 my-5">
                <div className="container">
                    <div className="row p-4 align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/windows/2.jpg" alt="image not found" style={{ "height": "270px !important" }} /> */}
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/windows/2.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content pe-0">
                                <div className="section-2__title-wrapper">
                                    <h2 className="section__title   title-animation">UPVC Windows </h2>

                                    <p className="mb-0">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/17.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"Enjoy uninterrupted view of your surroundings with stunning UPVC sliding windows and doors from NCL VEKA. Break the monotony of rectangular windows with arched, combination and bay UPVC windows from NCL VEKA. Extraordinary, contemporary and luxurious, these UPVC windows are sure to make a statement!"} defaultWords={23} /> */}
                                <p>Enjoy uninterrupted view of your surroundings with stunning UPVC sliding windows and doors from NCL VEKA. Break the monotony of rectangular windows with arched, combination and bay UPVC windows from NCL VEKA. Extraordinary, contemporary and luxurious, these UPVC windows are sure to make a statement!</p>

                                <a href="https://nclveka.com/" target="blank" className="rr-btn">
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

            {/* <section className="choose-us section-space  section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">UPVC Windows </h2>
                                    <p className="  mb-0    ">
                                        {" "}
                                        <img className="wow clip-a-z bg-white" src="/assets/imgs/logo/7.png" style={{ height: "100px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                <p className="  ">At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="https://nclbuildtek.com/windows-doors/" target="blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 right-img-padding" data-aos="fade-up">
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/windows/UPVC21.jpg" alt="image not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="choose-us  mb-4  section-space__top overflow-hidden py-3 my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Colour Coated Steel Windows</h2>
                                    <p className="  mb-0    ">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/7.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"Colour coated galvanized steel windows are durable, low- maintenance, and stylish. Excellent insulation for energy efficiency. Sleek appearance, versatile styles, and a secure and long-lasting investment for modern homes."} defaultWords={23} /> */}
                                <p>Colour coated galvanized steel windows are durable, low- maintenance, and stylish. Excellent insulation for energy efficiency. Sleek appearance, versatile styles, and a secure and long-lasting investment for modern homes.</p>
                                <a href="https://nclbuildtek.com/windows-doors/" target="blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/windows/cc.png" alt="image not found" style={{ "height": "270px !important", "float":"right" }} /> */}
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/windows/cc.png" alt="image not found" />
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
