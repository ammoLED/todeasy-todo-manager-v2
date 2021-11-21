import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks";
import { setPageName } from "store/actions/appActions";
import TaskList from "components/TaskList";

const CategoryTodos: React.FC = () => {

    const dispatch   = useDispatch()
    const categories = useTypedSelector(state => state.categories)
    const params     = useParams<{categoryTitle: string}>()
    
    const category = categories.find(category => category.title === params.categoryTitle)

    useEffect(() => {
        dispatch(setPageName({ pageName: category!.title })) 
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <section aria-label="todo-list">
            <TaskList category={ category! } />
        </section>
    )
}

export default CategoryTodos
