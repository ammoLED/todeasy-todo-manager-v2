import React from "react"

interface Props {
    className?: string
}

const Section: React.FC<Props> = ({ className, children }) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
}

export default Section