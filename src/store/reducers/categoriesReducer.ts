import { Category } from "types";

import { CategoriesActionTypes, CategoriesAction } from 'store/actions/categoriesActions';

interface CategoriesState {
    all: Category[]
}

const initialState: CategoriesState = {
    all: []
}


const categoriesReducer = (state = initialState, action: CategoriesAction): CategoriesState => {
    switch(action.type) {
        case CategoriesActionTypes.ADD_CATEGORY: {
            return {
                all: [
                    ...state.all,
                    action.payload.category
                ]
            }
        }

        case CategoriesActionTypes.DELETE_CATEGORY: {

            // Last ELem
            if (state.all.length === 1) {
                return {
                    all: []
                }
            }

            const idx = state.all.findIndex(cat => cat.title === action.payload.title)

            return {
                all: [
                    ...state.all.slice(0, idx),
                    ...state.all.slice(idx + 1)
                ]
            }
        }

        default: return state
    }
}

export default categoriesReducer