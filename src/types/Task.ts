import { Gradient } from "types";

export default interface Task {
    id: string
    title: string
    description?: string
    gradient?: Gradient
    completed: boolean
    expiresAt?: number
}