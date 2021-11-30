import React, { useEffect, useState } from "react"

import "./InlineEdit.scss"

interface Props {
    value: string
    setValue: (...args: any) => void
    fontSize: number
    error?: string
    clearError?: () => void
    placeholder?: string
    className?: string
}

const InlineEdit: React.FC<Props> = ({ value, setValue, fontSize, placeholder, error, clearError, className }) => {
    
    const [ editingValue, setEditingValue ] = useState(value)

    useEffect(() => {
        //Clear value to see error text in placeholder
        
        if (error) {
            setEditingValue("")
        }
    }, [error])

    /*
        CASE:
            When <Parent></Parent> set {value} to empty string in his state (onSubmit)
            editingValue will stay the same inside <InlineEdit/> till next render.       
    */
    useEffect(() => {
        setEditingValue(value)
    }, [value])

    function handleClick( e: React.FormEvent<HTMLTextAreaElement> ) {
        e.currentTarget.style.cursor = 'text'
    }

    // Resize textarea if there is a lot of text
    function handleInput( e: React.FormEvent<HTMLTextAreaElement> ) {

        // Clear error on input
        if (error && clearError) {
            clearError()
        }

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
        Better just render <InlineEdit/> 
    */
    function handleBlur( e: React.FocusEvent<HTMLTextAreaElement> ) {
        e.currentTarget.style.cursor = "pointer"
        
        if (e.target.value.trim() === "") {
            setEditingValue(e.target.value)
        }
        else {
            setValue(e.target.value)
        }
    }

    return (
        <textarea 
            className={
                `inline-edit ${error ? "inline-edit_error" : ""} ${className}`
            }
            placeholder={error || placeholder}
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