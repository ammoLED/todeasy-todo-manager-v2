import Todo from 'types/Todo';

export default interface Category {
    ico?: React.ReactElement
    title: string // As ID
    todos: Todo[]
}