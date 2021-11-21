import "./CategoryList.scss"
import React from "react"

import { useTypedSelector } from "hooks"
import Category from "components/Category"

const CategoryList: React.FC = () => {

    const categories = useTypedSelector(state => state.categories)
    
    return (
        <div className="category-list">
            {categories.map(category => {

                return <Category category={category} key={category.title}/>            
                
            })}
        </div>
    )
}

export default CategoryList