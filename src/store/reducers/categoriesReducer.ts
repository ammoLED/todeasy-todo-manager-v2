import { Category } from "types";
import { CategoriesActionTypes, CategoriesAction } from "store/actions/categoriesActions";
import { TodosActionTypes, TodosAction } from "store/actions/todosActions";


interface CategoriesState {
    all: Category[]
}

const initialState: CategoriesState = {
    all: [
        {
            ico: "briefcase",
            title: "Work",
            gradient: {
                id: "Default Orange",
                startColor: "#FE975C",
                endColor: "#FE3057"
            },
            todos: [
                {
                    id: "1",
                    title: "Wroom my car",
                    completed: false,
                    description: "Hate niggers",
                    expiresAt: Date.now() + (1000 * 60 * 60 * 3)
                }
            ],
        },
        {
            ico: "heartbeat",
            title: "Health",
            gradient: {
                id: "Default Orange",
                startColor: "#FE975C",
                endColor: "#FE3057"
            },
            todos: [
                {
                    id: "1",
                    title: "Kill niggers",
                    completed: false,
                    description: "Hate niggers",
                    expiresAt: Date.now()
                },
                {
                    id: "3",
                    title: "Always Here",
                    completed: true,
                    description: "Always Here",
                    expiresAt: Date.now()
                },
            ]
        },
        {
            ico: "credit-card",
            title: "Shopping",
            gradient: {
                id: "Default Pink",
                startColor: "#D852D5",
                endColor: "#FE3057"
            },
            todos: [
                {
                    id: "1",
                    title: "I love to eat",
                    completed: true,
                    description: "Hate niggers",
                    expiresAt: Date.now() + (1000 * 60 * 60 * 3)
                }
            ]
        },
        {
            ico: "book",
            title: "Study",
            gradient: {
                id: "Default Blue",
                startColor: "#20E4FE",
                endColor: "#1C4EFD"
            },
            todos: []
        },
        {
            ico: "calendar",
            title: "Other Plans",
            gradient: {
                id: "Default Blue",
                startColor: "#20E4FE",
                endColor: "#1C4EFD"
            },
            todos: []
        },
        {
            title: "Fill 3",
            todos: []
        },
        {
            title: "Fill 4",
            todos: []
        },
        {
            title: "Fill 5",
            todos: []
        },
        {
            title: "Fill 6",
            todos: []
        },
        {
            title: "Fill 7",
            todos: []
        }        
    ]
}


const categoriesReducer = (state = initialState, action: CategoriesAction | TodosAction): CategoriesState => {
    switch(action.type) {
        case CategoriesActionTypes.ADD_CATEGORY: {

            return {
                all: [
                    action.payload.category,
                    ...state.all
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

            const idx = state.all.findIndex(category => category.title === action.payload.title)

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

        case TodosActionTypes.SET_TODO_COMPLETED: {

            const newArr = [...state.all]
            const categoryIdx = newArr.findIndex(category => category.title === action.payload.categoryTitle)

            newArr[categoryIdx] = {
                ...newArr[categoryIdx],

                todos: newArr[categoryIdx].todos.filter(todo => {
                    if (todo.id === action.payload.todoId) {
                        return {
                            ...todo,
                            completed: true
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