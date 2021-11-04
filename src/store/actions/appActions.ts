import { ActionCreator } from "types";

export enum AppActionTypes {
    SET_PAGE_NAME = "SET_PAGE_NAME"
}

interface SetPageName {
    type: AppActionTypes.SET_PAGE_NAME,
    payload: {
        pageName: string
    }
}

export const setPageName: ActionCreator<SetPageName> = ({ pageName }) => ({
    type: AppActionTypes.SET_PAGE_NAME,
    payload: { pageName }
})

export type AppAction = SetPageName