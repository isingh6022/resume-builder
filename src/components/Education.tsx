import data from '../data';

function Education() {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {data.education.map((entry) => (
          <li key={entry.institute}>
            <p>
              <strong>{entry.institute}</strong>
            </p>
            <p>
              {entry.discipline} ({entry.start} - {entry.end})
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
