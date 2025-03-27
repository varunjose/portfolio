import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';
import work4 from '../../assets/work4.jpg';


export const projectsData = [
    {
        id: 1,
        image: work1,
        title: 'Portfolio',
        subtitle: 'Created my personal portfolio using ReactJS',
        category: 'Web',
        link: 'https://github.com/varunjose/portfolio',
    },
    {
        id: 2,
        image: work2,
        title: 'Sleep Apnea Detection',
        subtitle: 'Developed a deep learning model for predicting obstructive sleep apnea.',
        category: 'Machine Learning',
        link: "https://github.com/varunjose/SleepApneaPrediction",
    },
    {
        id: 3,
        image: work3,
        title: 'E-commerce',
        category: 'Web',
        link: 'https://www.google.com',
    },
    {
        id: 4,
        image: work4,
        title: 'ML model',
        category: 'Machine Learning',
        link : 'https://www.google.com',
    }
];

export const projectsNav = [
    {
        name: 'All',
    }
    , {
        name: 'Web',
    }
    , {
        name: 'Machine Learning',
    }
]