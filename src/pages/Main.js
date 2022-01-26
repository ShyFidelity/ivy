import "./Main.css";
import HandRose from "../images/handrose.png";
import MainInfo from "../components/MainInfo";
import React, { Component } from "react";


import { render } from "react-dom";
import Plx from "react-plx";


const exampleParallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: -500,
        property: "translateY",
      },
    ],
  },
];

const plxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 40,
  color: "#fff",
  position: "fixed",
  width: "100%",
  height:500,
  flexDirection: "column",
};

const wrapperStyles = {
  position: "relative",
  height: 800,
  overflow: "hidden",
  background:
    "url(https://s3-media0.fl.yelpcdn.com/bphoto/WSSyuhHqLi8E5dCXACuZzg/o.jpg) no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};


const Main = () => {
  return (
    <div  >
      <div className="main-bg" style={{ height: 1200 }}>
        <div style={wrapperStyles}>
          <Plx parallaxData={exampleParallaxData} style={plxStyles}>
            <h1>Welcome to Ivy Nails!</h1>
            <h2>*this page is under construction*</h2>
            <img src= {HandRose} alt="" />


          </Plx>
        </div>
        <MainInfo />
      </div>
    
    </div>
  );
};

export default Main;
