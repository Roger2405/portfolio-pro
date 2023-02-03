import { useState } from 'react';
import { ProjectProps } from '../../../@types/project';
import { skillIcons } from '../../commons/SkillsIcons';
import LinkButton from '../../commons/LinkButton';
import './styles.scss';

interface Props {
    project: ProjectProps
    handleSelectProject: (project: ProjectProps) => void
    projectSelected: boolean
}

export default function Project({ project, projectSelected, handleSelectProject }: Props) {

    return (
        <div className={`project ${projectSelected ? 'active' : ''}`} onClick={() => handleSelectProject(project)}>
            <img className='project__screenshot' src={project.imageSrc} />
            <div className='project__details'>
                <p className='project__details--name'>{project.name}</p>
                <div className='project__details--skills'>
                    {
                        project.skills.map(
                            skill => {
                                return (<img key={skill} src={skillIcons.get(skill)} />)
                            })

                    }
                </div>
                <div className='project__details--links'>
                    {/* <a href={project.previewUrl} target='_blank' className='button-preview'>Visitar site</a> */}
                    {/* <a href={project.repoUrl} target='_blank' className='button-repo'>Ver repositório no GitHub</a> */}
                    <LinkButton contoured href={project.previewUrl} title="Visitar site" />
                    <LinkButton href={project.repoUrl} title="Ver repositório no GitHub" />
                </div>

            </div>
        </div>
    )
}