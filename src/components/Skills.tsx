import data from '../data';

type SkillGroup = keyof typeof data.skills;

const labels: { [label in SkillGroup]: string } = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  infraAndDB: 'Infra & Databases',
  design: 'Design',
};

function Skills() {
  const groups = Object.keys(labels) as SkillGroup[];

  return (
    <section>
      <h2>Skills</h2>
      {groups.map((group) => (
        <div key={group}>
          <h3>{labels[group]}</h3>
          <p>{data.skills[group].join(', ')}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;
