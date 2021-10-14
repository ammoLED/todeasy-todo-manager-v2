import React from "react";
import { Link } from "react-router-dom";

import { default as ICategory } from "types/Category";
import { CATEGORIES_ROUTE } from "pages/routes";

interface CategoryProps {
    category: ICategory
}

const Category: React.FC<CategoryProps> = ({category}) => {

    const routePath = `${CATEGORIES_ROUTE}/${category.title}`

    return (
        <Link to={routePath} key={category.title}>
            {category.title}
        </Link>
    )
}

export default Category
