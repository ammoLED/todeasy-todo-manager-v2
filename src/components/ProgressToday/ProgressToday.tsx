import React from "react"

import Progress from "components/Progress"
import { useTodayTasks } from "hooks"

const ProgressToday: React.FC = () => {
    const todayTasks = useTodayTasks()

    return <Progress tasks={todayTasks} />
}

export default ProgressToday