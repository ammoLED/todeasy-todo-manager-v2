import React, { useRef } from "react"

import "./InlineEdit.scss"

interface Props {
    value: string
    setValue: (...args: any) => void
    error?: string
    placeholder?: string
    className?: string
}

const InlineEdit: React.FC<Props> = ({ value, setValue, error, placeholder, className }) => {

    const isTouched = useRef(false)
    
    // Resize textarea if there is a lot of text
    function handleInput( e: React.FormEvent<HTMLTextAreaElement> ) {

        isTouched.current = true

        const target = e.currentTarget
        
        if (target.scrollHeight > 32) {
            target.style.height = "5px"
            target.style.height = target.scrollHeight + "px";
        }

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

    const errorClass = (isTouched.current && !value && error) ? "inline-edit_error" : ""
    
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
            value={value}
            onInput={handleInput}
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onClick={handleClick}
        />
    )
}

export default InlineEdit