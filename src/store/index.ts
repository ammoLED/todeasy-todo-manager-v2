import { createStore } from "redux";
import storeReducer from "store/reducers";

declare global {
    interface Window { 
        __REDUX_DEVTOOLS_EXTENSION__: any; 
    }
}

const store = createStore(storeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export type StoreState = ReturnType<typeof store.getState>

export default store