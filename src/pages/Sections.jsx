import React from 'react'
import { Link } from 'react-router-dom'

import useTypedSelector from 'hooks/useTypedSelector'

const Sections = () => {

    const sections = useTypedSelector(state => state.sections.all)

    return (
        <div>
            {sections.map(section => {
                return (
                    <Link to={section.title} key={section.title}>
                        {section.title}
                    </Link>
                )
            })}
        </div>
    )
}

export default Sections
