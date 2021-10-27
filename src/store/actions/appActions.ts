import { ActionCreator } from "types";

export enum AppActionTypes {
    CHANGE_PAGE_NAME = "CHANGE_PAGE_NAME"
}

interface ChangePageNameAction {
    type: AppActionTypes.CHANGE_PAGE_NAME,
    payload: {
        currentPageName: string
    }
}

export const changePageName: ActionCreator<ChangePageNameAction> = ({ currentPageName }) => ({
    type: AppActionTypes.CHANGE_PAGE_NAME,
    payload: { currentPageName }
})

export type AppAction = ChangePageNameAction