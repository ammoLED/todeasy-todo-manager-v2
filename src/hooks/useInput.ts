import { useState } from 'react'

import { Validators } from 'types'
import { useValidation } from 'hooks'

const useInput = (initialValue: string, validators?: Validators) => {

    const [ value, setValue ] = useState(initialValue)
    const error = useValidation(value, validators)

    return { value, setValue, error }

}

export default useInput