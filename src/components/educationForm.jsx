function EducationForm({ educations, setEducations }) {
  const addEducation = () => {
    const newEducation = {
      id: crypto.randomUUID(),
      name: "University Name",
      location: "City, City, Country",
      degree: "Degree, e.g. B.Tech in Computer Science and Engineering",
      years: "Start Year - End Year",
    };

    setEducations([...educations, newEducation]);
  };

  const deleteEducation = (educationId) => {
    setEducations(
      educations.filter((education) => education.id !== educationId),
    );
  };

  return (
    <>
      <div className="sidebar-section-header">
        <h2 className="sidebar-section-title">Education</h2>
        <button type="button" onClick={addEducation}>
          Add
        </button>
      </div>
      <div>
        {educations.map(({ id, name, location, degree, years }) => (
          <div key={id} className="form-entry">
            <div className="form-field">
              <label htmlFor="">Institute Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setEducations(
                    educations.map((education) =>
                      education.id === id
                        ? { ...education, name: e.target.value }
                        : education,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) =>
                  setEducations(
                    educations.map((education) =>
                      education.id === id
                        ? { ...education, location: e.target.value }
                        : education,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">degree</label>
              <input
                type="text"
                value={degree}
                onChange={(e) =>
                  setEducations(
                    educations.map((education) =>
                      education.id === id
                        ? { ...education, degree: e.target.value }
                        : education,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">Years</label>
              <input
                type="text"
                value={years}
                onChange={(e) =>
                  setEducations(
                    educations.map((education) =>
                      education.id === id
                        ? { ...education, years: e.target.value }
                        : education,
                    ),
                  )
                }
              />
            </div>

            <button type="button" onClick={() => deleteEducation(id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationForm;
