import React from 'react'

import { Task as ITask } from 'types'

interface TaskProps {
    todo: ITask
}

const Task: React.FC<TaskProps> = ({ todo }) => {
    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.descr}</p>
            <div>{`${todo.completed ? 'Completed' : 'Not Completed'}`}</div>
        </div>
    )
}

export default Task
