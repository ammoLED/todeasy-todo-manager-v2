import React, { useState } from "react"

import "./InlineEdit.scss"

interface Props {
    value: string
    setValue: (...args: any) => void
    validError?: string | null
    placeholder?: string
    className?: string
}

const InlineEdit: React.FC<Props> = ({ value, setValue, validError, placeholder, className }) => {
    
    const [ editingValue, setEditingValue ] = useState(value)

    function handleClick( e: React.FormEvent<HTMLTextAreaElement> ) {
        e.currentTarget.style.cursor = 'text'
    }

    // Resize textarea if there is a lot of text
    function handleHeight( e: React.FormEvent<HTMLTextAreaElement> ) {

        const target = e.currentTarget

        if (target.scrollHeight > 32) {
            target.style.height = "5px"
            target.style.height = target.scrollHeight + "px";
        }
    }

    
    function handleEscape( e: React.KeyboardEvent<HTMLTextAreaElement> ) {
        if (e.key === "Enter" || e.key === "Escape") {
            e.currentTarget.blur()
        }
    } 

    function handleBlur( e: React.FocusEvent<HTMLTextAreaElement> ) {
        e.target.style.cursor = "pointer"
    }

    return (
        <textarea 
            className={
                `inline-edit ${validError ? "inline-edit_error" : ""} ${className}`
            }
            placeholder={validError || placeholder}
            rows={1}
            value={editingValue}
            onInput={handleHeight}
            onChange={e => setEditingValue(e.target.value)}
            onKeyDown={handleEscape}
            onBlur={handleBlur}
            onClick={handleClick}
        />
    )
}

export default InlineEdit