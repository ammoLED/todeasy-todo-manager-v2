import React, { useState } from "react"

import "./TaskAdd.scss";
import TaskAddActive from "./TaskAddActive";

interface Props {
    categoryTitle: string
    categoryIco?: string
}

const TaskAdd: React.FC<Props> = ({ categoryTitle, categoryIco = "cubes" }) => {

    const [ isActive, setActive ] = useState(false)

    const view = isActive ? <TaskAddActive categoryTitle={categoryTitle} categoryIco={categoryIco} /> : <i className="fa fa-plus"/>

    return (
        <div 
            className={`task-add ${isActive ? "task-add_active" : ""}`} 
            onClick={() => setActive(true)}
        >
            {view}
        </div>
    )
    
}

export default TaskAdd