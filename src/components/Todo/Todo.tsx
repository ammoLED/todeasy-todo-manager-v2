import React from "react"
import { useParams } from "react-router"
import { useDispatch } from "react-redux"
import moment from "moment"

import "./Todo.scss"
import { ReactComponent as SVGComplete } from "assets/svg/Complete.svg"
import { Todo as ITodo } from "types"
import { setTodoCompleted } from "store/actions/todosActions"

interface Props {
    todo: ITodo
    categoryIco?: string
}

const Todo: React.FC<Props> = ({ todo, categoryIco }) => {    
   
    const params = useParams<{categoryTitle: string}>()
    const dispatch = useDispatch()

    const styles = {
        background: `linear-gradient(
            135deg, ${todo.gradient?.startColor || "#fff"} 0%, 
            ${todo.gradient?.endColor || "#3423"} 100%
        )`
    }

    function onSetTodoCompleted() {
        dispatch(setTodoCompleted({
            categoryTitle: params.categoryTitle,
            todoId: todo.id
        }))
    }

    return (
        <div 
            className={`todo ${todo.completed ? "todo_completed" : ""}`}
            style={styles} 
        >
            <div className="todo__ico ico_small">
                <i className={`fa fa-${categoryIco}`}/>
            </div>
            
            <div className="todo__info">
                <h2 className="todo__title">{todo.title}</h2>
                <p className="todo__description">{todo.description}</p>
                <p>{moment(todo.expiresAt).format("DD MMM [-] hh:mm A")}</p>
            </div>

            <div className="todo__interact">
                <button onClick={onSetTodoCompleted}>
                    <SVGComplete/>
                </button>
            </div>
        </div>
    )
}

export default Todo
