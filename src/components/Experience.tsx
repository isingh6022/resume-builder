import data from '../data';

function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      {data.experience.map((job) => (
        <div key={job.company}>
          <h3>
            {job.designation} | {job.company}
          </h3>
          <p>
            {job.start} – {job.end}
          </p>
          <ul>
            {job.bullets.map((bullet) => (
              <li key={bullet.text}>
                {bullet.title && <strong>{bullet.title}: </strong>}
                {bullet.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
