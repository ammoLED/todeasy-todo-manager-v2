import React from "react"
import { Todo as ITodo } from "types"

interface Props {
    todo: ITodo
}

const Todo: React.FC<Props> = ({ todo }) => {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <div>{todo.completed ? <p>"Completed"</p> : <p>"Not Completed"</p>}</div>
        </div>
    )
}

export default Todo
