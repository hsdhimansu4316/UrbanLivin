"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

function FeatureProject() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const projects = [
    { id: 1, image: "recent-project-1.jpg", title: "Custom furniture", link: "portfolio-details.html" },
    { id: 2, image: "recent-project-3.jpg", title: "Residential projects", link: "portfolio-details.html" },
    { id: 3, image: "recent-project-5.jpg", title: "Family Apartment", link: "portfolio-details.html" },
    { id: 4, image: "recent-project-4.jpg", title: "Eco-friendly design", link: "portfolio-details.html" },
    { id: 5, image: "recent-project-1.jpg", title: "Residential projects", link: "portfolio-details.html" },
    { id: 6, image: "recent-project-3.jpg", title: "Family Apartment", link: "portfolio-details.html" },
    { id: 7, image: "recent-project-4.jpg", title: "Eco-friendly design", link: "portfolio-details.html" },
  ];

  return (
    <section className="recent-project">
      <div className="container">
        <div className="row mb-60 mb-md-100 justify-content-center align-items-center">
          <div className="col-lg-12">
            <div className="section__title-wrapper mb-20">
              <h2 className="section__title title-animation text-center">FEATURE PROJECTS</h2>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="recent-project__active"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="recent-project__item">
                <div className="recent-project__media">
                  <img src={./assets/imgs/projects/${project.image}} alt={project.title} />
                 
                </div>
                <div className="recent-project__text">
                  <h6>{project.title}</h6>
                  <a href={project.link}>Explore More</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="col-lg-6">
          <div className="recent-project__slider__arrow d-flex justify-content-lg-end justify-content-start">
            <button ref={prevRef} className="recent-project__slider__arrow-prev">
              Prev
            </button>
            <button ref={nextRef} className="recent-project__slider__arrow-next">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureProject; here is the code and /* feature projects......... */

  .recent-project {
    position: relative;
    overflow: hidden;
    background-color: #FFFFFF;
    padding-top: 55px;
    padding-bottom: 55px;
  }
  
  .project-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Adjust gap between images */
    overflow: hidden;
  }
  
  .project-item {
    position: relative;
    width: 300px; /* Adjust size as necessary */
    transition: transform 0.3s ease;
  }
  
  .project-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .project-item .project-info {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
  }
  
  .project-item .project-info a {
    color: #fff;
    text-decoration: underline;
  }
  
  .project-slider .project-item:nth-child(1) {
    transform: scale(1.1);
  }
  
  .project-slider .project-item:nth-child(5) {
    transform: scale(1.1);
  }
  
  .project-slider .project-item:nth-child(2),
  .project-slider .project-item:nth-child(3),
  .project-slider .project-item:nth-child(4) {
    transform: scale(0.9);
  }
  
  /* Ensure responsiveness */
  @media (max-width: 768px) {
    .project-item {
      width: 100%;
    }
  
    .project-slider {
      flex-direction: column;
    }
  
    .project-slider .project-item {
      margin-bottom: 10px;
    }
  }
  
.section__title
{
   color: #8dc244 !important;
}
 here is the css for that  section i want here just use react slick instead of swiper 