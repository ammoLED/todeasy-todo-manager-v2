import { Gradient } from "types";

export default interface Todo {
    id: string
    title: string
    description?: string
    gradient?: Gradient
    completed: boolean
    expiresAt?: number
}