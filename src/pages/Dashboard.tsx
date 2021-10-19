import React from "react"

import Title from "components/Title"
import Section from "components/Section"
import Project from "components/Project"

import { useTypedSelector } from "hooks"

const Dashboard = () => {

    const openProjects = useTypedSelector(state => {
        return state.projects.all.filter(project => {
            return project.status
        })
    })

    return (
        <>
            <Section>
                <Title textAccent="secondary">Dashboard</Title>
            </Section>

            <Section>
                <Title textAccent="primary">Today's tasks</Title>

                <div style={{marginTop: "15px"}}>
                    corousel
                </div>
            </Section>

            <Section>
                <Title textAccent="secondary" textColor="gray-dark">Open projects</Title>

                <div>
                    {openProjects.map(project => {                        
                        return <Project project={project} key={project.title} />
                    })}
                </div>
            </Section>
        </>
    )
}

export default Dashboard
