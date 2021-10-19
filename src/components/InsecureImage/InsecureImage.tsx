import React from "react";
import { TextColor } from "types";

import "./InsecureImage.scss";

interface Props {
    src?: string
    alt: string
}

interface Style {
    colorMod: TextColor
    bgMod: TextColor
}

const InsecureImage: React.FC<Props> = ({ src, alt }) => {

    if (src) {
        return <img src={src} alt={alt} />
    }

    const styles: Style[] = [
        {
            colorMod: "blue",
            bgMod: "gray"
        },
        {
            colorMod: "white",
            bgMod: "black"
        }
    ]

    const randomIdx   = Math.floor(Math.random() * styles.length)
    const randomStyle = styles[randomIdx]

    return (
        <div className={`insecure-img background-color_${randomStyle.bgMod} text-color_${randomStyle.colorMod}`}> 
            {alt[0]} 
        </div>
    )

}

export default InsecureImage
