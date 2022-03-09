import React, {useState, useEffect, useRef} from 'react'
import '../Styles/Accordion.css';
import Chevron from '../images/chevron.png'

export default function Accordion(props) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>{props.name}</span>
                <img 
                className={toggle && "active"}
                src={Chevron} alt="icon"/>
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    {props.description}
                    {props.composition}
                    {props.contenance}
                    {props.taux}
                    {props.gout}
                    {props.utilisation}
                    {props.Provenance}
                </p>
            </div>
            
        </div>
    )
}