import { Gradient, Todo } from "types";

export default interface Category {
    ico?: string
    title: string // As ID
    todos: Todo[]
    gradient?: Gradient
}