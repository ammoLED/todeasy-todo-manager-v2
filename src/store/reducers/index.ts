import { combineReducers } from 'redux'

const storeReducer = combineReducers({
   categories: (state, action) => {
      return {
        all: [] 
      }
   }
})

export default storeReducer