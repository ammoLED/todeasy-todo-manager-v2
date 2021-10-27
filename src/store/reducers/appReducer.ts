import { AppActionTypes, AppAction } from "store/actions/appActions"

interface AppState {
    currentPageName: string
}

const initialState: AppState = {
    currentPageName: "TEST"
}

const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionTypes.CHANGE_PAGE_NAME: {
            return {
                ...state,
                currentPageName: action.payload.currentPageName
            }
        }

        default: return state
    }
}

export default appReducer
