import React from "react";
import { Redirect, useParams } from "react-router-dom";

import Section from "components/Section";
import Title from "components/Title";
import Task from "components/Task";

import { PROJECTS_ROUTE } from "pages/routes";
import { useTypedSelector } from "hooks";

const ProjectTasks: React.FC = () => {

    const { projectTitle } = useParams<{projectTitle: string}>()

    const project  = useTypedSelector(
        state => state.projects.all.find(project => project.title === projectTitle)
    )

    // Redirect on PROJECTS_ROUTE if Category is not exists
    if (!project) {
        return <Redirect to={PROJECTS_ROUTE} />
    }

    return (
        <>
            <Section>
                <Title textAccent="secondary"> Tasks </Title>
            </Section>

            <Section>
                <Title textAccent="primary"> {project.title}   </Title>

                <div className="filter">
                    filter
                </div>
            </Section>

            <Section>
                <Title textAccent="secondary" textColor="gray-dark"> 
                    {project.title} has {project.tasks.length} tasks 
                </Title>

                {project.tasks.map(task => {
                    return <Task task={task} />
                })}
            </Section>        
        </>
    )
}

export default ProjectTasks
