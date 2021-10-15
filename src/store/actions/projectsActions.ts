
import { Project, ActionCreator } from "types";

export enum ProjectsActionTypes {
    ADD_PROJECT    = "ADD_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT"
}


// ADD_PROJECT
interface AddProjectAction {
    type: ProjectsActionTypes.ADD_PROJECT,
    payload: {
        project: Project
    }
}

export const addProject: ActionCreator<AddProjectAction> = ({ project }) => ({
    type: ProjectsActionTypes.ADD_PROJECT,
    payload: { project }
})
// /ADD_PROJECT


// DELETE_PROJECT
interface DeleteProjectAction {
    type: ProjectsActionTypes.DELETE_PROJECT,
    payload: {
        title: Project["title"]
    }
}

export const deleteProject: ActionCreator<DeleteProjectAction> = ({ title }) => ({
    type: ProjectsActionTypes.DELETE_PROJECT,
    payload: { title }
})
// /DELETE_PROJECT


export type ProjectsAction = AddProjectAction | DeleteProjectAction

