import moment from "moment"
import { Todo } from "types"

function getTodayTodos(todos: Todo[]) {
    const todayDate  = moment().format("DD-MM-YYYY")

    // eslint-disable-next-line array-callback-return
    return todos.filter(todo => {
        if (todo.expiresAt) {
            const todoDate = moment(todo.expiresAt).format("DD-MM-YYYY")

            if (todoDate === todayDate) {
                return todo
            }
        }
    })
}

export default getTodayTodos