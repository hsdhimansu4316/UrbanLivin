"use client"
import React from "react";
import Slider from "react-slick"; // Importing react-slick for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeatureVideo() {
  const settings = {
    infinite: true, // Infinite loop
    slidesToShow: 1, // Show only 1 image at once
    slidesToScroll: 1, // Scroll 1 image at a time
    autoplay: false, // Automatically play the carousel
    autoplaySpeed: 3000, // Time between each slide (in ms)
    speed: 500, // Speed of the sliding transition
    pauseOnHover: true, // Pause on hover
    dots:true,
  };

  return (
    <section className="feature-video" style={{ position: "relative" }}>
      <div
        className="feature-video__background"
        style={{
          backgroundImage: "url('/assets/imgs/projects/prbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment:"fixed",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1, // To keep the background behind content
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Color overlay
          }}
        />
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4">
            <Slider {...settings}>
              <div>
                <img src="/assets/imgs/kitchen/kitchen.jpg" style={{height:'395px'}} alt="Feature 1" className="" />
              </div>
              <div>
                <img src="/assets/imgs/roofing/onduline.jpg" style={{height:'395px'}} alt="Feature 2" className="" />
              </div>
              <div>
                <img src="/assets/imgs/doors/md1.png" style={{height:'395px'}} alt="Feature 3" className="" />
              </div>
              <div>
                <img src="/assets/imgs/windows/1.jpg" style={{height:'395px'}} alt="Feature 3" className="" />
              </div>
              <div>
                <img src="/assets/imgs/facade/1.png" style={{height:'395px'}} alt="Feature 3" className="" />
              </div>
              <div>
                <img src="/assets/imgs/railing/railing3.jpg" style={{height:'395px'}} alt="Feature 3" className="" />
              </div>
            </Slider>
          </div>
          <div className="col-lg-8 feature-left8 text-white">
            <h2 className="feature-video__title">PRODUCT SHOWCASE </h2>
            <p className="feature-video__description">
            With world class façade and roofing designs, one of the world’s best system aluminum windows, India’s only CE certified modular railings and an extensive collection of modular kitchens and interior options, we bring you everything you need to transform your house into a home. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureVideo;
