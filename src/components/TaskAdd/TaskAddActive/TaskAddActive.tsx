import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"


import GradientSelector from "components/GradientSelector"
import { Gradient } from "types"
import { addTask } from "store/actions/tasksActions";
import InlineEdit from "components/InlineEdit"

interface Props {
    categoryTitle: string
    categoryIco?: string
}


const TaskAddActive: React.FC<Props> = ({ categoryTitle, categoryIco }) => {
    
    const dispatch = useDispatch()

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ gradient, setGradient ] = useState<Gradient>({
        id: "__NOT_SELECTED__",
        startColor: "#2D3149",
        endColor: "#656D99"
    })

    function handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        dispatch(addTask({
            categoryTitle,
            task: {
                id: uuid(),
                title,
                description,
                gradient,
                completed: false
            }
        }))
    }

    console.log("%cRendered <TaskAddActive/>", `color: ${gradient.startColor}`);

    return (
        <>
            <div className="task-add__ico ico_small">
                <i className={`fa fa-${categoryIco}`}/>
            </div>

            <form className="task-add__info" onSubmit={handleNewTask}>
                <InlineEdit 
                    className="item-title"
                    value={title} 
                    setValue={setTitle}
                    fontSize={16}
                />

                <InlineEdit 
                    className="item-description"
                    value={description} 
                    setValue={setDescription}
                    fontSize={16}
                />

                <GradientSelector 
                    selectedGradient={gradient.id} 
                    onSelectGradient={setGradient}
                />

                <button className="task-add__submit" type="submit">Done</button>
            </form>
        </>
    )
}

export default TaskAddActive