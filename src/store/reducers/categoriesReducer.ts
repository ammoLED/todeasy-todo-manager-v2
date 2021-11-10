import { Category } from "types";
import { CategoriesActionTypes, CategoriesAction } from "store/actions/categoriesActions";
import { TasksActionTypes, TasksAction } from "store/actions/tasksActions";


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
}


const categoriesReducer = (state = initialState, action: CategoriesAction | TasksAction): CategoriesState => {
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

        case TasksActionTypes.ADD_TASK: {
            
            const categoryIdx = state.all.findIndex(category => category.title === action.payload.categoryTitle)
            const newArr = [...state.all]

            newArr[categoryIdx] = {
                ...newArr[categoryIdx],

                tasks: [
                    ...newArr[categoryIdx].tasks,
                    action.payload.task
                ]
            }

            return {
                all: newArr
            }

        }

        case TasksActionTypes.DELETE_TASK: {

            const newArr = [...state.all]
            const categoryIdx = newArr.findIndex(category => category.title === action.payload.categoryTitle)
            const taskIdx     = newArr[categoryIdx].tasks.findIndex(task => task.id === action.payload.taskId)

            newArr[categoryIdx] = {
                ...newArr[categoryIdx],

                tasks: [
                    ...newArr[categoryIdx].tasks.slice(0, taskIdx),
                    ...newArr[categoryIdx].tasks.slice(taskIdx + 1)
                ]
            }

            return {
                all: newArr
            }

        }

        case TasksActionTypes.SWITCH_TASK_COMPLETED: {

            const newArr = [...state.all]
            const categoryIdx = newArr.findIndex(category => category.title === action.payload.categoryTitle)

            newArr[categoryIdx] = {
                ...newArr[categoryIdx],

                tasks: newArr[categoryIdx].tasks.map(task => {
                    if (task.id === action.payload.taskId) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }

                    return task
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