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
                <div className="breadcrumb__background" data-background="./assets/imgs/breadcrumb/roofing.jpg" />
                <div className="container p-4">
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

            <section className="choose-us py-3 my-05 section-space__top overflow-hidden">
                <div className="container p-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/pare.jpg" alt="image not found" style={{ "height": "270px !important" }} /> */}
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/pare.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">UPVC Ceilings</h2>
                                    <p className="mb-0">
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/10.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"Give your space an astonishing feel. Our vision is to impart a global outreach to Indian made Interior products. We identify innovative global trends and manufacture a matchless range in India."} defaultWords={23} /> */}
                                <p>Give your space an astonishing feel. Our vision is to impart a global outreach to Indian made Interior products. We identify innovative global trends and manufacture a matchless range in India.</p>

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

            <section className="choose-us py-3 my-05 section-space alt-sec section-space__top overflow-hidden">
                <div className="container p-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Heat Resistant Roofing</h2>
                                    <p className="mb-0">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/8.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"For all your construction and renovation projects, we offer roofing solutions, waterproofing systems, and supplies for structural work. Stylish, robust solutions that ensure the comfort of the building&#39;s users. Houses, Resorts, Shops, Schools – Onduline solutions are suited to all types of building."} defaultWords={23} /> */}
                                <p>For all your construction and renovation projects, we offer roofing solutions, waterproofing systems, and supplies for structural work. Stylish, robust solutions that ensure the comfort of the building&#39;s users. Houses, Resorts, Shops, Schools – Onduline solutions are suited to all types of building.</p>
                                <a href="https://in.onduline.com/en/homeowner/roofing-products" target="blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/onduline.jpg" alt="image not found" style={{ "height": "270px !important", "float": "right" }} /> */}
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/onduline.jpg" alt="image not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choose-us py-3 my-05  section-space__top overflow-hidden">
                <div className="container p-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/technonicol.jpg" alt="image not found" style={{ "height": "270px !important" }} /> */}
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/technonicol.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Decorative Slope Roofing</h2>
                                    <p className="mb-0">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/14.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"We are the leading international manufacturer and supplier of roofing, waterproofing, thermal insulation and sound absorption materials. We are proud to offer up-to-date products and technologies that combine global expertise and the elaboration of our own R&amp;D centres. A wide range of durable materials and reliable solutions allows making a choice that is best suited to the customer both in price and in quality."} defaultWords={23} /> */}
                                <p>We are the leading international manufacturer and supplier of roofing, waterproofing, thermal insulation and sound absorption materials. We are proud to offer up-to-date products and technologies that combine global expertise and the elaboration of our own R&amp;D centres. A wide range of durable materials and reliable solutions allows making a choice that is best suited to the customer both in price and in quality.</p>

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
            <section className="choose-us py-3 my-05 section-space alt-sec section-space__top overflow-hidden">
                <div className="container p-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Decorative Metal Ceiling</h2>
                                    <p className="mb-0">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/11.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"We cater to users with a keen sense of design and an innovative approach to modern architecture. Specializing in molded metal products, Schepper offers a diverse range including metal false ceilings, exterior elevations, and façades."} defaultWords={23} /> */}
                                <p>We cater to users with a keen sense of design and an innovative approach to modern architecture. Specializing in molded metal products, Schepper offers a diverse range including metal false ceilings, exterior elevations, and facades.</p>
                                <a href="https://schepper.in/" target="_blank" className="rr-btn">
                                    <span className="btn-wrap">
                                        <span className="text-one">Know More</span>
                                        <span className="text-two">Know More</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/16.jpg" alt="image not found" style={{ "height": "270px !important", "float": "right" }} /> */}
                            <div className="choose-us__media">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/16.jpg" alt="image not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choose-us py-3 my-05  section-space__top overflow-hidden">
                <div className="container p-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/17.jpg" alt="image not found" style={{ "height": "270px !important" }} /> */}
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown"></div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/roofing/17.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Concrete Tile Roofing</h2>
                                    <p className="mb-0">
                                        {" "}
                                        <img className="wow clip-a-z" src="/assets/imgs/logo/6.png" style={{ height: "70px", widows: "100px" }} alt="image not found" />
                                    </p>
                                </div>
                                {/* <ReadMore text={"Since 1997, BMI Monier stands as India&#39;s epitome of premium roofing. Trusted by top builders and famed for our unparalleled quality, our tiles blend tradition with innovation in both concrete &amp; clay. Dive into a spectrum of designs and colours. Partner with India&#39;s roofing paragon for durability &amp; aesthetics."} defaultWords={23} /> */}
                                <p>Since 1997, BMI Monier stands as India&#39;s epitome of premium roofing. Trusted by top builders and famed for our unparalleled quality, our tiles blend tradition with innovation in both concrete &amp; clay. Dive into a spectrum of designs and colours. Partner with India&#39;s roofing paragon for durability &amp; aesthetics.</p>

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
