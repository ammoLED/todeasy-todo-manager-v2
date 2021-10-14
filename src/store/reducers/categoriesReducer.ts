import { Category } from "types";

import { CategoriesActionTypes, CategoriesAction } from "store/actions/categoriesActions";
import { TodosActionTypes, TodosAction } from "store/actions/todosActions";

interface CategoriesState {
    all: Category[]
}

const initialState: CategoriesState = {
    all: [
        {
            title: "Shopping",
            todos: [
                {
                    id: '1',
                    title: 'Buy niggers',
                    completed: false,
                    descr: 'Hate niggers',
                    plannedTime: 349943
                }
            ]
        }
    ]
}


const categoriesReducer = (state = initialState, action: CategoriesAction | TodosAction): CategoriesState => {
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

        case TodosActionTypes.ADD_TODO: {
            
            const categoryIdx = state.all.findIndex(category => category.title === action.payload.categoryTitle)
            const newArr = [...state.all]

            newArr[categoryIdx] = {
                ...newArr[categoryIdx],

                todos: [
                    ...newArr[categoryIdx].todos,
                    action.payload.todo
                ]
            }

            return {
                all: newArr
            }

        }

        case TodosActionTypes.DELETE_TODO: {

            const newArr = [...state.all]
            const categoryIdx = newArr.findIndex(category => category.title === action.payload.categoryTitle)
            const todoIdx     = newArr[categoryIdx].todos.findIndex(todo => todo.id === action.payload.todoId)

            newArr[categoryIdx] = {
                ...newArr[categoryIdx],

                todos: [
                    ...newArr[categoryIdx].todos.slice(0, todoIdx),
                    ...newArr[categoryIdx].todos.slice(todoIdx + 1)
                ]
            }

            return {
                all: newArr
            }

        }

        case TodosActionTypes.SWITCH_TODO_COMPLETED: {

            const newArr = [...state.all]
            const categoryIdx = newArr.findIndex(category => category.title === action.payload.categoryTitle)

            newArr[categoryIdx] = {
                ...newArr[categoryIdx],

                todos: newArr[categoryIdx].todos.filter(todo => {
                    if (todo.id === action.payload.todoId) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }

                    return todo
                })
            }

            return {
                all: newArr
            }
        }



        default: return state
    }
}

export default categoriesReducer