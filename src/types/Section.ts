import Todo from 'types/Todo';

export default interface Section {
    ico?: React.ReactElement
    title: string // As ID
    todos: Todo[]
}