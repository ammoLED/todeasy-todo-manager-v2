import { TypedUseSelectorHook, useSelector,  } from 'react-redux'
import { StoreState } from 'store'

const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector

export default useTypedSelector