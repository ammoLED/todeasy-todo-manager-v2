import { combineReducers } from 'redux'

import sectionReducer from './sectionReducer'

const storeReducer = combineReducers({
   sections: sectionReducer
})

export default storeReducer