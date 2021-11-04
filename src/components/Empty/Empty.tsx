import React from "react"

interface Props {
    text: string
}

const Empty: React.FC<Props> = ({ text }) => {
    return (
        <div className="empty">
            <h2>{text}</h2>
        </div>
    )
}

export default Empty