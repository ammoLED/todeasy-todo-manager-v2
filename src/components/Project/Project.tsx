import React from "react";
import { Link } from "react-router-dom";

import "./Project.scss"

import { Project as IProject } from "types";

import InsecureImage from "components/InsecureImage";
import Title from "components/Title";
import Progress from "components/Progress";

import { PROJECTS_ROUTE } from "pages/routes";

interface Props {
    project: IProject
}

const Project: React.FC<Props> = ({project}) => {

    const routePath = `${PROJECTS_ROUTE}/${project.title}`

    return (
        <Link to={routePath} key={project.title} className="project">
            <div className="project__img">
                <InsecureImage src={project.img} alt={project.title} />
            </div>

            <div className="project__info">
                <Title textAccent="tertiary"> 
                    {project.title} 
                </Title>

                <div className="project__values">
                    <div className="project__values-value text-accent_last text-color_blue"> {project.tasks.length} tasks </div>
                    <div className="project__values-value text-accent_last text-color_red"> 9 oct 21 </div>
                </div>

                <div className="project__progress">
                    <Progress arr={project.tasks} filterFunc={(task => task.completed)} />
                </div>
            </div>
        </Link>
    )
}

export default Project
