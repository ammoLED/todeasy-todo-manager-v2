import { AppActionTypes, AppAction } from "store/actions/appActions"
import { Gradient } from "types"

interface AppState {
    currentPageName: string
    customGradients: Gradient[] // User can delete exists gradients and create own, should to store these states
}

const initialState: AppState = {
    currentPageName: "",
    customGradients: [
        {
            id: "Default Orange",
            startColor: "#FE975C",
            endColor: "#FE3057"
        },
        {
            id: "Default Pink",
            startColor: "#D852D5",
            endColor: "#FE3057"
        },
        {
            id: "Default Purple",
            startColor: "#D766FF",
            endColor: "#720FD4"
        },
        {
            id: "Default Blue",
            startColor: "#20E4FE",
            endColor: "#1C4EFD"
        },
        {
            id: "Default Vine",
            startColor: "#FE3255",
            endColor: "#2D2D2D"
        }
    ]
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
