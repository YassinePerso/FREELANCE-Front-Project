import React, {useState} from 'react'
import BtnSlider from './BtnSlider'
import '../Styles/Slider.css';
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
            img: "https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/3597031/pexels-photo-3597031.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
    ]



    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
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
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        </div>
    )
}