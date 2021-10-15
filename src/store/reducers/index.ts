import { combineReducers } from "redux";

import projectsReducer from "./projectsReducer";

const storeReducer = combineReducers({
   projects: projectsReducer
})

export default storeReducer