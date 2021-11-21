import { Category } from "types";
import { CategoriesActionTypes, CategoriesAction } from "store/actions/categoriesActions";
import { TasksActionTypes, TasksAction } from "store/actions/tasksActions";

const initialState: Category[] = [
    {
        ico: "briefcase",
        title: "Work",
        gradient: {
            id: "Default Orange",
            startColor: "#FE975C",
            endColor: "#FE3057"
        },
        tasks: [
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
        tasks: [
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
        tasks: [
            {
                id: "1",
                title: "I love to eat",
                completed: false,
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
        tasks: []
    },
    {
        ico: "calendar",
        title: "Other Plans",
        gradient: {
            id: "Default Blue",
            startColor: "#20E4FE",
            endColor: "#1C4EFD"
        },
        tasks: []
    },
    {
        title: "Fill 3",
        tasks: []
    },
    {
        title: "Fill 4",
        tasks: []
    },
    {
        title: "Fill 5",
        tasks: []
    },
    {
        title: "Fill 6",
        tasks: []
    },
    {
        title: "Fill 7",
        tasks: []
    }        
]



const categoriesReducer = (state = initialState, action: CategoriesAction | TasksAction): Category[] => {
    switch(action.type) {
        case CategoriesActionTypes.ADD_CATEGORY: {

            return [
                action.payload.category,
                ...state
            ]
            
        }

        case CategoriesActionTypes.DELETE_CATEGORY: {

            // Last ELem
            if (state.length === 1) {
                return []
            }

            const idx = state.findIndex(category => category.title === action.payload.title)

            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ]
            

        }

        case TasksActionTypes.ADD_TASK: {
            
            const newState = [...state]
            const categoryIdx = state.findIndex(category => category.title === action.payload.categoryTitle)

            newState[categoryIdx] = {
                ...newState[categoryIdx],

                tasks: [
                    ...newState[categoryIdx].tasks,
                    action.payload.task
                ]
            }

            return newState

        }

        case TasksActionTypes.DELETE_TASK: {

            const newState = [...state]
            const categoryIdx = newState.findIndex(category => category.title === action.payload.categoryTitle)
            const taskIdx     = newState[categoryIdx].tasks.findIndex(task => task.id === action.payload.taskId)

            newState[categoryIdx] = {
                ...newState[categoryIdx],

                tasks: [
                    ...newState[categoryIdx].tasks.slice(0, taskIdx),
                    ...newState[categoryIdx].tasks.slice(taskIdx + 1)
                ]
            }

            return newState

        }

        case TasksActionTypes.SWITCH_TASK_COMPLETED: {

            const newState = [...state]
            const categoryIdx = newState.findIndex(category => category.title === action.payload.categoryTitle)

            newState[categoryIdx] = {
                ...newState[categoryIdx],

                tasks: newState[categoryIdx].tasks.map(task => {
                    if (task.id === action.payload.taskId) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }

                    return task
                })
            }

            return newState
            
        }



        default: return state
    }
}

export default categoriesReducer