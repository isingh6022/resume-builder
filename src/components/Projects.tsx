import data from '../data';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {data.projects.map((project) => (
        <div key={project.url}>
          <h3>{project.title}</h3>
          <p>
            <a href={project.url}>{project.url.replace(/^https?:\/\//, '')}</a>
          </p>
          <p>{project.description}</p>
          <p>
            <strong>Technologies:</strong> {project.technologies}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
