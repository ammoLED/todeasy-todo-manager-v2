import { useTypedSelector } from "hooks";
import React, { FormEvent, useState } from "react"
import { Gradient } from "types";

import "./TaskAdd.scss";

interface Props {
    categoryTitle: string
    categoryIco?: string
}

const TaskAdd: React.FC<Props> = ({ categoryTitle, categoryIco = "cubes" }) => {

    const [ isActive, setActive ] = useState(false)

    const view = 
        isActive 
        ? <ActiveView categoryTitle={categoryTitle} categoryIco={categoryIco} />
        : <i className="fa fa-plus"/>

    return (
        <div 
            className="task-add" 
            onClick={() => setActive(true)}
        >
            {view}
        </div>
    )
}


interface Values {
    title: string
    description: string
    gradient: Gradient
}

const ActiveView: React.FC<Props> = ({ categoryIco }) => {
    
    const [ values, setValue ] = useState<Values>({
        title: "",
        description: "",
        gradient: {
            id: "0",
            startColor: "#fff",
            endColor: "#eeee"
        }
    })

    const gradients = useTypedSelector(state => state.app.customGradients)


    function handleChange(e: React.FormEvent<HTMLInputElement>) {

        const key: string = e.currentTarget.getAttribute("name")!

        setValue({
            ...values,
            [key]: e.currentTarget.value
        })

    }

    function handleSubmitAdd(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    function setGradient(gradient: Gradient) {
        setValue({
            ...values,
            gradient
        })
    }

    console.log(values)

    return (
        <>
            <div className="task-add__ico ico_small">
                <i className={`fa fa-${categoryIco}`}/>
            </div>

            <form className="task-add__info" onSubmit={handleSubmitAdd}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title" 
                    onChange={handleChange}
                    value={values.title}
                />

                <input 
                    type="text" 
                    placeholder="Description" 
                    name="description" 
                    onChange={handleChange} 
                    value={values.description}
                />

                {gradients.map(gradient => {
                    const isChecked = values.gradient.id === gradient.id

                    return (
                        <label 
                            key={gradient.id}
                            className="todo-menu__radio radio" 
                            onChange={() => setGradient(gradient)}
                        >
                            <input type="radio" name="gradient" defaultChecked={isChecked}/>

                            <div 
                                style={{
                                    background: `linear-gradient(
                                        135deg, ${gradient.startColor} 0%, 
                                        ${gradient.endColor} 100%
                                    )`
                                }}
                            ></div>
                        </label>
                    )
                })}

                <button type="submit">SEND</button>
            </form>
        </>
    )
}

export default TaskAdd