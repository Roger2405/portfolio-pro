import SectionHeader from "../SectionHeader";
import MainProject from "./MainProject";

import { projects } from "../../assets/files/projects";
import Project from "./Project";
import { useState } from "react";
import { ProjectProps } from "../../@types/project";

import './styles.scss';

export default function Projects() {
    const [projectSelected, setProjectSelected] = useState('');
    function handleSelectProject(project: ProjectProps) {
        if (projectSelected == project.name) {
            setProjectSelected('');
        }
        else {
            setProjectSelected(project.name);
        }
    }

    return (
        <>
            <div className="projects__header">
                <SectionHeader title={{ small: '+ recentes', strong: 'projetos' }} reverseDirection />
                <MainProject />
            </div>
            <section about="outros projetos">
                {
                    projects.map(project => {
                        return (
                            <Project projectSelected={projectSelected === project.name} key={project.name} handleSelectProject={handleSelectProject} project={project} />

                        )
                    })
                }
            </section>
        </>

    )
}