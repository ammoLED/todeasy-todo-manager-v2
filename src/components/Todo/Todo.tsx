import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import moment from "moment"

import "./Todo.scss"
import { Todo as ITodo } from "types"
import { deleteTodo, setTodoCompleted } from "store/actions/todosActions"

interface Props {
    todo: ITodo
    categoryTitle: string
    categoryIco?: string
}

const offsetDifficulty = 1

const Todo: React.FC<Props> = ({ todo, categoryIco, categoryTitle }) => {    

    const dispatch = useDispatch()
    // Refs for swipe (We don't need to rerender Component every time)
    const target        = useRef<HTMLDivElement>(null)
    const startX        = useRef<number>(0)
    const offset        = useRef<number>(0)
    const isPointerDown = useRef<boolean>(false)

    function makeDecision() {
        if (offset.current < -20) {
            // Swiped to Left
            
            dispatch(deleteTodo({
                categoryTitle,
                todoId: todo.id
            }))            
        }
        else if (offset.current > 20) {
            // Swiped to Right
            
            if (!todo.completed) {
                dispatch(setTodoCompleted({
                    categoryTitle,
                    todoId: todo.id
                }))
            }
        }
    }


    function handlePointerDown(e: React.PointerEvent) {

        if (target.current) {

            startX.current        = e.pageX
            isPointerDown.current = true

            target.current.style.cursor = "grabbing"

        }

    }

    function handlePointerMove(e: React.PointerEvent) {

        if (target.current && isPointerDown.current) {

            offset.current = (e.pageX - startX.current) / offsetDifficulty

            target.current.style.transform = `translateX(${offset.current}px)`

        }

    }

    function handlePointerGone(e: React.PointerEvent) {

        if (target.current) {
            makeDecision() // Complete or Delete Todo

            isPointerDown.current = false

            target.current.style.cursor    = "unset"
            target.current.style.transform = "translateX(0px)"
        }

    }

    console.log(`RENDERED: Todo "${todo.title}"`)

    return (
        <div 
            ref={target}
            className={`todo ${todo.completed ? "todo_completed" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerGone}
            onPointerLeave={handlePointerGone}
            style={{
                background: `linear-gradient(
                    135deg, ${todo.gradient?.startColor || "#fff"} 0%, 
                    ${todo.gradient?.endColor || "#3423"} 100%
                )`
            }} 
        >
            <div className="todo__ico ico_small">
                <i className={`fa fa-${categoryIco}`}/>
            </div>
            
            <div className="todo__info">
                <h2 className="todo__title">{todo.title}</h2>
                <p className="todo__description">{todo.description}</p>
                <p>{moment(todo.expiresAt).format("DD MMM [-] hh:mm A")}</p>
            </div>
        </div>
    )
}

export default Todo
