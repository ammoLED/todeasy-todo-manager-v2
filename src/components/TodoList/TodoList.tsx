import "./TodoList.scss"
import React from "react"
import { TransitionGroup, CSSTransition }  from "react-transition-group"



import Todo from "components/Todo"
import { Category } from "types"

interface Props {
    category: Category
}

const TodoList: React.FC<Props> = ({ category }) => {

    const classesAnim = {
        enter: "todo-enter",
        exit: "todo-exit"
    }
    
    return (
        <TransitionGroup className="todo-list">
            {category.todos.map(todo => {

                return (
                    <CSSTransition 
                        timeout={300}
                        classNames={classesAnim}
                        key={todo.id}  
                    >
                        <Todo 
                            todo={todo} 
                            categoryIco={category.ico}
                            categoryTitle={category.title}
                        />
                    </CSSTransition>
                )

            })}
        </TransitionGroup>
    )
}

export default TodoList