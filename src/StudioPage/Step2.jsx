import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Tag from "../Components/Tag";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Step2() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const navigate = useNavigate();
  const Previous = useNavigate();
  return (
    <div id="Step-All-StudioPage">
      <Header />
      <Banner />
      <Tag />
      <div id="StudioPage-Step-2"></div>
      <div id="Content">
        <h1 id="Shift" className="Content-h1">Select Fabric for Formal Shirt</h1>
        <h3 className="Content-h3">Choose Fabric</h3>
        <div id="Carousel">
          <Slider {...settings}>
            <div>
              <div className="StudioPage-2-img-slide img-a"><div><h1>BROCADE SILK</h1></div></div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-b"><div><h1>CHINNAMON CHIFFON</h1></div></div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-c"><div><h1>CORDURY</h1></div></div>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/500x250?text=Slide+4"
                alt="Slide 4"
              />
            </div>
          </Slider>
        </div>
        <h3 className="Content-h3">Choose Pattern</h3>
        <div id="Carousel">
          <Slider {...settings}>
            <div>
              <div className="StudioPage-2-img-slide img-a"><div><h1>BROCADE SILK</h1></div></div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-b"><div><h1>CHINNAMON CHIFFON</h1></div></div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-c"><div><h1>CORDURY</h1></div></div>
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
      <div className="Buttons">
      <button id="previous" onClick={() => Previous("/")}>
        Previous
      </button>
      <button id="next" onClick={() => navigate("/step3")}>
        Next
      </button>
      </div>
      <Footer />
    </div>
  );
}
export default Step2;
