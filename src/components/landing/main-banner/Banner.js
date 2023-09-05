
import React, { useState } from "react";
import "./banner.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

const Banner = () => {
  const [routes, setRoutes] = useState(0);
  const [open, setOpen] = useState(false);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];


  return (
    <>
      <section className="main-banner ">
        <div className={open ? "sidebar sidebar-mobile-open" : "sidebar sidebar-mobile-close"}>
          <div className="upper-logo">
            <a href="/"><img src="\logo.svg" alt="img" className="img-fluid" /></a>
          </div>
          <div className="bottom-links">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_341_2202)">
                  <path d="M6.51511 4.26562H11.7662C12.5182 2.58028 13.8405 1.21748 13.8516 1.19531C14.0625 0.998438 14.1187 0.703125 14.0062 0.435938C13.8938 0.16875 13.6407 0 13.3594 0C12.0938 0 11.4047 0.45 10.8563 0.815625C10.3641 1.15312 9.98442 1.40625 9.14067 1.40625C8.29692 1.40625 7.91723 1.15312 7.42504 0.815625C6.87661 0.45 6.18754 0 4.92192 0C4.64067 0 4.38754 0.16875 4.27504 0.435938C4.16254 0.703125 4.21879 0.998438 4.42973 1.19531C4.44084 1.21748 5.76314 2.58028 6.51511 4.26562Z" fill="#EAB721" />
                  <path d="M14.1094 21.8906V23.2969C14.1094 23.6852 14.4242 24 14.8125 24H23.2969C23.6852 24 24 23.6852 24 23.2969V21.8906C24 21.5023 23.6852 21.1875 23.2969 21.1875H14.8125C14.4242 21.1875 14.1094 21.5023 14.1094 21.8906Z" fill="#EAB721" />
                  <path d="M24 19.0781V17.6719C24 17.2836 23.6852 16.9688 23.2969 16.9688H14.8125C14.4242 16.9688 14.1094 17.2836 14.1094 17.6719V19.0781C14.1094 19.4664 14.4242 19.7812 14.8125 19.7812H23.2969C23.6852 19.7812 24 19.4664 24 19.0781Z" fill="#EAB721" />
                  <path d="M14.0203 11.3719C12.6422 10.0219 11.5172 8.87813 11.2922 7.07812H11.9531C12.3469 7.07812 12.6562 6.76875 12.6562 6.375C12.6562 5.98125 12.3469 5.67188 11.9531 5.67188H6.32812C5.93437 5.67188 5.625 5.98125 5.625 6.375C5.625 6.76875 5.93437 7.07812 6.32812 7.07812H6.98906C6.76406 8.87813 5.63906 10.0219 4.26094 11.3719C2.26406 13.3266 0 15.5484 0 20.625C0.028125 22.4813 1.61719 24 3.51562 24H12.7856C12.7069 23.7792 12.6562 23.5444 12.6562 23.2969V17.6719C12.6562 16.5089 13.6027 15.5625 14.7656 15.5625H17.2842C16.4334 13.7391 15.1716 12.5016 14.0203 11.3719ZM9.14062 15.5625C10.3038 15.5625 11.25 16.5087 11.25 17.6719C11.25 18.5873 10.6604 19.3605 9.84375 19.6517V20.4844C9.84375 20.873 9.52927 21.1875 9.14062 21.1875C8.75198 21.1875 8.4375 20.873 8.4375 20.4844V19.6517C7.62084 19.3605 7.03125 18.5873 7.03125 17.6719C7.03125 17.2832 7.34573 16.9688 7.73438 16.9688C8.12302 16.9688 8.4375 17.2832 8.4375 17.6719C8.4375 18.0598 8.75269 18.375 9.14062 18.375C9.52856 18.375 9.84375 18.0598 9.84375 17.6719C9.84375 17.2839 9.52856 16.9688 9.14062 16.9688C7.97747 16.9688 7.03125 16.0225 7.03125 14.8594C7.03125 13.9439 7.62084 13.1708 8.4375 12.8795V12.0469C8.4375 11.6582 8.75198 11.3438 9.14062 11.3438C9.52927 11.3438 9.84375 11.6582 9.84375 12.0469V12.8795C10.6604 13.1707 11.25 13.9439 11.25 14.8594C11.25 15.248 10.9355 15.5625 10.5469 15.5625C10.1582 15.5625 9.84375 15.248 9.84375 14.8594C9.84375 14.4714 9.52856 14.1562 9.14062 14.1562C8.75269 14.1562 8.4375 14.4714 8.4375 14.8594C8.4375 15.2473 8.75269 15.5625 9.14062 15.5625Z" fill="#EAB721" />
                </g>
                <defs>
                  <clipPath id="clip0_341_2202">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Fund
            </a>
          </div>
        </div>
        {
          routes == 0 ? <div className="main-content">
            <div className="nav-section">
              <h6>Fund</h6>
              <button onClick={() => { setRoutes(1) }}>Add Fund</button>
            </div>
            <div className="bottom-div">
              <div className="left-side">
              <ImageGallery items={images} thumbnailPosition="right" />
              </div>
              <div className="right-side">
                <div className="inner-text">
                  <h6>To Buy Properties</h6>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                  <div className="twice-text">
                    <p>Funds Collected</p>
                    <h6>250,130 USDT</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bottom-cards">
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="inner-img">
                  <img src="\assets\dummy.png" alt="img" className="img-fluid" />
                </div>
                <div className="bottom-text">
                  <h6 className="card-head">817 12th Ave N</h6>
                  <div className="inner-text">
                    <p>Offering type</p>
                    <h6 className="bg-set-yellow">Rental Property</h6>
                  </div>
                  <div className="inner-text">
                    <p>Cash return: 7.98%</p>
                    <h6 className="sec-head">Token Price: <span>$50</span></h6>
                  </div>
                </div>
              </div>
            </div> */}
          </div> : routes == 1 ? <section className="add-property">
            <div className="nav-section">
              <h6>Add Fund</h6>
            </div>
            <div className="row">
              <div className="col-xl-8 col-12 p-0 order-2sm" >
                <div className="option-field">
                  <input type="text" placeholder='Fund Name' />
                </div>
                <div className="option-field">
                  <textarea type="text" placeholder='Fund Address' />
                </div>
                <div className="option-field">
                  <input type="number" placeholder='Fund Price' />
                </div>
              </div>
              <div className="col-xl-4 col-12 padd-sm order-1sm">
                <div className="upload-img">
                  <h6>Upload Thumbnail Image</h6>
                  <div className="upload">
                    <img src="\assets\dummy.png" alt="img" className='img-fluid' />
                    <input type="file" className='d-none' id='upload' />
                  </div>
                </div>
                <div className="after-upload">
                  <div className="left">
                    <div className="imgs">
                      <img src="\assets\dummy.png" alt="img" className='img-fluid' />
                    </div>
                    <div className="inner-text">
                      <h6>landscape.jpg</h6>
                      <p>2.4mb</p>
                    </div>
                  </div>
                  <div className="right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M9.69678 20.3027L20.3034 9.69613" stroke="#EAB721" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20.3034 20.3039L9.69678 9.69727" stroke="#EAB721" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="after-upload process-video">
                  <div className="left">
                    <div className="imgs">
                      <img src="\assets\dummy.png" alt="img" className='img-fluid' />
                    </div>
                    <div className="inner-text">
                      <h6>landscape.jpg</h6>
                      <p>2.4mb</p>
                    </div>
                  </div>
                  <div className="right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M23 15C23 19.4183 19.4183 23 15 23C10.5817 23 7 19.4183 7 15C7 10.5817 10.5817 7 15 7C19.4183 7 23 10.5817 23 15ZM9.54111 15C9.54111 18.0149 11.9851 20.4589 15 20.4589C18.0149 20.4589 20.4589 18.0149 20.4589 15C20.4589 11.9851 18.0149 9.54111 15 9.54111C11.9851 9.54111 9.54111 11.9851 9.54111 15Z" fill="url(#paint0_angular_77_9851)" />
                      <defs>
                        <radialGradient id="paint0_angular_77_9851" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(90) scale(8)">
                          <stop stop-color="#EAB721" />
                          <stop offset="1" stop-color="#EAB721" stop-opacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section> : ""
        }

      </section>
     
    </>
  );
};

export default Banner;
