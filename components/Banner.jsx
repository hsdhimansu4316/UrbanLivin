import React from 'react';

function Banner2() {
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
              height: '100vh',
            }}
          />
          <div className="container">
            <div className="banner__item__left-bg" />
            <div className="banner__item__right-bg" />
            <div className="row">
              <div className="col-12">
                <div className="banner__item-content">
                  <div className="banner__item-wrapper">
                    <h1 className="banner__item-title rr-fw-bold color-white">
                      Creating Spaces Through <span>Innovative Design.</span>
                    </h1>
                    {/* <p className="des color-white mb-45 mb-md-30">
                      Welcome to Artima, crafting timeless interiors that tell your story. Discover a world where
                      design meets emotion.
                    </p> */}
                    <a href="about-us.html" className="rr-btn">
                      <span className="btn-wrap">
                        <span className="text-one">About Us</span>
                        <span className="text-two">About Us</span>
                      </span>
                    </a>
                  </div>
                  {/* <div className="banner__item-content-link">
                    <a
                      href="https://www.youtube.com/watch?v=vkew-1KK3Sc"
                      className="popup-video zooming d-flex align-items-center"
                      data-effect="mfp-move-from-top vertical-middle"
                    >
                      <div className="icon">
                        <svg
                          width={34}
                          height={38}
                          viewBox="0 0 34 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M33.656 19.0001L0.598633 37.7624V0.237793L33.656 19.0001Z"
                            fill="#906E50"
                          />
                        </svg>
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        {/* <div className="banner__socail-media">
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://x.com/tweeter">Tweeter</a></li>
            <li><a href="https://dribbble.com/">Dribbble</a></li>
          </ul>
        </div> */}
      </section>
    </>
  );
}

export default Banner2;
