import React, { useState, useEffect, useRef } from "react";

import "./Progress.scss";
import { Task } from "types";

interface CSSStyleDeclarationWithRadius extends CSSStyleDeclaration {
    r: string; // radius
}

interface Props {
    tasks: Task[]
}

const Progress: React.FC<Props> = ({ tasks }) => {

    const [ circumference, setCircumference ] = useState(0)
    const progressRef                           = useRef() as React.MutableRefObject<SVGCircleElement> 
    
    const completedPercent   = tasks.filter(task => task.completed).length / tasks.length * 100 

    const offset           = circumference - completedPercent / 100 * circumference
    
    useEffect(() => {
        calculateCircumference() // Will call render 2-nd time on mount for correcting visual part
        
        window.addEventListener("resize", calculateCircumference)
        
        return () => {
            window.removeEventListener("resize", calculateCircumference)
        }        
    }, [])
    
    function calculateCircumference() {
        /*
            !WARNING:
            Function will calculate circumferece of SVG by getting "r" (radius) value from computed styles.
            This is my solution to problem with adaptation of progress circle (changing SVG width and height).
            So in CSS media queries you can change just one variable (--canvas-size)
            but script that calculates circumference will stay OK as well as visual part of circle
            
            P.S. I dont know if it's good solution, would be glad if you said me :)
        */
       const progressComputedStyles = window.getComputedStyle(progressRef.current) as CSSStyleDeclarationWithRadius
       const radius                 = parseInt(progressComputedStyles.r.replace(/px/, ''), 10)
       
       setCircumference( 2 * Math.PI * radius )        
    }
    console.log('Rendered Progress')
    
    return (
        <div className="progress">
            <svg className="progress__circle">

                <circle 
                    className="progress__circle-layout"
                    style={{
                        strokeDasharray:  `${circumference} ${circumference}`,
                    }}
                />

                <circle 
                    className="progress__circle-progress"
                    ref={progressRef} 
                    style={{
                        strokeDasharray:  `${circumference} ${circumference}`,
                        strokeDashoffset: offset
                    }}
                />
            </svg>

            <p className="progress__percent">
                {Math.floor(completedPercent)}%
            </p>
        </div>
    )
}

export default Progress