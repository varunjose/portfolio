import work1 from '../../assets/work1.jpg';
// import work2 from '../../assets/work2.webp';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';
import work6 from '../../assets/work6.png';
import work7 from '../../assets/work7.png';

export const projectsData = [
    {
        id: 1,
        image: work6,
        title: 'GivAura - AI Gift Discovery',
        subtitle: 'AI-powered gift recommendation platform with 85% accuracy using React, TypeScript, FastAPI, and OpenAI.',
        category: 'AI & Machine Learning',
        link: 'https://giv-aura.com',
    },
    {
        id: 2,
        image: work7,
        title: 'AI Semantic Book Recommender',
        subtitle: 'Semantic search system for 10,000+ books with emotion-based personalization using OpenAI embeddings and ChromaDB.',
        category: 'AI & Machine Learning',
        link: 'https://github.com/varunjose/SemanticBookRecommender',
    },
    {
        id: 3,
        image: work5,
        title: 'Mobile Recommender App',
        subtitle: 'Product recommendation app with intelligent suggestions based on user preferences and behavior patterns.',
        category: 'React Applications',
        link: 'https://github.com/varunjose/MobileRecommender',
    },
    {
        id: 4,
        image: work4,
        title: 'FinanceMate',
        subtitle: 'Personal finance management application for tracking expenses, savings, and financial goals.',
        category: 'React Applications',
        link: 'https://github.com/varunjose/FinanceMate',
    },
    {
        id: 5,
        image: work1,
        title: 'Portfolio Website',
        subtitle: 'Modern portfolio with dark/light theme, Framer Motion animations, and Apple-inspired design.',
        category: 'React Applications',
        link: 'https://github.com/varunjose/portfolio',
    }
];

export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'AI & Machine Learning',
    },
    {
        name: 'React Applications',
    }
]