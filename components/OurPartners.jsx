"use client"
import React from 'react';
import Slider from 'react-slick'; // Importing react-slick

function OurPartners() {
  // Slider settings for infinite loop and visible 6 images
  const settings = {
    infinite: true, // Infinite loop
    slidesToShow: 6, // Show 6 images at once
    slidesToScroll: 1, // Scroll 1 image at a time
    autoplay: true, // Automatically play the carousel
    autoplaySpeed: 2000, // Time between each slide (in ms)
    responsive: [
      {
        breakpoint: 1200, // For medium screens (1200px and below)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // For smaller screens (768px and below)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // For mobile screens (480px and below)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320, // For very small screens (320px and below)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="our-partners">
      <div className="row">
        <div className="section__title-wrapper text-center mb-55 mb-xs-40">
          <h2 className="section__title title-animation">OUR PARTNERS</h2>
        </div>
      </div>
      <div className="our-partners__grid">
        <Slider {...settings}>
          <img src="/assets/imgs/logo/1.png" alt="Partner 1" />
          <img src="/assets/imgs/logo/2.png" alt="Partner 2" />
          <img src="/assets/imgs/logo/3.png" alt="Partner 3" />
          <img src="/assets/imgs/logo/4.png" alt="Partner 4" />
          <img src="/assets/imgs/logo/5.png" alt="Partner 5" />
          <img src="/assets/imgs/logo/6.png" alt="Partner 6" />
          <img src="/assets/imgs/logo/7.png" alt="Partner 1" />
          <img src="/assets/imgs/logo/8.png" alt="Partner 2" />
          <img src="/assets/imgs/logo/9.png" alt="Partner 3" />
          <img src="/assets/imgs/logo/10.png" alt="Partner 4" />
          <img src="/assets/imgs/logo/11.png" alt="Partner 5" />
          <img src="/assets/imgs/logo/12.png" alt="Partner 6" />
          <img src="/assets/imgs/logo/13.png" alt="Partner 4" />
          <img src="/assets/imgs/logo/14.png" alt="Partner 5" />
          <img src="/assets/imgs/logo/15.png" alt="Partner 6" />
          <img src="/assets/imgs/logo/16.png" alt="Partner 5" />
          <img src="/assets/imgs/logo/17.png" alt="Partner 6" />
        </Slider>
      </div>
    </section>
  );
}

export default OurPartners;
