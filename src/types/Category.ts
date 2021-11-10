import { Gradient, Task } from "types";

export default interface Category {
    ico?: string
    title: string // As ID
    tasks: Task[]
    gradient?: Gradient
}