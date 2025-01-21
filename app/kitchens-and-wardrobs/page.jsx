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
                <div className="breadcrumb__background" data-background="./assets/imgs/breadcrumb/kitchen.jpg" />
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
                                                <span>Kitchens & Wardrobs</span>
                                            </li>
                                        </ul>
                                    </nav>
                                    <img src="/assets/imgs/icon/kitchen1.png" className="bread-icon" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <section className="about-section" style={{ background: "#080A0B" }}>
                <div className="about-content">
                   
                    <p className="des color-white mb-0 text-white">
                        <i>
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto corrupti eius rerum esse itaque ab fuga omnis <br /> sequi distinctio eaque, dolorum aliquam harum, ipsam tempore tenetur nemo minima! Quos vel eveniet dolorum quae dicta amet! "
                        </i>
                    </p>
                </div>
            </section> */}


            <section className="choose-us mt-4 mb-4  section-space__top overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="choose-us__media m-0">
                                <div className="choose-us__shape rr-upDown">
                                     
                                </div>
                                <img className="wow clip-a-z prd-img" src="/assets/imgs/kitchen/kitchen.jpg" alt="image not found" />

                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="choose-us__content">
                                <div className="section-2__title-wrapper mb-20">
                                    <h2 className="section__title   title-animation">Sleek</h2>                                    
                                   <p className="mb-0">        <img className="wow clip-a-z" src="/assets/imgs/logo/12.png" style={{height:"100px", widows:"100px"}} alt="image not found" /></p>                              
                                </div>
                                <p>At Artima, our mission is to empower businesses like yours to achieve remarkable growth and lasting success. we achieve this through approach that focuses on your unique needs and goals.</p>

                                <a href="https://www.sleekworld.com/modular-kitchens-campaign.html?cid=PS_GA_DM_A&utm_source=Google_Search_Brand&utm_medium=cpc&utm_campaign=Sleek_AlwaysOn_Google&utm_id=Sleek_BH_Brand_East_Exact_FY2425&utm_adgroup=AP_Sleek&utm_term=sleek%20wardrobe%20by%20asian%20paints&utm_term=e-c&gad_source=1&gclid=CjwKCAiAhP67BhAVEiwA2E_9g31gmFheX3GyVYbgeXRf8HZ6rYFAqZfw0WaKyW05hlSAQVcy6PwXghoC3K4QAvD_BwE" target="blank" className="rr-btn">
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
