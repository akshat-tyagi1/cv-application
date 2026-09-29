function Experience({ experiences }) {
  return (
    <section className="resume-section">
      <h2>EXPERIENCE</h2>

      {experiences.map(
        ({
          id,
          title,
          startMonthYear,
          endMonthYear,
          companyName,
          city,
          country,
          pointers,
        }) => (
          <article key={id} className="entry">
            <div className="entry-header">
              <h3>{title}</h3>
              <span>
                {startMonthYear} – {endMonthYear}
              </span>
            </div>

            <div className="entry-details">
              <p>{companyName}</p>
              <span>
                {city}, {country}
              </span>
            </div>

            <ul className="entry-points">
              {pointers.map(({id, text}) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </article>
        ),
      )}
    </section>
  );
}

export default Experience;
