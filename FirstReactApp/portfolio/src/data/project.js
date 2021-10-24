import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const PROJECTS = [
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React App that I built, involving JS and core web dev concepts!',
        link: 'https://github.com/pjbiocco/FirstReactApp',
        image: project1
    },

    {
        id: 2, 
        title: 'Connect Reversi',
        description: 'Using a min-max tree, I created an AI that plays a game!',
        link: 'https://github.com/pjbiocco/ConnectReversiAI',
        image: project2
    },

    {
        id: 3,
        title: 'Generalizable Min, Max Tree Application',
        description: 'This is something I made to help create mix-max trees for any 2 player game! It\'s still in the ServiceWorkerRegistration, though!',
        link: 'https://github.com/GamingAIResources/Opponent-AI-Model',
        image: project3
    }


];

export default PROJECTS;