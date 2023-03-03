import SectionHeader from "../commons/SectionHeader";
import MainProject from "./MainProject";

import { projects } from "../../data/projects";
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
        else if (window.innerWidth < 1440) {
            setProjectSelected(project.name);
        }
    }

    return (
        <div id="projects" className="div-sections">
            <section className="projects__header">
                <SectionHeader headerStyle="right" title={{ small: '+ recentes', strong: 'projetos' }} reverseDirection />
                <MainProject />
            </section>
            <section className="projects" about="mais projetos">
                {
                    projects.map(project => {
                        return (
                            <Project key={project.name} projectSelected={projectSelected === project.name} handleSelectProject={handleSelectProject} project={project} />
                        )
                    })
                }
            </section>
        </div>

    )
}