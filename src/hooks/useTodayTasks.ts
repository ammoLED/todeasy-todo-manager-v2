import moment from "moment"

import { useTypedSelector } from "hooks"
import { Task } from "types"

const useTodayTasks = () => {

    const categories = useTypedSelector(state => state.categories.all)

    let tasks: Task[] = []

    categories.forEach(category => {
        tasks = [...tasks, ...category.tasks]
    })

    const todayDate  = moment().format("DD-MM-YYYY")

    // eslint-disable-next-line array-callback-return
    const tasksToday = tasks.filter(todo => {
        if (todo.expiresAt) {
            const todoDate = moment(todo.expiresAt).format("DD-MM-YYYY")

            if (todoDate === todayDate) {
                return todo
            }
        }
    })

    return tasksToday

}

export default useTodayTasks