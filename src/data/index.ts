import { experience } from './experience';
import { projects } from './projects';

const personalInfo = {
  name: 'Inderpal Singh',
  designation: 'Senior Software Engineer',

  totalExperience: '4 years 11 months',
  summary: `Full-Stack Software Engineer (Java | Spring | JavaScript | React).`,
  email: 'inderpalsingh423@gmail.com',
  phoneNo: '+91 80532 66868',
  links: [
    { title: 'LinkedIn', url: 'linkedin.com/in/isingh6022' },
    { title: 'GitHub', url: 'github.com/isingh6022' },
  ],
};

const skills = {
  languages: ['Java', 'JavaScript', 'TypeScript'],
  frameworks: ['Spring Boot', 'JPA', 'Node.js', 'Express', 'React', 'Next.js'],
  design: ['Design Patterns', 'OOP', 'Data Structures and Algorithms'],
  infraAndDB: [
    'Kubernetes',
    'Kafka',
    'Docker',
    'PostgreSQL',
    'Oracle SQL',
    'PL/SQL',
    'Webpack',
  ],
};

interface Education {
  institute: string;
  start: number;
  end: number;
  discipline: string;
}
const education: Education[] = [
  {
    institute: 'IIT Roorkee',
    start: 2010,
    end: 2014,
    discipline: 'B. Tech. Civil Engineering',
  },
  {
    institute: 'University Business School, Panjab University',
    start: 2019,
    end: 2021,
    discipline: 'M.B.A.',
  },
];

interface Achievement {
  title: string;
  text: string;
}
const achievements: Achievement[] = [
  {
    title: 'Trailblazer',
    text:
      'Awarded "Trailblazer" rating at Accolite - ' +
      'the highest organizational rating',
  },
  { title: 'JEE Advanced (IIT-JEE)', text: 'All India Rank 1923' },
  { title: 'JEE Mains (AIEEE)', text: 'All India Rank 423' },
];

const data = {
  personalInfo,
  skills,
  education,
  achievements,
  experience,
  projects,
};

export default data;
