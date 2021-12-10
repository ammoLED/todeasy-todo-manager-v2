import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"

import InlineEdit       from "components/InlineEdit"
import GradientSelector from "components/GradientSelector"
import { Gradient } from "types"
import { useInput } from "hooks"
import { addTask }  from "store/actions/tasksActions";

// TODO
interface Props {
    categoryTitle: string
    categoryIco?: string
}

const TaskAddActive: React.FC<Props> = ({ categoryTitle, categoryIco }) => {

    const dispatch = useDispatch()

    const title       = useInput("", {required: true})
    const description = useInput("")
    const [ gradient, setGradient ] = useState<Gradient>({
        id: "__NOT_SELECTED__",
        startColor: "#2D3149",
        endColor: "#656D99"
    })

    function handleCreateTask(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()

        if (title.error) return

        dispatch(addTask({
            categoryTitle,
            task: {
                id: uuid(),
                title: title.value,
                description: description.value,
                gradient,
                completed: false
            }
        }))

        title.setValue("")
        description.setValue("")

    }

    return (
        <>
            <div className="task-add__ico ico_small">
                <i className={`fa fa-${categoryIco}`}/>
            </div>

            <form className="task-add__info" onSubmit={handleCreateTask}>
                <InlineEdit 
                    className="task-add__info-title fz-secondary"
                    placeholder="Title"
                    value={title.value} 
                    setValue={title.setValue}
                    error={title.error}
                />

                <InlineEdit 
                    className="task-add__info-description fz-secondary"
                    placeholder="Description"
                    value={description.value} 
                    setValue={description.setValue}
                />

                <GradientSelector 
                    className="task-add__info-gradient"
                    activeGradientId={gradient.id} 
                    setGradient={setGradient}
                />

                <button className="task-add__submit btn fz-secondary" type="submit">Done</button>
            </form>
        </>
    )
}

export default TaskAddActive