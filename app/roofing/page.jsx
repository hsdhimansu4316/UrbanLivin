"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import About from "@/components/About";

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
                <div className="breadcrumb__background" data-background="./assets/imgs/breadcrumb/roofing.jpg" />
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
                                                <span>Roofing</span>
                                            </li>
                                        </ul>
                                    </nav>
                                    <img src="/assets/imgs/icon/roofing1.png" className="bread-icon" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           

            <section className="choose-us  section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown">
                                     
                                </div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/pare.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">UPVC Ceilings</h2>
                                    <p className="mb-0">
                                        {" "}
                                               <img className="wow clip-a-z" src="/assets/imgs/logo/10.png" style={{ height: "100px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                <p>At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="https://pareindia.com/" target="blank" className="rr-btn">
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

            <section className="choose-us section-space alt-sec section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Heat Resistant Roofing</h2>
                                    <p className="mb-0">
                                        {" "}
                                               <img className="wow clip-a-z" src="/assets/imgs/logo/8.png" style={{ height: "100px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                <p className="     ">At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="https://in.onduline.com/en/homeowner/roofing-products" target="blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 right-img-padding" data-aos="fade-up">
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown">
                                     
                                </div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/onduline.jpg" alt="image not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choose-us  section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown">
                                     
                                </div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/technonicol.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Decorative Slope Roofing</h2>
                                    <p className="mb-0">
                                        {" "}
                                               <img className="wow clip-a-z" src="/assets/imgs/logo/14.png" style={{ height: "100px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                <p>At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="https://technonicol.in/" target="blank" className="rr-btn">
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
            <section className="choose-us section-space alt-sec section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Decorative Metal Ceiling</h2>
                                    <p className="mb-0">
                                        {" "}
                                               <img className="wow clip-a-z" src="/assets/imgs/logo/11.png" style={{ height: "100px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                <p className="     ">At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>
                                <a href="https://schepper.in/" target="_blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 right-img-padding" data-aos="fade-up">
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown">
                                     
                                </div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/16.jpg" alt="image not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choose-us  section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown">
                                     
                                </div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/17.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Concrete Tile Roofing</h2>
                                    <p className="mb-0">
                                        {" "}
                                               <img className="wow clip-a-z" src="/assets/imgs/logo/6.png" style={{ height: "100px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                <p>At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="https://www.bmigroup.com/in/monier/" target="blank" className="rr-btn">
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
