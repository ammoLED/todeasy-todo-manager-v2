import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import moment from "moment"

import "./Task.scss"
import { Task as ITask } from "types"
import { deleteTask, switchTaskCompleted } from "store/actions/tasksActions"
import { defaultGradient } from "constants/defaultValues"

interface Props {
    task: ITask
    categoryTitle: string // For actions
    categoryIco?: string
}

const maxOffset = 150
const minOffset = -150

const Task: React.FC<Props> = ({ task, categoryTitle, categoryIco = "cubes" }) => {    

    const dispatch = useDispatch()

    // Refs for swipe (No need to rerender Component every time)
    const target        = useRef<HTMLDivElement>(null)
    const startX        = useRef<number>(0)
    const offset        = useRef<number>(0)
    const isPointerDown = useRef<boolean>(false)


    function handlePointerDown(e: React.PointerEvent) {
        e.preventDefault()
        if (target.current) {
            
            isPointerDown.current = true
            startX.current        = e.pageX
            
            target.current.style.cursor = "grabbing"
            
        }
    }
    
    function handlePointerMove(e: React.PointerEvent) {
        e.preventDefault()
        if (target.current && isPointerDown.current) {

            offset.current = e.pageX - startX.current
            
            // Delete or Complete task on move
            if (offset.current < minOffset || offset.current > maxOffset) {
                makeDecision()
                setDefaultPosition()
            }
                
            target.current.style.transform = `translateX(${offset.current}px)`

        }
    }
        
    function handlePointerOut() {
        /*
            !WARNING: 
                No need to call @makeDesicion inside PointerOut handler
                while it's calling inside PointerMove handler.

            Effects: 
                Will cause double dispatch when swiping and then releasing pointer fast
        */
        setDefaultPosition()
    }

    function setDefaultPosition() {
        isPointerDown.current = false

        if (target.current) {
            target.current.style.cursor    = "unset"
            target.current.style.transform = "translateX(0px)"
        }
    }
    
    function makeDecision() {
        if (offset.current < minOffset) {
            // Swiped to Left

            console.log('LEFT')
            
            dispatch(deleteTask({
                categoryTitle,
                taskId: task.id
            }))            
        }
        else if (offset.current > maxOffset) {
            // Swiped to Right
            
            dispatch(switchTaskCompleted({
                categoryTitle,
                taskId: task.id
            }))
        }
        
    }
    
    return (
        <div 
            ref={target}
            className={`task ${task.completed ? "task_completed" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerOut={handlePointerOut}
            style={{
                background: `linear-gradient(
                    -20deg, 
                    ${task.gradient?.startColor || defaultGradient.startColor} 0%, 
                    ${task.gradient?.endColor   || defaultGradient.endColor} 100%
                )`
            }} 
        >
            <div className="task__ico ico_small">
                <i className={`fa fa-${categoryIco}`}/>
            </div>
            
            <div className="task__info">
                <h2 className="task__title item-title">
                    {task.title}
                </h2>

                <p className="task__description item-description">
                    {task.description}
                </p>

                <p className="item-description">
                    {moment(task.expiresAt).format("DD MMM [-] hh:mm A")}
                </p>
            </div>
        </div>
    )
}

export default Task
