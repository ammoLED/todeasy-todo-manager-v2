import { Todo } from "types";
export default interface Category {
    ico?: React.ReactElement
    title: string // As ID
    todos: Todo[]
}