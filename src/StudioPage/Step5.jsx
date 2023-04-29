import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Step5() {
  const navigate = useNavigate();
  const Previous = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
  };
  return (
    <>
      <Header />
      <Banner />
      <Tag />
      <div id="e"></div>
      <div id="Content">
        <h1>Last step, Add detailing to your Item.</h1>
        <h3>Collar style</h3>
        <div className="carousel-collar">
          <Slider {...settings}>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
            </div>
            <div className="carousel__item">
            </div>
            <div className="carousel__item">
            </div>
          </Slider>
        </div>
        <h3>Buttons style</h3>
        <div className="carousel-collar">
          <Slider {...settings}>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
            <div className="carousel__item">
              <div id="collar-img-holder">
                <span className="collar-step">style 1</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <button
        id="previous"
        style={{
          marginTop: "20vh",
        }}
        onClick={() => Previous("/step4a")}
      >
        Previous
      </button>
      <button id="next" onClick={() => navigate("/")}>
        Next
      </button>

      <Footer />
    </>
  );
}
