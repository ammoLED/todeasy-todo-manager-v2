interface Action {
    type: string
    payload?: object
}

type ActionCreator<T extends Action> = (payload: T["payload"]) => T

export default ActionCreator