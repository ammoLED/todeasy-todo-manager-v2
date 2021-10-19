import { Project } from "types";

import { ProjectsActionTypes, ProjectsAction } from "store/actions/projectsActions";
// import { TodosActionTypes, TodosAction } from "store/actions/todosActions";

interface ProjectsState {
    all: Project[]
}

const initialState: ProjectsState = {
    all: [
        {
            title: "Shopping",
            status: "open",
            createdAt: Date.now(),
            tasks: [
                {
                    id: '1',
                    title: 'Buy niggers',
                    completed: false,
                    descr: 'Hate niggers',
                    createdAt: Date.now()
                }
            ]
        },
        {
            title: "Make Design",
            status: "finished",
            createdAt: Date.now(),
            expiresAt: Date.now() + (1000 * 60 * 60),
            tasks: [
                {
                    id: '1',
                    title: 'Buy niggers',
                    completed: true,
                    descr: 'Hate niggers',
                    createdAt: Date.now()
                }
            ]
        }
    ]
}


const projectsReducer = (state = initialState, action: ProjectsAction): ProjectsState => {
    switch(action.type) {
        case ProjectsActionTypes.ADD_PROJECT: {

            return {
                all: [
                    action.payload.project,
                    ...state.all
                ]
            }

        }

        case ProjectsActionTypes.DELETE_PROJECT: {

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

        // case TodosActionTypes.ADD_TODO: {
            
        //     const categoryIdx = state.all.findIndex(category => category.title === action.payload.categoryTitle)
        //     const newArr = [...state.all]

        //     newArr[categoryIdx] = {
        //         ...newArr[categoryIdx],

        //         todos: [
        //             ...newArr[categoryIdx].todos,
        //             action.payload.todo
        //         ]
        //     }

        //     return {
        //         all: newArr
        //     }

        // }

        // case TodosActionTypes.DELETE_TODO: {

        //     const newArr = [...state.all]
        //     const categoryIdx = newArr.findIndex(category => category.title === action.payload.categoryTitle)
        //     const todoIdx     = newArr[categoryIdx].todos.findIndex(todo => todo.id === action.payload.todoId)

        //     newArr[categoryIdx] = {
        //         ...newArr[categoryIdx],

        //         todos: [
        //             ...newArr[categoryIdx].todos.slice(0, todoIdx),
        //             ...newArr[categoryIdx].todos.slice(todoIdx + 1)
        //         ]
        //     }

        //     return {
        //         all: newArr
        //     }

        // }

        // case TodosActionTypes.SWITCH_TODO_COMPLETED: {

        //     const newArr = [...state.all]
        //     const categoryIdx = newArr.findIndex(category => category.title === action.payload.categoryTitle)

        //     newArr[categoryIdx] = {
        //         ...newArr[categoryIdx],

        //         todos: newArr[categoryIdx].todos.filter(todo => {
        //             if (todo.id === action.payload.todoId) {
        //                 return {
        //                     ...todo,
        //                     completed: !todo.completed
        //                 }
        //             }

        //             return todo
        //         })
        //     }

        //     return {
        //         all: newArr
        //     }
        // }



        default: return state
    }
}

export default projectsReducer