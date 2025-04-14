import React from "react";

function OurPartner2() {
  return (
    <section className="our-partners">
      <div className="row">
        <div className="section__title-wrapper text-center mb-40 mb-xs-40">
          <h2 className="section__title title-animation">OUR PARTNERS</h2>
        </div>
      </div>
      <div className="container">
        {/* First Row: 3-3 Grid (4 Images) */}
        <div className="row mb-4">
          <div className="col-6 col-md-3 mb-3">
            <img src="/assets/imgs/logo/16.png" alt="Partner 1" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-3 mb-3">
            <img src="/assets/imgs/logo/4.png" alt="Partner 2" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-3 mb-3">
            <img src="/assets/imgs/logo/12.png" alt="Partner 3" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-3 mb-3">
            <img src="/assets/imgs/logo/13.png" alt="Partner 4" className="img-fluid rounded" />
          </div>
        </div>

        {/* Second Row: 2-2 Grid (5 Images) */}
        <div className="row mb-4 second-row">
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/1.png" alt="Partner 5" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/6.png" alt="Partner 6" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/7.png" alt="Partner 7" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/8.png" alt="Partner 8" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/9.png" alt="Partner 9" className="img-fluid rounded" />
          </div>
        </div>

        {/* Third Row: 2-2 Grid (5 Images) */}
        <div className="row second-row">
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/10.png" alt="Partner 10" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/11.png" alt="Partner 11" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/14.png" alt="Partner 12" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/15.png" alt="Partner 13" className="img-fluid rounded" />
          </div>
          <div className="col-6 col-md-2 mb-3">
            <img src="/assets/imgs/logo/17.png" alt="Partner 14" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartner2;
