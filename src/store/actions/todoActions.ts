import Section from "types/Section";
import Todo from "types/Todo";
import { AddTodoAction, DeleteTodoAction, SwitchTodoCompletedAction } from "store/types/TodoStore";

enum TodoActionTypes {
    ADD_SECTION_TODO = 'ADD_SECTION_TODO',
    DELETE_SECTION_TODO = 'DELETE_SECTION_TODO',
    SWITCH_SECTION_TODO_COMPLETED = 'SWITCH_SECTION_TODO_COMPLETED'
}
export default TodoActionTypes


export const addSectionTodo = (sectionTitle: Section["title"], todo: Todo): AddTodoAction => ({
    type: TodoActionTypes.ADD_SECTION_TODO,
    payload: {
        sectionTitle,
        todo
    }
})


export const deleteSectionTodo = (sectionTitle: Section["title"], todoId: Todo["id"]): DeleteTodoAction => ({
    type: TodoActionTypes.DELETE_SECTION_TODO,
    payload: {
        sectionTitle,
        todoId
    }
})

export const changeSectionTodoCompleted = (sectionTitle: Section["title"], todoId: Todo["id"]): SwitchTodoCompletedAction => ({
    type: TodoActionTypes.SWITCH_SECTION_TODO_COMPLETED,
    payload: {
        sectionTitle,
        todoId
    }
})
