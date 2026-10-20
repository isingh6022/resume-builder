interface Experience {
  designation: string;
  company: string;
  start: string;
  end: string;
  bullets: { title?: string; text: string }[];
}
export const experience: Experience[] = [
  {
    designation: 'Senior Software Engineer',
    company: 'Accolite Digital India Pvt. Ltd.',
    start: 'Oct 2024',
    end: 'Oct 2026',
    bullets: [
      {
        title: 'Full Stack Microservices Project',
        text: `Developed front-end components using React and worked on a
          microservices backend deployed on a Kubernetes cluster. Implemented
          Cube.js for performance caching, optimized complex PostgreSQL
          queries and maintained event-driven pipelines using Apache Kafka.`,
      },
      {
        title: 'Next.js Frontend',
        text: `Built a web application deployed on Vercel using React and
          Next.js, integrated with external APIs and using Jest for testing.`,
      },
      {
        title: 'AI Database Administration Tool',
        text: `Extended the UI of an existing Java Swing database application
          to integrate AI tools, appending default context to prompts based
          on user permissions.`,
      },
    ],
  },
  {
    designation: 'Senior Software Engineer',
    company: 'Stonewain Systems Pvt. Ltd.',
    start: 'Dec 2021',
    end: 'Sep 2024',
    bullets: [
      {
        text: `Created configurable TypeScript components in line with the
          event-driven architecture of internal frontend libraries.`,
      },
      {
        text: `Developed REST APIs using Spring Boot and JPA, and
          maintained servers using the Struts framework with JDBC
          for database connectivity.`,
      },
      {
        text: `Built features spanning the front end and backend, such as
          support for concurrent users across related pages and endpoints.`,
      },
      {
        text: `Worked on backend tasks and with databases using
          Oracle SQL and PL/SQL.`,
      },
    ],
  },
];
