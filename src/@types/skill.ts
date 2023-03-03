export interface SkillProps {
    startsAt?: string,
    name: SkillsNameProps;
    level: string

}

export type SkillsNameProps = 
    "JavaScript" | "HTML5" | "CSS3" | "TypeScript" | "MySQL" | "ReactJS" | "React Native" | "NodeJS"