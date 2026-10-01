function ExperienceForm({ experiences, setExperiences }) {
  const addExperience = () => {
    const newExperience = {
      id: crypto.randomUUID(),
      title: "Job Title",
      startMonthYear: "Start Month Year",
      endMonthYear: "End Month Year",
      companyName: "Company Name",
      city: "City",
      country: "Country",
      pointers: [
        {
          id: crypto.randomUUID(),
          text: "Achievement or responsibility 1",
        },
        {
          id: crypto.randomUUID(),
          text: "Achievement or responsibility 2",
        },
        {
          id: crypto.randomUUID(),
          text: "Achievement or responsibility 3",
        },
      ],
    };

    setExperiences([...experiences, newExperience]);
  };

  const deleteExperience = (experienceId) => {
    setExperiences(
      experiences.filter((experience) => experience.id !== experienceId),
    );
  };

  const deletePointer = (experienceId, pointerId) => {
    const experience = experiences.find(
      (experience) => experience.id === experienceId,
    );

    const pointers = experience.pointers.filter(
      (pointer) => pointer.id !== pointerId,
    );

    setExperiences(
      experiences.map((experience) =>
        experience.id === experienceId
          ? { ...experience, pointers: pointers }
          : experience,
      ),
    );
  };

  const addPointer = (experienceId) => {
  const newPointer = {
    id: crypto.randomUUID(),
    text: "New achievement or responsibility",
  };

  setExperiences(
    experiences.map((experience) =>
      experience.id === experienceId
        ? { ...experience, pointers: [...experience.pointers, newPointer] }
        : experience,
    ),
  );
};

  return (
    <>
      <div className="sidebar-section-header">
        <h2 className="sidebar-section-title">Experience</h2>
        <button type="button" onClick={addExperience}>
          Add
        </button>
      </div>
      <div>
        {experiences.map(
          ({
            id: experienceId,
            title,
            startMonthYear,
            endMonthYear,
            companyName,
            city,
            country,
            pointers,
          }) => (
            <div key={experienceId} className="form-entry">
              <div className="form-field">
                <label htmlFor="">Job Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setExperiences(
                      experiences.map((experience) =>
                        experience.id === experienceId
                          ? { ...experience, title: e.target.value }
                          : experience,
                      ),
                    )
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="">Starting Month And Year</label>
                <input
                  type="text"
                  value={startMonthYear}
                  onChange={(e) =>
                    setExperiences(
                      experiences.map((experience) =>
                        experience.id === experienceId
                          ? { ...experience, startMonthYear: e.target.value }
                          : experience,
                      ),
                    )
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="">Ending Month And Year</label>
                <input
                  type="text"
                  value={endMonthYear}
                  onChange={(e) =>
                    setExperiences(
                      experiences.map((experience) =>
                        experience.id === experienceId
                          ? { ...experience, endMonthYear: e.target.value }
                          : experience,
                      ),
                    )
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) =>
                    setExperiences(
                      experiences.map((experience) =>
                        experience.id === experienceId
                          ? { ...experience, companyName: e.target.value }
                          : experience,
                      ),
                    )
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) =>
                    setExperiences(
                      experiences.map((experience) =>
                        experience.id === experienceId
                          ? { ...experience, city: e.target.value }
                          : experience,
                      ),
                    )
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) =>
                    setExperiences(
                      experiences.map((experience) =>
                        experience.id === experienceId
                          ? { ...experience, country: e.target.value }
                          : experience,
                      ),
                    )
                  }
                />
              </div>

              <div>
                <div className="pointer-header">
                  <span>Achievements or responsibilities</span>
                  <button
                    type="button"
                    onClick={() => addPointer(experienceId)}
                  >
                    Add
                  </button>
                </div>

                {pointers.map(({ id, text }) => (
                  <div key={id} className="form-field">
                    <input
                      type="text"
                      value={text}
                      onChange={(e) =>
                        setExperiences(
                          experiences.map((experience) =>
                            experience.id === experienceId
                              ? {
                                  ...experience,
                                  pointers: experience.pointers.map(
                                    (pointer) =>
                                      pointer.id === id
                                        ? { ...pointer, text: e.target.value }
                                        : pointer,
                                  ),
                                }
                              : experience,
                          ),
                        )
                      }
                    />
                    <button
                      type="button"
                      onClick={() => deletePointer(experienceId, id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => deleteExperience(experienceId)}
              >
                Delete
              </button>
            </div>
          ),
        )}
      </div>
    </>
  );
}

export default ExperienceForm;
