import React from "react"

const convertUnixToDate = (unix: number) => {

    const date   = new Date(unix)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    const dd     = date.getDate()
    const mm     = months[date.getMonth()]
    const yy     = date.getFullYear()

    return `${dd} ${mm} ${yy}`
}

export default convertUnixToDate
