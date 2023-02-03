import JSIcon from '../../../assets/icons/js.png';
import HTMLIcon from '../../../assets/icons/html.png';
import CSSIcon from '../../../assets/icons/css.png';
import TSIcon from '../../../assets/icons/ts.png';
import ReactJSIcon from '../../../assets/icons/react.png';
import NodeJSIcon from '../../../assets/icons/node.png';
import RNIcon from '../../../assets/icons/rn.png';
import MySQLIcon from '../../../assets/icons/mysql.png';
import { SkillsNameProps } from '../../../@types/skill';

const values: [SkillsNameProps, string][] =
    [
        ['CSS3', CSSIcon],
        ['HTML5', HTMLIcon],
        ['JavaScript', JSIcon],
        ['TypeScript', TSIcon],
        ['ReactJS', ReactJSIcon],
        ['MySQL', MySQLIcon],
        ['NodeJS', NodeJSIcon],
        ['React Native', RNIcon]
    ]
export const skillIcons: Map<SkillsNameProps, string> = new Map(values)
