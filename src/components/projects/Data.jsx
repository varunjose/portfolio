import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.webp';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';


export const projectsData = [
    {
        id: 1,
        image: work1,
        title: 'Portfolio',
        subtitle: 'Created my personal portfolio using ReactJS',
        category: 'React Applications',
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
        image: work5,
        title: 'Mobile Recommender App',
        subtitle: 'A mobile recommender app that suggests products based on user preferences.',
        category: 'React Applications',
        link: 'https://github.com/varunjose/MobileRecommender',
    },
    {
        id: 4,
        image: work4,
        title: 'Finance Mate',
        subtitle: 'A personal finance management application that helps users track their expenses and savings.',
        category: 'React Applications',
        link : 'https://github.com/varunjose/FinanceMate',
    }
];

export const projectsNav = [
    {
        name: 'All',
    }
    , {
        name: 'React Applications',
    }
    , {
        name: 'Machine Learning',
    }
]