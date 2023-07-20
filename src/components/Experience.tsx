import Work from './Work';
import jobs from '../data/jobs.json';

export default function Experience() {
  const { values } = jobs;
  const works = values.map((job) => <Work key={job.index} {...job} />);

  return (
    <section className="Experience">
      <h3>Work</h3>
      {works}
    </section>
  );
}
