import React, { useState } from "react";
import "../Styles/Slider.css";



export default function Slider() {


  const dataSlider = [
    {
      id: 1,
      img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1816606/pexels-photo-1816606.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 3,
      img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];


  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = index => {
    setSlideIndex(index)
}

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.img} alt="" />
          </div>
        );
      })}

      <div className="container-dots">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
