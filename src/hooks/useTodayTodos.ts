import moment from "moment"

import { useTypedSelector } from "hooks"
import { Todo } from "types"

const useTodayTodos = () => {

    const categories = useTypedSelector(state => state.categories.all)

    let todos: Todo[] = []

    categories.forEach(category => {
        todos = [...todos, ...category.todos]
    })

    const todayDate  = moment().format("DD-MM-YYYY")

    // eslint-disable-next-line array-callback-return
    const todosToday = todos.filter(todo => {
        if (todo.expiresAt) {
            const todoDate = moment(todo.expiresAt).format("DD-MM-YYYY")

            if (todoDate === todayDate) {
                return todo
            }
        }
    })

    return todosToday

}

export default useTodayTodos