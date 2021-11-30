import "./Category.scss"
import React from 'react'
import { Link } from 'react-router-dom'

import { Category as ICategory } from 'types'
import { defaultGradient } from "constants/defaultValues"

interface Props {
    category: ICategory
}

const Category: React.FC<Props> = ({ category }) => {

    const styles = {
        background: `linear-gradient(
            -20deg, 
            ${category.gradient?.startColor || defaultGradient.startColor} 0%, 
            ${category.gradient?.endColor   || defaultGradient.endColor} 100%
        )`
    }

    return (
        <Link className="category" to={category.title} style={styles} >
            <div className="category__ico">
                <i 
                    data-ico={category.ico || "cubes"} 
                    className={`ico fa fa-${category.ico || "cubes"}`}
                />
            </div>
            
            <h2 className="category__title fz-primary">
                {category.title}
            </h2>

            <p className="category__description fz-secondary">
                {category.tasks.length} Tasks
            </p>
        </Link>
    )
}

export default Category
