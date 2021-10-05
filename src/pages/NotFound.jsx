import React from 'react'
import { Redirect } from 'react-router'

import { SECTIONS_ROUTE } from './routes'

const NotFound = () => {
    return (
        <Redirect to={SECTIONS_ROUTE} />
    )
}

export default NotFound
