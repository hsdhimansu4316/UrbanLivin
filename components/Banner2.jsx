"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS

function Banner2() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <section className="banner overflow-hidden">
        {/* Banner Section */}
        <div className="banner__item banner__space">
          <div
            className="banner__item-bg"
            style={{
              backgroundImage: 'url(/assets/imgs/banner-1/banner1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed', // This keeps the background image fixed when scrolling
              height: '100vh',
            }}
          />
          <div className="container">
            <div className="" />
            <div className="" />
            <div className="row">
              <div className="col-12">
                <div className="banner__item-content" data-aos="fade-up" data-aos-delay="200">
                  <div className="banner__item-wrapper">
                    <h1 className="banner__item-title rr-fw-bold color-white">
                    Living with <br /> Urban Livin. 
                    </h1>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Banner2;
