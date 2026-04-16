import work1 from '../../assets/work1.jpg';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';
import work6 from '../../assets/work6.png';
import work7 from '../../assets/work7.png';

export const projectsData = [
  {
    id: 1,
    image: work6,
    title: 'Agentic Real-Time Streaming Intelligence',
    subtitle: 'Built a distributed RTP/UDP streaming system with packetization, observability, and sub-500ms adaptive control under changing network conditions.',
    category: 'Systems & Networking',
    link: 'https://github.com/varunjose',
  },
  {
    id: 2,
    image: work7,
    title: 'Multi-Client TCP Chat System',
    subtitle: 'Concurrent C/Linux chat server using BSD sockets, select() multiplexing, CRC32 error detection, and Hamming(7,4) correction.',
    category: 'Systems & Networking',
    link: 'https://github.com/varunjose',
  },
  {
    id: 3,
    image: work5,
    title: 'OSA Prediction Inference System',
    subtitle: 'TensorFlow and OpenCV desktop inference pipeline delivering sub-200ms OSA predictions from facial depth maps with H.265-compatible encoding.',
    category: 'AI & Machine Learning',
    link: 'https://github.com/varunjose',
  },
  {
    id: 4,
    image: work4,
    title: 'FinanceMate',
    subtitle: 'Production full-stack finance app deployed with cloud infrastructure and CI/CD, helping reduce release cycles from hours to minutes.',
    category: 'Full-Stack & Cloud',
    link: 'https://github.com/varunjose/FinanceMate',
  },
  {
    id: 5,
    image: work1,
    title: 'MobileRecommender',
    subtitle: 'Recommendation application built with React, backend APIs, and cloud deployment patterns for production-style user personalization.',
    category: 'Full-Stack & Cloud',
    link: 'https://github.com/varunjose/MobileRecommender',
  },
];

export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'AI & Machine Learning',
  },
  {
    name: 'Systems & Networking',
  },
  {
    name: 'Full-Stack & Cloud',
  },
];
