import React from "react";
import { Link } from "react-router-dom";

import { default as IProject } from "types/Project";
import { PROJECTS_ROUTE } from "pages/routes";

interface ProjectProps {
    project: IProject
}

const Project: React.FC<ProjectProps> = ({project}) => {

    const routePath = `${PROJECTS_ROUTE}/${project.title}`

    return (
        <Link to={routePath} key={project.title}>
            {project.title}
        </Link>
    )
}

export default Project
