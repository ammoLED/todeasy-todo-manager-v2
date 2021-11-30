import React, { useEffect, useRef } from "react";

import "./Progress.scss";

interface CSSStyleDeclarationWithRadius extends CSSStyleDeclaration {
    r: string; // radius
}

interface Props<ArrayType> {
    array: ArrayType
    field: ArrayType extends (infer T)[] ? keyof T : never; 
    /*
        array: Task[]
        field: keyof Task
    */
}

const Progress = <ArrayType extends any[],> ({ array, field }: Props<ArrayType>): React.ReactElement => {

    const circumference = useRef(0)
    const layoutRef     = useRef() as React.MutableRefObject<SVGCircleElement> 
    const progressRef   = useRef() as React.MutableRefObject<SVGCircleElement> 
    // Look code below to understand why I decide to use refs for this Component
    
    const allowedItems = array.filter(item => item[field]).length
    const completedPercent = Math.floor(allowedItems / array.length * 100) || 0 // Need this check cuz 0/0 = NaN

    
    useEffect(() => {
        calcAndUpdateStyles()

        window.addEventListener("resize", calcAndUpdateStyles)
        
        return () => {
            window.removeEventListener("resize", calcAndUpdateStyles)
        }        

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(updateStyles, [completedPercent])
    
    function calcCircumference() {
        /*
            !WAeRNING:
            Function will calculate circumferece of SVG by getting "r" (radius) value from computed styles.
            This is my solution to problem with adaptation of progress circle (changing SVG width and height).
            So in CSS media queries you can change just one variable (--canvas-size)
            but script that calculates circumference will stay OK as well as visual part of circle
            
            P.S. I dont know if it's good solution, would be glad if you said me :)
        */
       const computedStyles = window.getComputedStyle(layoutRef.current) as CSSStyleDeclarationWithRadius
       const radius         = parseInt(computedStyles.r.replace(/px/, ''), 10)
    
       circumference.current = 2 * Math.PI * radius  

    }

    function updateStyles() {

        const strokeDashoffset = circumference.current - completedPercent / 100 * circumference.current

        layoutRef.current.style.strokeDasharray    = `${circumference.current} ${circumference.current}`
        progressRef.current.style.strokeDasharray  = `${circumference.current} ${circumference.current}`
        progressRef.current.style.strokeDashoffset = `${strokeDashoffset}`
        
    }

    function calcAndUpdateStyles() {

        calcCircumference()
        updateStyles()

    }
    
    return (
        <div className="progress">
            <svg className="progress__circle">
                <circle 
                    ref={layoutRef}
                    className="progress__circle-layout"
                />

                <circle 
                    ref={progressRef}
                    className="progress__circle-progress"
                />
            </svg>

            <p className="progress__percent">
                {completedPercent}%
            </p>
        </div>
    )
}

export default Progress