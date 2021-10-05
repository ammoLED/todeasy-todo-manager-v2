import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SectionsTodos = () => {

    const params = useParams()

    return (
        <div>
            This section named: <strong>{params.sectionTitle}</strong>

            <br/>
            <Link to={'/'}>Return</Link>
        </div>
    )
}

export default SectionsTodos
