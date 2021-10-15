import React from "react";

import Project from "components/Project";

import { useTypedSelector } from "hooks";

const Projects: React.FC = () => {

    const projects = useTypedSelector(state => state.projects.all)

    return (
        <div>
            {projects.map(project => {
                return <Project project={project} />
            })}
        </div>
    )
}

export default Projects
