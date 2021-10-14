import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";

const storeReducer = combineReducers({
   categories: categoriesReducer
})

export default storeReducer