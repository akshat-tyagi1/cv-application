function Projects({ projects }) {
  return (
    <section className="resume-section">
      <h2>PROJECTS</h2>
      {projects.map(({ id, title, monthYear, technologies, pointers }) => (
        <article key={id} className="entry">
          <div className="entry-header">
            <h3>{title}</h3>
            <span>{monthYear}</span>
          </div>

          <div className="entry-details">
            <p>{technologies}</p>
          </div>
          <ul className="entry-points">
            {pointers.map(({ id, text }) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Projects;
