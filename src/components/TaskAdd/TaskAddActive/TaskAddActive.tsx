import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"

import InlineEdit from "components/InlineEdit"
import GradientSelector from "components/GradientSelector"
import { Gradient } from "types"
import { addTask } from "store/actions/tasksActions";

// TODO
interface Props {
    categoryTitle: string
    categoryIco?: string
}

const useValid = (value: string, validators?: {}, label?: string) => {

    const [error, setError] = useState('') 

    useEffect(() => {
        validate(value)
    }, [value])

    function validate(value: string) {
        for (let key in validators) {
            switch (key) {
                case "required": {
                    if (!value.trim().length) {
                        return setError(`${label || 'Field'} is required`)
                    }

                    return setError("")
                }
            }
        }
    }

    return { error }

}

const useInput = (initialValue: string, validators?: {}, label?: string) => {

    const [ value, setValue ] = useState(initialValue)
    const { error } = useValid(value, validators, label)

    function onChange( e: React.FormEvent<HTMLInputElement> ) {
        setValue(e.currentTarget.value)
    }

    return { value, onChange, error }
}

const TaskAddActive: React.FC<Props> = ({ categoryTitle, categoryIco }) => {
    
    const dispatch = useDispatch()

    const title = useInput("")
    const description = useInput("")
    const [ gradient, setGradient ] = useState<Gradient>({
        id: "__NOT_SELECTED__",
        startColor: "#2D3149",
        endColor: "#656D99"
    })

    function handleCreateTask(e: React.FormEvent<HTMLFormElement>) {
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

        clearInputs()
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
                    validError={title.valid}
                />

                <InlineEdit 
                    className="task-add__info-description fz-secondary"
                    placeholder="Description"
                    value={description} 
                    setValue={setDescription}
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