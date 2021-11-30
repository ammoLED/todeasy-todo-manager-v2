import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"

import InlineEdit from "components/InlineEdit"
import GradientSelector from "components/GradientSelector"
import { Gradient } from "types"
import { addTask } from "store/actions/tasksActions";

interface Props {
    categoryTitle: string
    categoryIco?: string
}

interface Validation {
    title: undefined | string
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
    const [ validation, setValidation ] = useState<Validation>({
        title: undefined
    })

    function handleCreateTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!title) {
            return setValidation(state => ({
                ...state, 
                title: "Title is required"
            }))
        }

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

        clearInputs()
    }

    function clearValidationError(key: keyof Validation) {
        setValidation(state => ({
            ...state,
            [key]: undefined
        }))
    }

    function clearInputs() {
        setTitle("")
        setDescription("")
    }

    console.log("%cRendered <TaskAddActive/>", `color: ${gradient.startColor}`);

    return (
        <>
            <div className="task-add__ico ico_small">
                <i className={`fa fa-${categoryIco}`}/>
            </div>

            <form className="task-add__info" onSubmit={handleCreateTask}>
                <InlineEdit 
                    className="task-add__info-title fz-secondary"
                    placeholder="Title"
                    value={title} 
                    setValue={setTitle}
                    error={validation.title}
                    clearError={() => clearValidationError("title")}
                    fontSize={16}
                />

                <InlineEdit 
                    className="task-add__info-description fz-secondary"
                    placeholder="Description"
                    value={description} 
                    setValue={setDescription}
                    fontSize={16}
                />

                <GradientSelector 
                    className="task-add__info-gradient"
                    selectedGradient={gradient.id} 
                    onSelectGradient={setGradient}
                />

                <button className="task-add__submit btn fz-secondary" type="submit">Done</button>
            </form>
        </>
    )
}

export default TaskAddActive