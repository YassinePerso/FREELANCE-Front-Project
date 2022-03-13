import React from "react";
import '../Styles/Slider.css';
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
    </button>
  );
}