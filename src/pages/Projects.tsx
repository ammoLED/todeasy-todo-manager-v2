import React from "react";

import Section from "components/Section";
import Title from "components/Title";
import Project from "components/Project";

import { useTypedSelector } from "hooks";

const Projects: React.FC = () => {

    const projects = useTypedSelector(state => state.projects.all)

    return (
        <>
            <Section>
                <Title textAccent="secondary"> Projects </Title>
            </Section>

            <Section>
                <Title textAccent="primary"> My Projects   </Title>

                <div className="filter">
                    filter
                </div>
            </Section>

            <Section>
                <Title textAccent="secondary" textColor="gray-dark"> 
                    You have {projects.length} projects 
                </Title>

                {projects.map(project => {
                    return <Project project={project} />
                })}
            </Section>        
        </>
    )
} 

export default Projects
