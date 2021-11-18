import React, { useState, useEffect, useRef } from "react";

import "./CategoryProgress.scss";
import { Category } from "types";

interface CSSStyleDeclarationWithRadius extends CSSStyleDeclaration {
    r: string; // radius
}

interface Props {
    category: Category
}

const CategoryProgress: React.FC<Props> = ({ category }) => {

    const [ progressLength, setProgressLength ] = useState(0)
    const progressRef = useRef() as React.MutableRefObject<SVGCircleElement> 

    const completedTasks   = category.tasks.filter(task => task.completed)
    const completedPercent = completedTasks.length / category.tasks.length * 100 
    const offset           = progressLength - completedPercent / 100 * progressLength

    useEffect(() => {
        updateProgressLength()

        window.addEventListener("resize", updateProgressLength)

        return () => {
            window.removeEventListener("resize", updateProgressLength)
        }        
    }, [])

    function updateProgressLength() {
        /*
            !WARNING:
            Hook will get current value of "r" then set it on CategoryProgress variable scope.
            This is my solution to problem with adaptation of progress circle (changing SVG width / hight).
            So on CSS media queries you can change just one variable (--canvas-size)
            but script that calculates progressLength will stay OK as well as visual part of circle
            
            P.S. I dont know if it's good solution, would be glad if you said me :)
        */
        const progressComputedStyles = window.getComputedStyle(progressRef.current) as CSSStyleDeclarationWithRadius
        const radius                 = parseInt(progressComputedStyles.r.replace(/px/, ''), 10)

        setProgressLength( 2 * Math.PI * radius )        
    }

    return (
        <div className="category-progress">
            <svg className="category-progress__circle">
                <circle 
                    className="category-progress__circle-layout"
                    style={{
                        strokeDasharray:  `${progressLength} ${progressLength}`,
                    }}
                />

                <circle 
                    className="category-progress__circle-progress"
                    ref={progressRef} 
                    style={{
                        strokeDasharray:  `${progressLength} ${progressLength}`,
                        strokeDashoffset: offset
                    }}
                />
            </svg>

            <p className="category-progress__percent">
                {Math.floor(completedPercent)}%
            </p>
        </div>
    )
}

export default React.memo(CategoryProgress)