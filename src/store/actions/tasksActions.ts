import { ActionCreator, Category, Task } from "types";

export enum TasksActionTypes {
    ADD_TASK    = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    SWITCH_TASK_COMPLETED = "SWITCH_TASK_COMPLETED"
}


// ADD_TASK
interface AddTaskAction {
    type: TasksActionTypes.ADD_TASK
    payload: { 
        categoryTitle: Category["title"]
        task: Task 
    }
}

export const addTask: ActionCreator<AddTaskAction> = ({ categoryTitle, task }) => ({
    type: TasksActionTypes.ADD_TASK,
    payload: { categoryTitle, task }
})
// /ADD_TASK


// DELETE_TASK
interface DeleteTaskAction {
    type: TasksActionTypes.DELETE_TASK,
    payload: {
        categoryTitle: Category["title"]
        taskId: Task["id"]
    }
}

export const deleteTask: ActionCreator<DeleteTaskAction> = ({ categoryTitle, taskId }) => ({
    type: TasksActionTypes.DELETE_TASK,
    payload: { categoryTitle, taskId }
})
// /DELETE_TASK


// SWITCH_TASK_COMPLETED
interface SwitchTaskCompleted {
    type: TasksActionTypes.SWITCH_TASK_COMPLETED,
    payload: { 
        categoryTitle: Category["title"]
        taskId: Task["id"]
    }
}

export const switchTaskCompleted: ActionCreator<SwitchTaskCompleted> = ({ categoryTitle, taskId }) => ({
    type: TasksActionTypes.SWITCH_TASK_COMPLETED,
    payload: { categoryTitle, taskId }
})
// /SWITCH_TASK_COMPLETED


export type TasksAction = 
    AddTaskAction 
    | DeleteTaskAction 
    | SwitchTaskCompleted 