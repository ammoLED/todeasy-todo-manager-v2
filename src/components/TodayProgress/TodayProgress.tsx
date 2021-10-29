import "./TodayProgress.scss";
import React, { useState, useEffect, useRef } from "react";

import { useTodayTodos } from "hooks";

interface CSSStyleDeclarationWithR extends CSSStyleDeclaration {
    r: string;
}

const TodayProgress: React.FC = () => {

    const [ progressLength, setProgressLength ] = useState(0)
    const progressRef = useRef() as React.MutableRefObject<SVGCircleElement> 
    const todosToday  = useTodayTodos()

    const completedPercent = todosToday.filter(todo => todo.completed).length / todosToday.length * 100 
    const offset           = progressLength - completedPercent / 100 * progressLength

    useEffect(() => {
        updateProgressLength()

        window.addEventListener("resize", updateProgressLength)

        return () => {
            window.removeEventListener("resize", updateProgressLength)
        }        
    })

    function updateProgressLength() {
        /*
            !WARNING:
            Hook will get current value of "r" then set it on TodayProgress variable scope.
            This is my solution to problem with adaptation of progress circle (changing SVG width / hight).
            So on CSS media queries you can change just one variable (--canvas-size)
            but script that calculates progressLength will stay OK as well as visual part of circle
            
            P.S. I dont know if it's good solution, would be glad if you said me :)
        */
        const progressComputedStyles = window.getComputedStyle(progressRef.current) as CSSStyleDeclarationWithR
        const progressRadius         = +progressComputedStyles.r.replace(/px/, '')

        setProgressLength( 2 * Math.PI * progressRadius )        
    }

    return (
        <div className="today-progress">
            <svg className="today-progress__circle">
                <circle 
                    className="today-progress__circle-layout"
                    style={{
                        strokeDasharray:  `${progressLength} ${progressLength}`,
                    }}
                />

                <circle 
                    className="today-progress__circle-progress"
                    ref={progressRef} 
                    style={{
                        strokeDasharray:  `${progressLength} ${progressLength}`,
                        strokeDashoffset: offset
                    }}
                />
            </svg>

            <p className="today-progress__percent">
                {completedPercent}%
            </p>
        </div>
    )
}

export default TodayProgress