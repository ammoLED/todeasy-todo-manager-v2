import React, { useState } from "react"

import "./InlineEdit.scss"

interface Props {
    value: string
    setValue: (...args: any) => void
    fontSize: number
    className?: string
}

const InlineEdit: React.FC<Props> = ({ value, setValue, fontSize, className }) => {
    
    const [ editingValue, setEditingValue ] = useState(value)

    function handleClick( e: React.FormEvent<HTMLTextAreaElement> ) {
        e.currentTarget.style.cursor = 'text'
    }

    // Resize textarea if there is a lot of text
    function handleInput( e: React.FormEvent<HTMLTextAreaElement> ) {

        if (e.currentTarget.scrollHeight > (fontSize * 2)) {

            e.currentTarget.style.height = `${e.currentTarget.scrollHeight - fontSize}px`
        
        }

    }

    
    // Call blur() on textarea
    function handleKeyDown( e: React.KeyboardEvent<HTMLTextAreaElement> ) {
        if (e.key === "Enter" || e.key === "Escape") {
            e.currentTarget.blur()
        }
    } 


    /*
        If new value is empty string we dont need
        make render for whole parent component for no reason
        Better only render <InlineEdit/> 
        and also set html value equals to {value} from props 
    */
    function handleBlur( e: React.FocusEvent<HTMLTextAreaElement> ) {
        e.currentTarget.style.cursor = "pointer"
        
        if (e.target.value.trim() === "") {
            setEditingValue(value)
        }
        else {
            setValue(e.target.value)
        }
    }
    
    return (
        <textarea className={`inline-edit ${className}`}
            rows={1}
            value={editingValue}
            onInput={handleInput}
            onChange={e => setEditingValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onClick={handleClick}
        />
    )
}

export default InlineEdit