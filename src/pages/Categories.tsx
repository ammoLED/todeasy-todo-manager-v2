import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import Category from "components/Category"
import { useTypedSelector } from "hooks"
import { changePageName } from "store/actions/appActions"

const Categories: React.FC = () => {

    const dispatch = useDispatch()
    const categories = useTypedSelector(state => state.categories.all)

    useEffect(() => {
        dispatch(changePageName({ currentPageName: "Categories" }))
    })

    return (
        <div className="categories-list">
            {categories.map(category => {
                return <Category category={category} key={category.title} />
            })}
        </div>
    )
}

export default Categories
