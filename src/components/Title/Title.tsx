import React from "react"

import { TextAccent, TextColor } from "types/Text"

interface Props {
    textColor?: TextColor
    textAccent?: Exclude<TextAccent, "last">
    classnames?: string
}

const Title: React.FC<Props> = ({ textColor = "black", textAccent = "second", classnames, children }) => {

    return (
        <div className={`${classnames || ""} title`}>
            <h1 className={`title__text text-color_${textColor} text-accent_${textAccent}`}> 
                {children} 
            </h1> 
        </div>
    )

}

export default Title
