interface Project {
  title: string;
  url: string;
  description: string;
  technologies: string;
}
export const projects: Project[] = [
  {
    title: 'REST API with JWT Auth demo project',
    url: 'https://github.com/isingh6022/ts-express-rest-jwt',
    description: `Demo REST API server using Node JS and Express. The project
      has layered architecture. It uses JWT for authentication. Hand-written
      in 2024.`,
    technologies: 'Node.js, Express, JWT, Joi',
  },
  {
    title: 'Bookmark Manager (Chrome Extension)',
    url: 'https://github.com/isingh6022/bookmark-manager',
    description: `Browser extension providing online/offline bookmark
      management, currently maintaining ~2,500 users on the Chrome Web Store.
      Hand-written, 2024.`,
    technologies: 'React, Redux, Express',
  },
  {
    title: 'AI Agent Evaluation Task (Harbor)',
    url: 'https://github.com/isingh6022/harbor-ai-test',
    description: `Harbor task that asks an AI agent to implement a task in a
      Docker sandbox, then grades it with pytest correctness checks and
      benchmarks its performance. It includes results for the provided
      solution and also results for the solution by Claude.`,
    technologies: 'Python, Harbor, Docker, pytest',
  },
  {
    title: 'Machine Learning demo project',
    url: 'https://github.com/isingh6022/telco-churn-logistic-reg-ai',
    description: `Logistic regression model that predicts telecom customer
      churn (ROC AUC 0.8), explains its drivers with odds ratios, and serves
      predictions through a Dockerized FastAPI service. It is modelled on
      the data provided by IBM.`,
    technologies: 'Python, scikit-learn, pandas, FastAPI, Docker',
  },
];
