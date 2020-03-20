import { aboutPiece } from 'src/models/aboutPiece';

export const ABOUT: aboutPiece[] = [
    {
        id: 0,
        title: 'Intro',
        text: `I am young, ambitious man with two passions. \nOne is programming, what is filling up most of my free time. 
            This onekeep my brain "in shape" and give me something interesting between daily monotone.
            \nAnother one is windsurfing/surfing, what help my body stay fit and healthy but also pay my bills at  this moment.`,
        imageUrl: './assets/img/me.JPG',
        imageAlt: 'Profile photo'
    },
    {
        id: 1,
        title: 'Story',
        text: `Since school I knew that I want to work on creating new applications. I tried to develop my first small  scripts at this  time.\n
        After high school I started studying informatics on University of Technology in Wroclaw. As long as I was member, I enjoyed subjects, always
    tried to make my projects working well and as easily written as was possible. \n
    I found my first job like a backend java developer on second year of studies.`,
        imageUrl: './assets/img/sup.JPG',
        imageAlt: 'SUP photo'
    },
    {
        id: 2,
        title: 'SurfStory',
        text: `Starting third year ofmy studies I have got unrepeatable opportunity to get better in another of my passions. \n
        I left abroad to work like windsurfing and surfing instructor as long as I was still young enough with strenght and health for extreme sports.`,
        imageUrl: './assets/img/flaka.JPG',
        imageAlt: 'Flaka photo'
    },
    {
        id: 3,
        title: 'Summary',
        text: `Now came the time when I achieved most of what I could in this place and I am looking for opportunities to grow in oter direction.\n
        I like to analyze how things works as always enjoyed working on backed of my applications. Even if often I have a problem  with choosing right font or color for UI,
    I thread it like another challenge and with small help of uncle google and aunt stackoverflow I am work on my projects until the end.`,
        imageUrl: './assets/img/screen_shoot.JPG',
        imageAlt: 'Screenshoot'
    }
]

// export function findTextById(textId: number) {
//     return ABOUT.find(about => about.id == textId);
// }
import {project} from 'src/models/project'

export const PROJECTS: project[] = [
    {
        id: 0,
        category: 'full-stack',
        avatarLink: './assets/img/reneegli_logo.png',
        altAvatar: 'Rene Egli logo',
        title: 'Material control system.',
        subtitle: 'Python, HTML, CSS',
        description: 'Web application taking care about organising material in company. Handling all operations only by serial number of equipment.',
        hostLink: 'http://simonnaish3.pythonanywhere.com/',
        githubLink: 'https://github.com/simonnaish/SailsCounterDjango/tree/master/SailsCounterDjango'
    },
    {
        id: 1,
        category: 'frontend',
        avatarLink: './assets/img/flaka.JPG',
        altAvatar: 'Flaka logo',
        title: 'Portfolio.',
        subtitle: 'Angular, HTML, CSS, TS',
        description: 'Website contains short information about me, my projects, CV and contact details.',
        hostLink: null,
        githubLink: 'https://github.com/simonnaish/portfolio'
    },
    {
        id: 2,
        category: 'full-stack',
        avatarLink: './assets/img/reneegli_logo.png',
        altAvatar: 'Rene Egli logo',
        title: 'Improved application for windsurfing center.',
        subtitle: 'Angular, Django, DRF, Python, HTML, CSS, TS',
        description: 'Web application taking care about organising material in company. Handling all operations only by serial number of equipment.',
        hostLink: null,
        githubLink: null
    }
]