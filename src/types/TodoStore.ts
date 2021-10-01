import Section from "types/Section";
import Todo from "types/Todo";
import TodoActionTypes from "store/actions/todoActions";


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

export interface ChangeTodoStatusAction {
    type: TodoActionTypes.UPDATE_SECTION_TODO_COMPLETED,
    payload: {
        sectionTitle: Section["title"] 
        todoId: Todo["id"]
        completed: Todo["completed"]
    }
}

export type TodoAction = AddTodoAction | DeleteTodoAction | ChangeTodoStatusAction