import React from "react"
import { TransitionGroup, CSSTransition }  from "react-transition-group"

import "./TaskList.scss"
import Task from "components/Task"
import { Category } from "types"
import TaskAdd from "components/TaskAdd"

interface Props {
    category: Category
}

const TaskList: React.FC<Props> = ({ category }) => {

    const classesAnim = {
        enter: "task-enter",
        exit: "task-exit"
    }
    
    return (
        <TransitionGroup className="task-list">
            {category.tasks.map(task => {

                return (
                    <CSSTransition 
                        timeout={300}
                        classNames={classesAnim}
                        key={task.id}  
                    >
                        <Task 
                            task={task} 
                            categoryIco={category.ico}
                            categoryTitle={category.title}
                        />
                    </CSSTransition>
                )

            })}

            <TaskAdd 
                categoryTitle={category.title} 
                categoryIco={category.ico}
            />
        </TransitionGroup>
    )
}

export default TaskList