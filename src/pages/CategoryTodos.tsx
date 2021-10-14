import React from "react";
import { Redirect, Link, useParams } from "react-router-dom";

import { CATEGORIES_ROUTE } from "pages/routes";
import { useTypedSelector } from "hooks";

const SectionsTodos: React.FC = () => {

    const { categoryTitle } = useParams<{categoryTitle: string}>()
    const category  = useTypedSelector(
        state => state.categories.all.find(category => category.title === categoryTitle)
    )

    // Redirect on CATEGORIES_ROUTE if Category is not exists
    if (!category) {
        return <Redirect to={CATEGORIES_ROUTE} />
    }

    return (
        <div>
            This section named: <strong>{categoryTitle}</strong>
            {category.todos.map(todo => {
                return (
                    <div className="todo">
                        <h1 className="todo__title">{todo.title}</h1>
                        <div className="completed">{`${todo.completed ? 'Completed' : 'Not Completed'}`}</div>
                    </div>
                )
            })}

            <br/>
            <Link to="/somewhere-not-exist/ok">FUCK OFF</Link>
            <Link to={CATEGORIES_ROUTE}>Return</Link>
        </div>
    )
}

export default SectionsTodos
