import "./Category.scss"
import React from 'react'
import { Link } from 'react-router-dom'

import { Category as ICategory } from 'types'

interface Props {
    category: ICategory
}

const Category: React.FC<Props> = ({ category }) => {

    const styles = {
        background: `linear-gradient(
            135deg, ${category.gradient?.startColor || "#fff"} 0%, 
            ${category.gradient?.endColor || "#3423"} 100%
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
            
            <h2 className="category__title">
                {category.title}
            </h2>

            <p className="category__description">
                {category.todos.length} Tasks
            </p>
        </Link>
    )
}

export default Category
