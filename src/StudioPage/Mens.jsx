import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import "./Mens.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function Mens() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div id="Mens-Page">
      <div id="Mens-Banner">
        <div className="IRRESISTIBLE-DEALS">IRRESISTIBLE DEALS</div>
        <div className="discount">
          <sub>*UPTO</sub> <span> 40% OFF</span>
        </div>
        <div className="clearance-sale">
          <span>CLEARANCE SALE</span>
          <div className="pipe"></div>
          <span>CLEARANCE SALE</span>
          <div className="pipe"></div>
          <span>CLEARANCE SALE</span>
        </div>
      </div>
      <div id="Content" style={{ width: "90vw" }}>
        <h3 className="Content-h1 Mens-h1">SHOP BY CATEGORY</h3>
        <div className="carousel-collar">
          <Slider {...settings}>
            <div className="cloth_item">
              <div className="cloth-img-holder t-shirt"></div>
              <span className="cloth-name">T-Shirts</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
          </Slider>
        </div>
      </div>
      <div id="Content" style={{ width: "90vw" }}>
        <div className="carousel-collar">
          <Slider {...settings}>
            <div className="cloth_item">
              <div className="cloth-img-holder t-shirt"></div>
              <span className="cloth-name">T-Shirts</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
          </Slider>
        </div>
      </div>

      {/* ----------------- */}
      <div id="Content" style={{ width: "90vw" }}>
        <h3 className="Content-h1 Mens-h1">SHOP BY OFFER</h3>

        <div className="carousel-collar Discount_30 ">
          <Slider {...settings}>
            <div className="cloth_item dip ">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
            <div className="cloth_item dip">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate ">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
            <div className="cloth_item dip">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
            <div className="cloth_item dip">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
            <div className="cloth_item dip">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* ----------------- */}
      <div id="try-Banner">
        <div className="tagpunch"></div>
        <div className="border"></div>
        <div className="companyBrand Customize">
          <p>Try TailuX Studio Now</p>
          <div className="strt_customizing">Start Customizing</div>
        </div>
      </div>

      {/* ----------------- */}
      <div id="Content_Range">
        <h3 className="Content-Ph3">PREMIUM RANGE OF FABRICS</h3>
        <div className="carousel-collar">
          <Slider
            {...{
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
            }}
          >
            <div>
              <div className="StudioPage-2-img-slide img-a">
                <div>
                  <h1>BROCADE SILK</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-b">
                <div>
                  <h1>CHINNAMON CHIFFON</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-c">
                <div>
                  <h1>CORDURY</h1>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/500x250?text=Slide+4"
                alt="Slide 4"
              />
            </div>
          </Slider>
        </div>
      </div>
      {/* ----------------- */}
      <div id="Content_Range">
        <h3 className="Content-Ph3">YOUR RECENT VISITS</h3>
        <div className="carousel-collar">
          <Slider
            {...{
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
            }}
          >
            <div>
              <div className="StudioPage-2-img-slide img-a">
                <div>
                  <h1>BROCADE SILK</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-b">
                <div>
                  <h1>CHINNAMON CHIFFON</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-c">
                <div>
                  <h1>CORDURY</h1>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/500x250?text=Slide+4"
                alt="Slide 4"
              />
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
}
