import React from 'react'
import { Link } from 'react-router-dom'

import {default as ICategory} from 'types/Category'

interface CategoryProps {
    category: ICategory
}

const Category: React.FC<CategoryProps> = ({category}) => {
    return (
        <Link to={category.title} key={category.title}>
            {category.title}
        </Link>
    )
}

export default Category
