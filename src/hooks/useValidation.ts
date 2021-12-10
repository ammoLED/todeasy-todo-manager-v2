import { useState, useEffect } from "react"

import { Validators } from "types"

const useValidation = (value: string, validators?: Validators) => {

    const [ error, setError ] = useState('') 
    
    
    useEffect(() => {
        if (validators) {
            validate(value)
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    
    function validate( value: string ) {
        for (let key in validators) {
            switch (key) {
                case "required": {
                    if (!value.trim().length) {
                        return setError(`This is required field`)
                    }
                    
                    return setError("")
                }
            }
        }
    }

    return error

}

export default useValidation