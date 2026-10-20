export const personalInfo = {
  name: 'Inderpal Singh',
  designation: 'Senior Software Engineer',

  summary: `Full-stack software engineer with nearly 5 years of experience.
    Worked on Java / Spring Boot and React. Also built personal projects with
    Node.js and Express. Interested in full stack roles in Java or Node.js
    backend.`,
  email: 'inderpalsingh423@gmail.com',
  phoneNo: '+91 80532 66868',
  links: [
    { title: 'LinkedIn', url: 'linkedin.com/in/isingh6022' },
    { title: 'GitHub', url: 'github.com/isingh6022' },
  ],
};

export const skills = {
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
export const education: Education[] = [
  {
    institute: 'IIT Roorkee',
    start: 2010,
    end: 2014,
    discipline: 'B. Tech. Civil Engineering',
  },
  {
    institute: 'U.B.S., Panjab University',
    start: 2019,
    end: 2021,
    discipline: 'M.B.A.',
  },
];

interface Achievement {
  title: string;
  text: string;
}
export const achievements: Achievement[] = [
  {
    title: 'Trailblazer',
    text:
      'Awarded "Trailblazer" rating at Accolite - ' +
      'the highest organizational rating',
  },
  { title: 'JEE Advanced (IIT-JEE)', text: 'All India Rank 1923' },
  { title: 'JEE Mains (AIEEE)', text: 'All India Rank 423' },
];
