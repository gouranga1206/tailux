import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';


export default function Step4() {
  const navigate = useNavigate();
  const Previous = useNavigate();
  return (
    <>
      <Header />
      <Banner />
      <Tag />
      <div id="d"></div>
      <div id="Content">
        <h1>Select Size & Fitting</h1>
        <div id="Size-fit">
          <div className="form">
          <div className="user">
          </div>
          <input type="text" name="" id="" placeholder="Type Name here..." style={{
            width: "40%",
            margin: "26vh 9vw",
            position: "absolute",
            marginTop: "23vh",
            marginLeft: "7.5vw", 
            border: "none",
            borderLeft: "1px solid #000",
            fontSize: ".9rem",
          }}/>
          <div className="shirt">
          <form id="User-size" action="">
          <span id="left">
             <label htmlFor="chest">Chest</label>
             <input type="number" id="chest" name="chest"/>
             <label htmlFor="shoulder">Shoulder</label>
             <input type="number" id="shoulder" name="shoulder"/>
             <label htmlFor="waist">Waist</label>
             <input type="number" id="waist" name="waist"/></span>
             <span id="right">
             <label htmlFor="back length">Back Length</label>
             <input type="number" id="backLength" name="back length"/>   
             <label htmlFor="sleeves">Sleeve</label>
             <input type="number" id="sleeves" name="sleeves"/>
             <label htmlFor="neck">Neck</label>
             <input type="number" id="neck" name="neck"/>
             </span>
                       </form>
          </div>
          <div className="pant">
          <form id="User-size" action="">
          <span id="left">
             <label htmlFor="waist">Waist</label>
             <input type="number" id="waist" name="waist"/>
             <label htmlFor="length">Length</label>
             <input type="number" id="length" name="length"/>
             <label htmlFor="inseam">Inseam</label>
             <input type="number" id="inseam" name="inseam"/></span>
             <span id="right">
             <label htmlFor="waist2crotch">Waist to Crotch</label>
             <input type="number" id="waist2crotch" name="waist2crotch"/>   
             <label htmlFor="upperlegwidth">Upper Leg Width</label>
             <input type="number" id="upperlegwidth" name="upperlegwidth"/>
             <label htmlFor="LowerlegWidth">Lower Leg Width</label>
             <input type="number" id="LowerlegWidth" name="LowerlegWidth"/>
             </span>
            </form>
          </div>
             <button type="submit" id="addBtn">Add</button>
             <button type="button" id="clearBtn">Cancle</button>
        </div>


        <video id="video" width={520} height={340} controls >
          <source src="https://www.youtube.com/watch?v=Ki_0iES2cGI"/>

        </video>
        <div className="appoinment">
          <h1>Learn to measure sizes from here</h1>
          <button>VIEW SIZE CHART</button>
          <h4>Did you find this video helpful?</h4>
          <h4 id="bold-text">Not able to measure yourself?</h4>
          <h5>Don't worry. We'll do that for you</h5>
          <button id="book-apointment">BOOK APOINTMENT</button>
        </div>
        </div>
        
     
      </div>
      <button id="previous" onClick={() => Previous("/step3")} style={{
        marginTop: "30vh",
      }}>
        Previous
      </button>
      <button id="next" onClick={() => navigate("/step5")}>
        Next
      </button>
      <Footer />
    </>
  );
}

