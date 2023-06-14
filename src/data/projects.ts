import RoomHomepageScreenshot from '../assets/screenshots/room-homepage.png';
import RestCountriesScreenshot from '../assets/screenshots/countries-rest-api.png';
import SpaceHomepageScreenshot from '../assets/screenshots/space-page.png';
import ChatAppCSSScreenshot from '../assets/screenshots/chat-app-css.png';
import MultiStepFormScreenshot from '../assets/screenshots/multi-step-form.png';
import TicTacToeScreenshot from '../assets/screenshots/tic-tac-toe.png';
import { ProjectProps } from '../@types/project';





export const projects: ProjectProps[] = [
    {
        name: "Multi Step Form",
        skills: [
            "JavaScript", "TypeScript", "HTML5", "ReactJS", "CSS3"
        ],
        previewUrl: 'https://multi-step-form-roger2405.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/multi-step-form',
        imageSrc: MultiStepFormScreenshot
    },
    {
        name: "Room Homepage",
        skills: [
            "JavaScript", "TypeScript", "HTML5", "ReactJS", "CSS3"
        ],
        previewUrl: 'https://room-homepage-master-roger2405.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/room-homepage-master',
        imageSrc: RoomHomepageScreenshot
    },
    {
        name: "Countries - Rest API",
        skills: [
            "JavaScript", "TypeScript", "HTML5", "ReactJS", "CSS3"
        ],
        previewUrl: 'https://rest-countries-roger2405.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/rest-countries',
        imageSrc: RestCountriesScreenshot
    },
    {
        name: "Space - Homepage",
        skills: [
            "JavaScript", "TypeScript", "HTML5", "ReactJS", "CSS3"
        ],
        previewUrl: 'https://space-tourism-website-vert.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/space-tourism-website',
        imageSrc: SpaceHomepageScreenshot
    },
    {
        name: "Chat App CSS",
        skills: [
            "HTML5", "CSS3"
        ],
        previewUrl: 'https://chat-app-challenge-roger2405.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/chat-app-challenge',
        imageSrc: ChatAppCSSScreenshot
    },
    {
        name: "Tic Tac Toe - React",
        skills: [
            "JavaScript", "TypeScript", "HTML5", "ReactJS", "CSS3"
        ],
        previewUrl: 'https://tictactoe-react-roger2405.vercel.app/',
        repoUrl: 'https://github.com/Roger2405/tictactoe-react',
        imageSrc: TicTacToeScreenshot
    }

]