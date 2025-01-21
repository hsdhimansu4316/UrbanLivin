"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeatureProject() {
  const sliderRef = useRef(null);

  const projects = [
    { id: 1, image: "barmunda.png", title: "Baramunda Bus Stand", link: "portfolio-details.html" },
    { id: 2, image: "cocunut.png", title: "COCONUT PENINSULA RESORT", link: "portfolio-details.html" },
    { id: 3, image: "khusibhawan.png", title: "Krushi Bhawan", link: "portfolio-details.html" },
    { id: 4, image: "kalinga.png", title: "Kalinga Stadium", link: "portfolio-details.html" },
    { id: 5, image: "kiit.png", title: "KIIT College", link: "portfolio-details.html" },
    { id: 6, image: "esplanade.png", title: "Esplanade", link: "portfolio-details.html" },
    { id: 7, image: "tample.png", title: "Maa Samaleswari Temple", link: "portfolio-details.html" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:true,
    autoplay:true,
    nextArrow: <button className="recent-project__slider__arrow-next">Next</button>,
    prevArrow: <button className="recent-project__slider__arrow-prev">Prev</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getMarginTop = (index) => {
    if (!sliderRef.current) return 0;
    const slider = sliderRef.current.innerSlider;
    const { slidesToShow } = slider.props;

    // Calculate center index dynamically based on visible slides
    const centerIndex = Math.floor(slidesToShow / 2);
    const currentIndex = (slider.state.currentSlide + index) % projects.length;

    return currentIndex === centerIndex ? "20px" : "10";
  };

  return (
    <section className="recent-project" style={{ padding: "55px 15px", backgroundColor: "#FFFFFF" }}>
      <h2 className="section__title title-animation text-center" style={{ color: "#8dc244", marginBottom: "40px" }}>
        FEATURE PROJECTS
      </h2>
      <Slider ref={sliderRef} {...settings} className="recent-project__active">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="recent-project__item"
            style={{
              margin: "0 10px",
              marginTop: getMarginTop(index), // Dynamically apply margin-top to the center slide
              transition: "margin-top 0.3s ease", // Smooth transition effect
            }}
          >
            <div className="recent-project__media">
              <img
                src={`./assets/imgs/projects/${project.image}`}
                alt={project.title}
                style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }}
              />
            </div>
            <div className="recent-project__text" style={{ textAlign: "center", marginTop: "10px" }}>
              <h6 style={{ fontSize: "16px", fontWeight: "bold", textTransform:"uppercase" }}>{project.title}</h6>
              {/* <a href={project.link} style={{ color: "#8dc244", textDecoration: "underline" }}>
                Explore More
              </a> */}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default FeatureProject;
