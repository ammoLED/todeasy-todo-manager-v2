import "./TodayProgress.scss";
import React, { useEffect } from "react";
import moment from "moment";

import { Todo } from "types";
import { useTypedSelector } from "hooks"

const TodayProgress: React.FC = () => {

    const categories = useTypedSelector(state => state.categories.all)
    
    let todos: Todo[] = []

    categories.forEach(category => {
        todos = [...todos, ...category.todos]
    })

    const todayDate  = moment().format("DD-MM-YYYY")
    
    // eslint-disable-next-line array-callback-return
    const todayTodos = todos.filter(todo => {

        if (todo.expiresAt) {
            const todoDate = moment(todo.expiresAt).format("DD-MM-YYYY")

            if (todoDate === todayDate) {
                return todo
            }
        }

    })
    

    return (
        <div className="today-progress">
            <svg className="today-progress__circle">
                <circle />
            </svg>

            <p className="today-progress__percent">
                50%
            </p>
        </div>
    )
}

export default TodayProgress