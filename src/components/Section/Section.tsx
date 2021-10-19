import React from 'react'

import './Section.scss'

const Section: React.FC = ({children}) => {
    return (
        <section className="section">
            {children}
        </section>
    )
}

export default Section
