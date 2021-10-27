import React from 'react'
import { Link } from 'react-router-dom'

import { Category as ICategory } from 'types'

interface Props {
    category: ICategory
}

const Category: React.FC<Props> = ({ category }) => {
    return (
        <Link to={category.title} >
            {category.title}
        </Link>
    )
}

export default Category
