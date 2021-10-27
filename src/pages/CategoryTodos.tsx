import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Todo from "components/Todo/Todo";
import { useTypedSelector } from "hooks";
import { changePageName } from "store/actions/appActions";

const CategoryTodos: React.FC = () => {

    const dispatch = useDispatch()
    const params   = useParams<{categoryTitle: string}>()

    const currentCategory = useTypedSelector(state => {

        return state.categories.all.find(category => category.title === params.categoryTitle)

    })

    useEffect(() => {
        dispatch(changePageName({ currentPageName: currentCategory!.title }))
    })
    
    return (
        <div className="category-todos">
            {currentCategory && currentCategory.todos.map(todo => {
                return <Todo todo={todo} />
            })}
        </div>
    )
}

export default CategoryTodos
