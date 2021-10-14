interface Action {
    type: string
    payload?: object
}

export type ActionCreator<T extends Action> = (payload: T["payload"]) => T