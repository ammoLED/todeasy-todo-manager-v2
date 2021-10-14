import React from 'react'
import { Redirect } from 'react-router'

import { CATEGORIES_ROUTE } from './routes'

const NotFound: React.FC = () => {
    return (
        <Redirect to={CATEGORIES_ROUTE} />
    )
}

export default NotFound
