import Section from "types/Section";
import Todo from "types/Todo";
import TodoActionTypes from "store/actions/todoActions";

export default interface TodoState {
    all: Todo[]
}

// Action Types
export interface AddTodoAction {
    type: TodoActionTypes.ADD_SECTION_TODO
    payload: { 
        sectionTitle: Section["title"]
        todo: Todo 
    }
}

export interface DeleteTodoAction {
    type: TodoActionTypes.DELETE_SECTION_TODO,
    payload: {
        sectionTitle: Section["title"]
        todoId: Todo["id"]
    }
}

export interface SwitchTodoCompletedAction {
    type: TodoActionTypes.SWITCH_SECTION_TODO_COMPLETED,
    payload: { 
        sectionTitle: Section["title"]
        todoId: Todo["id"]
    }
}

export type TodoAction = AddTodoAction | DeleteTodoAction | SwitchTodoCompletedAction