import { SkillProps, SkillsNameProps } from "../../../@types/skill";

import './styles.scss';
import { useEffect, useState } from "react";
import { skillIcons } from "../../commons/SkillsIcons";

interface Props {
    skill: SkillProps
}

export default function Skill({ skill }: Props) {

    const [experienceTime, setExperienceTime] = useState('');

    useEffect(() => {

        if (skill.startsAt) {
            const diffInDays = getDateDiffInDays(skill.startsAt);
            const formatedString = getFormatedExpTimeString(diffInDays)
            setExperienceTime(formatedString.toString())

        }
    }, [])
    function getDateDiffInDays(startsAt: string) {
        const [strYear, strMonth] = startsAt.split('-')

        const year = parseInt(strYear);
        const month = parseInt(strMonth) - 1;//transformando em índice;

        const dateStart = new Date(year, month);
        const dateNow = new Date();

        var diffInTime = dateNow.getTime() - dateStart.getTime();
        const MILISECONDS_IN_A_SECOND = 1000;
        const SECONDS_IN_AN_HOUR = 3600;
        const HOURS_IN_A_DAY = 24;

        var diffInDays = diffInTime /
            (MILISECONDS_IN_A_SECOND * SECONDS_IN_AN_HOUR * HOURS_IN_A_DAY);

        return diffInDays;

    }
    function getFormatedExpTimeString(experienceTimeInDays: number) {
        const totalMonths = Math.floor(experienceTimeInDays / 30);
        const months = totalMonths % 12;
        const years = Math.floor(totalMonths / 12);
        var string = '';

        if (years > 0) {
            string += `${years} ${years > 1 ? 'anos' : 'ano'} `;
        }
        if (months > 0)
            string += `${months} ${months > 1 ? 'meses' : 'mês'}`
        return string;
    }
    return (
        <div className="skill" style={{ backgroundColor: skill.color }}>
            <img className="skill__icon" src={skillIcons.get(skill.name)} />
            <div className="skill__info">
                <h3 className="skill__info--name">{skill.name}</h3>
                <p className="skill__info--expTime">Tempo de experiência: {experienceTime}</p>
                <p className="skill__info--level">Nível: {skill.level}</p>
            </div>
        </div>
    )


}