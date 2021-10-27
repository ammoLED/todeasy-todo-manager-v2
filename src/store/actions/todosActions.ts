import { ActionCreator, Category, Todo } from "types";

export enum TodosActionTypes {
    ADD_TODO    = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    SWITCH_TODO_COMPLETED = 'SWITCH_TODO_COMPLETED'
}


// ADD_TODO
interface AddTodoAction {
    type: TodosActionTypes.ADD_TODO
    payload: { 
        categoryTitle: Category["title"]
        todo: Todo 
    }
}

export const addTodo: ActionCreator<AddTodoAction> = ({ categoryTitle, todo }) => ({
    type: TodosActionTypes.ADD_TODO,
    payload: { categoryTitle, todo }
})
// /ADD_TODO


// DELETE_TODO
interface DeleteTodoAction {
    type: TodosActionTypes.DELETE_TODO,
    payload: {
        categoryTitle: Category["title"]
        todoId: Todo["id"]
    }
}

export const deleteTodo: ActionCreator<DeleteTodoAction> = ({ categoryTitle, todoId }) => ({
    type: TodosActionTypes.DELETE_TODO,
    payload: { categoryTitle, todoId }
})
// /DELETE_TODO


// SWITCH_TODO_COMPLETED
interface SwitchTodoCompletedAction {
    type: TodosActionTypes.SWITCH_TODO_COMPLETED,
    payload: { 
        categoryTitle: Category["title"]
        todoId: Todo["id"]
    }
}

export const switchTodoCompleted: ActionCreator<SwitchTodoCompletedAction> = ({ categoryTitle, todoId }) => ({
    type: TodosActionTypes.SWITCH_TODO_COMPLETED,
    payload: { categoryTitle, todoId }
})
// /SWITCH_TODO_COMPLETED


export type TodosAction = 
    AddTodoAction 
    | DeleteTodoAction 
    | SwitchTodoCompletedAction 

