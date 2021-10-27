import { combineReducers } from "redux";

import appReducer from "./appReducer";
import categoriesReducer from "./categoriesReducer";

const storeReducer = combineReducers({
   app: appReducer,
   categories: categoriesReducer
})

export default storeReducer