import "./TodoList.scss"
import React from "react"

import Todo from "components/Todo"
import { Category } from "types"

interface Props {
    category: Category
}

const TodoList: React.FC<Props> = ({ category }) => {
    return (
        <div className="todo-list">
            {category.todos.map(todo => {

                return (
                    <Todo 
                        todo={todo} 
                        categoryIco={category.ico}
                        key={todo.id}  
                    />
                )

            })}
        </div>
    )
}

export default TodoList