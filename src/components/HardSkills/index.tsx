import './styles.scss';
import skillsJson from '../../assets/data/skills.json'
import { SkillProps } from '../../@types/skill';
import Skill from './Skill';
import SectionHeader from '../commons/SectionHeader';



export default function HardSkills() {
    const arrSkills = skillsJson as SkillProps[]


    return (
        <section id='skills' className='hardSkills'>
            <SectionHeader headerStyle='left' title={{ small: 'hard', strong: 'skills' }} />
            <div className='hardSkills__content'>
                {
                    arrSkills.map(skill => {
                        return <Skill key={skill.name} skill={skill} />
                    })
                }
            </div>
        </section>
    )
}