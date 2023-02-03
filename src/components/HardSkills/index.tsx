import './styles.scss';
import skillsJson from '../../assets/files/skills.json'
import { SkillProps } from '../../@types/skill';
import Skill from './Skill';
import SectionHeader from '../SectionHeader';



export default function HardSkills() {
    const arrSkills = skillsJson as SkillProps[]


    return (
        <section className='hardSkills'>
            <SectionHeader title={{ small: 'hard', strong: 'skills' }} />
            <div className='hardSkills__content'>
                {
                    arrSkills.map(skill => {
                        return <Skill skill={skill} />
                    })
                }
            </div>
        </section>
    )
}