import Work from './Work';
import jobs from '../data/jobs.json';

export default function Experience() {
  const { values } = jobs;
  const works = values.map((job) => <Work key={job.index} {...job} />);

  return (
    <section>
      <h2>Work</h2>
      {works}
    </section>
  );
}
