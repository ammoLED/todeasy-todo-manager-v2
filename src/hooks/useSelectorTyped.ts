import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { StoreState } from 'store'

const useSelectorTyped: TypedUseSelectorHook<StoreState> = useSelector

export default useSelectorTyped