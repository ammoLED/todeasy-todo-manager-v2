import { ActionCreator, Project, Task } from "types";

export enum TasksActionTypes {
    ADD_TASK    = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    SWITCH_TASK_COMPLETED = 'SWITCH_TASK_COMPLETED'
}


// ADD_TASK
interface AddTaskAction {
    type: TasksActionTypes.ADD_TASK
    payload: { 
        projectTitle: Project["title"]
        task: Task 
    }
}

export const addTask: ActionCreator<AddTaskAction> = ({ projectTitle, task }) => ({
    type: TasksActionTypes.ADD_TASK,
    payload: { projectTitle, task }
})
// /ADD_TASK


// DELETE_TASK
interface DeleteTaskAction {
    type: TasksActionTypes.DELETE_TASK,
    payload: {
        projectTitle: Project["title"]
        taskId: Task["id"]
    }
}

export const deleteTask: ActionCreator<DeleteTaskAction> = ({ projectTitle, taskId }) => ({
    type: TasksActionTypes.DELETE_TASK,
    payload: { projectTitle, taskId }
})
// /DELETE_TASK


// SWITCH_TASK_COMPLETED
interface SwitchTaskCompletedAction {
    type: TasksActionTypes.SWITCH_TASK_COMPLETED,
    payload: { 
        projectTitle: Project["title"]
        taskId: Task["id"]
    }
}

export const switchTaskCompleted: ActionCreator<SwitchTaskCompletedAction> = ({ projectTitle, taskId }) => ({
    type: TasksActionTypes.SWITCH_TASK_COMPLETED,
    payload: { projectTitle, taskId }
})
// /SWITCH_TASK_COMPLETED


export type TasksAction = 
    AddTaskAction 
    | DeleteTaskAction 
    | SwitchTaskCompletedAction 

