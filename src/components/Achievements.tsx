import data from '../data';

function Achievements() {
  return (
    <section>
      <h2>Achievements</h2>
      <ul>
        {data.achievements.map((achievement) => (
          <li key={achievement.title}>
            <strong>{achievement.title}:</strong> {achievement.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
