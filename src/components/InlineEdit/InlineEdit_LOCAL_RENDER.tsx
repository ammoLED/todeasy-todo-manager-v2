import React, { useRef, useState } from "react"

import "./InlineEdit.scss"

interface Props {
    value: string
    setValue: (...args: any) => void
    error?: string
    placeholder?: string
    className?: string
}

const InlineEdit: React.FC<Props> = ({ value, setValue, error, placeholder, className }) => {
    
    const [ valueLocal, setValueLocal ] = useState(value)
    const isTouched = useRef(false) // Show error after something was inserted into input
    
    // Resize textarea if there is a lot of text
    function handleInput( e: React.FormEvent<HTMLTextAreaElement> ) {

        const target = e.currentTarget
        
        if (target.scrollHeight > 32) {
            target.style.height = "5px"
            target.style.height = target.scrollHeight + "px";
        }

        isTouched.current = true

    }
    
    function handleKeyDown( e: React.KeyboardEvent<HTMLTextAreaElement> ) {

        if (e.key === "Enter" || e.key === "Escape") {
            e.currentTarget.blur()
        }

    } 
    
    function handleClick( e: React.FormEvent<HTMLTextAreaElement> ) {

        e.currentTarget.style.cursor = 'text'

    }

    function handleBlur( e: React.FocusEvent<HTMLTextAreaElement> ) {

        e.target.style.cursor = "pointer"
        
        setValue(e.target.value)

    }

    const errorClass = (isTouched.current && !valueLocal && error) ? "inline-edit_error" : ""
    
    /*
        Using placeholder isn't best variant to alert about errors, 
        cant imagine it with min and max length
        but in this case it is enough
    */
    return (
        <textarea 
            className={
                `inline-edit ${errorClass} ${className}`
            }
            placeholder={errorClass ? error : placeholder}
            rows={1}
            value={valueLocal}
            onInput={handleInput}
            onChange={e => setValueLocal(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onClick={handleClick}
        />
    )
}

export default InlineEdit