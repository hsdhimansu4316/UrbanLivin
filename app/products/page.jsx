"use client"
import React, { useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import About from "@/components/About";


function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);
    return (
        <>
            <Navbar2 />
            <div className="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
                <div className="breadcrumb__background" data-background="./assets/imgs/breadcrumb/page-header-1.png" />
                <div className="container">
                    <div className="breadcrumb__bg-left" />
                    <div className="breadcrumb__bg-right" />
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
                                                <span>Products</span>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <section className="about-section" style={{background:"#080A0B"}}>
      <div className="about-content">
        {/* <h1>Welcome to Our Platform</h1> */}
        <p className='des color-white mb-0 text-white'><i>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto corrupti eius rerum esse itaque ab fuga omnis <br /> sequi distinctio eaque, dolorum aliquam harum, ipsam tempore tenetur nemo minima! Quos vel eveniet dolorum quae dicta amet! "</i></p>
      </div>
    </section>
            <section className="choose-us  section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-up">

                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown">
                                     
                                </div>
                                <img className="wow clip-a-z" src="/assets/imgs/update/about-us-4/about-us.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">

                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title mb-25 title-animation">This Is Product One </h2>
                                </div>
                                <p>At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="contact-us.html" className="rr-btn">
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
                                    <h2 className="section__title mb-25 title-animation">This Is Product One </h2>
                                </div>
                                <p className="text-white">At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="contact-us.html" className="rr-btn">
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
                                <img className="wow clip-a-z" src="/assets/imgs/update/about-us-4/about-us.jpg" alt="image not found" />
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
                                <img className="wow clip-a-z" src="/assets/imgs/update/about-us-4/about-us.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">

                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title mb-25 title-animation">This Is Product One </h2>
                                </div>
                                <p >At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="contact-us.html" className="rr-btn">
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
                                    <h2 className="section__title mb-25 title-animation">This Is Product One </h2>
                                </div>
                                <p className="text-white">At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="contact-us.html" className="rr-btn">
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
                                <img className="wow clip-a-z" src="/assets/imgs/update/about-us-4/about-us.jpg" alt="image not found" />
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
                                <img className="wow clip-a-z" src="/assets/imgs/update/about-us-4/about-us.jpg" alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">

                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title mb-25 title-animation">This Is Product One </h2>
                                </div>
                                <p>At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="contact-us.html" className="rr-btn">
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
