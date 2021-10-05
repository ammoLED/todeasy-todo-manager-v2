import SectionState, { SectionAction } from "store/types/SectionStore"
import { TodoAction } from "store/types/TodoStore"

import SectionActionTypes from "store/actions/sectionActions"
import TodoActionTypes from "store/actions/todoActions"

const initialState: SectionState = {
    all: [
        {
            title: "Shopping",
            todos: []
        },
        {
            title: "Health",
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

        case TodoActionTypes.DELETE_SECTION_TODO : {

            const sectionIdx = state.all.findIndex(section => section.title === action.payload.sectionTitle)
            const todoIdx    = state.all[sectionIdx].todos.findIndex(todo => todo.id === action.payload.todoId)

            const newArr = [...state.all]

            // If todo is the last el in section
            if (newArr[sectionIdx].todos.length === 1) {

                newArr[sectionIdx] = {...newArr[sectionIdx], todos: []}

                return {
                    all: newArr
                }
            }

            newArr[sectionIdx] = {
                ...newArr[sectionIdx], 

                todos: [
                    ...newArr[sectionIdx].todos.slice(0, todoIdx),
                    ...newArr[sectionIdx].todos.slice(todoIdx + 1)
                ]
            }

            return {
                all: newArr
            }

        }

        case TodoActionTypes.SWITCH_SECTION_TODO_COMPLETED : {

            const sectionIdx = state.all.findIndex(section => section.title === action.payload.sectionTitle)
            const todoIdx    = state.all[sectionIdx].todos.findIndex(todo => todo.id === action.payload.todoId)

            const newArr = [...state.all]

            newArr[sectionIdx].todos[todoIdx] = {
                ...newArr[sectionIdx].todos[todoIdx],
                completed: !newArr[sectionIdx].todos[todoIdx].completed
            }

            return {
                all: newArr
            }
        }

        default: return state
    }
}

export default sectionReducer