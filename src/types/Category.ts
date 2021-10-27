import { Todo } from "types";

export default interface Category {
    img?: string
    title: string // As ID
    todos: Todo[]
}