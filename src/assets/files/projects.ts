import { SkillsNameProps } from "../../@types/skill";
import RoomHomepageImage from '../screenshots/room-homepage.png';
import RestCountriesImage from '../screenshots/countries-rest-api.png';
import SpaceHomepageImage from '../screenshots/space-page.png';
import { ProjectProps } from "../../@types/project";



export const projects: ProjectProps[] = [
    {
        name: "Room Homepage",
        skills: [
            "JavaScript", "TypeScript", "HTML5", "ReactJS", "CSS3"
        ],
        previewUrl: 'https://room-homepage-master-roger2405.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/room-homepage-master',
        imageSrc: RoomHomepageImage
    },
    {
        name: "Countries - Rest API",
        skills: [
            "JavaScript", "TypeScript", "HTML5", "ReactJS", "CSS3"
        ],
        previewUrl: 'https://rest-countries-roger2405.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/rest-countries',
        imageSrc: RestCountriesImage
    },
    {
        name: "Space - Homepage",
        skills: [
            "JavaScript", "TypeScript", "HTML5", "ReactJS", "CSS3"
        ],
        previewUrl: 'https://rest-countries-roger2405.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/rest-countries',
        imageSrc: SpaceHomepageImage
    }
]