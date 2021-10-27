import React from "react"

import { useTypedSelector } from "hooks"

const TodayProgress: React.FC = () => {

    const categories = useTypedSelector(state => state.categories.all)

    console.time("Getting today todos")
    const todayDate = new Date()
    const todos = categories.map(category => category.todos)
    const todayTodos = todos.filter(todo => {
        return todo
    })

    console.timeEnd("Getting today todos")
    

    return (
        <>
            
        </>
    )
}

export default TodayProgress