import React from 'react'
import { Task as ITask } from 'types'

interface TaskProps {
    task: ITask
}
const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <div>
            {task.title}
        </div>
    )
}

export default Task
