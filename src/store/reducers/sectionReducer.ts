import SectionActionTypes from "store/actions/sectionActions"
import TodoActionTypes from "store/actions/todoActions"
import SectionState, { SectionAction } from "types/SectionStore"
import { TodoAction } from "types/TodoStore"

const initialState: SectionState = {
    all: [
        {
            title: "Shopping",
            todos: []
        }
    ]
}


const sectionReducer = (state = initialState, action: SectionAction | TodoAction): SectionState => {
    switch (action.type) {
        case SectionActionTypes.ADD_SECTION : {

            return {
                all: [
                    ...state.all,
                    action.payload.section
                ]
            }

        }

        case SectionActionTypes.DELETE_SECTION : {

            if (state.all.length === 0) {
                return {
                    all: []
                }
            }

            const idx = state.all.findIndex(section => section.title === action.payload.title)

            return {
                all: [
                    ...state.all.slice(0, idx),
                    ...state.all.slice(idx + 1)
                ]
            }

        }


        // Todos
        case TodoActionTypes.ADD_SECTION_TODO : {

            const sectionIdx = state.all.findIndex(section => section.title === action.payload.sectionTitle)

            const newArr = [...state.all]

            newArr[sectionIdx] = {
                ...newArr[sectionIdx], 

                todos: [
                    ...newArr[sectionIdx].todos,
                    action.payload.todo
                ]
            }

            return {
                all: newArr
            }

        }

        default: return state
    }
}

export default sectionReducer