function Education({ educations }) {
  return (
    <section className="resume-section">
      <h2>EDUCATION</h2>

      <div>
        {educations.map(
          ({ id, name, location, degree, years }) => (
            <article className="entry" key={id}>
              <div className="entry-header">
                <h3>{name}</h3>
                <span>
                  {location}
                </span>
              </div>

              <div className="entry-details">
                <p>{degree}</p>
                <span>
                  {years}
                </span>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}

export default Education;
