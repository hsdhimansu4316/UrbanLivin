import React from 'react'

function TopNav() {
  return (
    <>
     <div id="header-sticky" className="header__area header-3">
       <div className="header__top d-none d-xl-block">
        <div className="container">
          <div className="row g-24">
            <div className="col-xxl-6 col-8">
              <div className="last_no_bullet">
                <ul className="header__top-menu d-flex ">
                  <li>
                    <a href="https://maps.app.goo.gl/V5BeTXNv6WAniBN58">
                      <span>
                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3.45V13.25L5.45455 10.8L10.5455 13.25L15 10.8V1L10.5455 3.45L5.45455 1L1 3.45Z" stroke="#906E50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5.4541 1V10.8" stroke="#906E50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.5459 3.44922V13.2492" stroke="#906E50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span> 
                      1058 Helton Ave, Stky Berlin.
                    </a>
                  </li>
                  <li>
                    <a href="mailto:rrdevs@artima.com">
                      <span>
                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.4 1H13.6C14.37 1 15 1.63984 15 2.42188V10.9531C15 11.7352 14.37 12.375 13.6 12.375H2.4C1.63 12.375 1 11.7352 1 10.9531V2.42188C1 1.63984 1.63 1 2.4 1Z" stroke="#906E50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 2.42188L8 7.39844L1 2.42188" stroke="#906E50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>                                                
                      </span>
                      rrdevs@artima.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:123534352555">
                      <span>
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.67161 3.67583C10.3263 3.80331 10.9279 4.12286 11.3995 4.59359C11.8712 5.06432 12.1913 5.66481 12.319 6.3182M9.67161 1C11.0317 1.15081 12.3 1.75871 13.2683 2.72391C14.2365 3.6891 14.8472 4.95421 15 6.31151M14.3298 11.6498V13.6567C14.3305 13.843 14.2923 14.0274 14.2175 14.1981C14.1427 14.3688 14.033 14.522 13.8955 14.648C13.758 14.7739 13.5956 14.8698 13.4187 14.9295C13.2419 14.9892 13.0546 15.0113 12.8686 14.9946C10.8062 14.7709 8.8251 14.0675 7.08449 12.9409C5.46509 11.9138 4.09211 10.5434 3.06307 8.92713C1.93035 7.18196 1.22544 5.19502 1.00544 3.12728C0.988691 2.94229 1.01072 2.75585 1.07012 2.57982C1.12952 2.4038 1.22499 2.24204 1.35046 2.10486C1.47592 1.96768 1.62863 1.85808 1.79886 1.78303C1.96909 1.70798 2.15312 1.66913 2.33921 1.66896H4.34993C4.6752 1.66576 4.99053 1.78072 5.23716 1.99242C5.48379 2.20411 5.64488 2.49809 5.6904 2.81956C5.77527 3.4618 5.93266 4.0924 6.15957 4.69933C6.24974 4.93876 6.26926 5.19898 6.2158 5.44915C6.16235 5.69932 6.03816 5.92895 5.85796 6.11083L5.00676 6.9604C5.96088 8.63517 7.35021 10.0218 9.02818 10.9741L9.87939 10.1246C10.0616 9.94471 10.2917 9.82076 10.5423 9.76741C10.793 9.71405 11.0537 9.73353 11.2936 9.82354C11.9017 10.05 12.5335 10.2071 13.177 10.2918C13.5025 10.3376 13.7999 10.5013 14.0124 10.7517C14.225 11.0021 14.3379 11.3217 14.3298 11.6498Z" stroke="#906E50" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>                                                
                      </span>
                      +1-2353-4352-555
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-6 col-4">
              <div className="header__top-wrapper d-flex justify-content-end">
                <div className="header__top__lang-select"> 
                  <div className="header__top__lang-select-select">
                    <select id="doctor" style={{display: 'none'}}>
                      <option>English</option>
                      <option>Dr. Paul</option>
                      <option>Dr. Sabbir</option>
                      <option>Dr. Rubel</option>
                    </select>
                  </div>
                </div>
                <ul className="header__top-socail d-flex ">
                  <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="https://twitter.com/"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default TopNav
