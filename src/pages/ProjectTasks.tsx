import React from "react";
import { Redirect, Link, useParams } from "react-router-dom";

import Task from "components/Task";

import { PROJECTS_ROUTE } from "pages/routes";
import { useTypedSelector } from "hooks";

const ProjectTasks: React.FC = () => {

    const { projectTitle } = useParams<{projectTitle: string}>()
    const category  = useTypedSelector(
        state => state.projects.all.find(project => project.title === projectTitle)
    )

    // Redirect on PROJECTS_ROUTE if Category is not exists
    if (!category) {
        return <Redirect to={PROJECTS_ROUTE} />
    }

    return (
        <div>
            This section named: <strong>{projectTitle}</strong>
            {category.tasks.map(task => {
                return <Task task={task} />
            })}

            <br/>
            <Link to={PROJECTS_ROUTE}>Return</Link>
        </div>
    )
}

export default ProjectTasks
