function SkillsForm({ skills, setSkills }) {
  const addSkill = () => {
    const newSkill = {
      id: crypto.randomUUID(),
      category: "category",
      technologies: "technologies",
    };

    setSkills([...skills, newSkill]);
  };

  const deleteSkill = (skillId) => {
    setSkills(skills.filter((skill) => skill.id !== skillId));
  };
  
  return (
    <>
      <div className="sidebar-section-header">
        <h2 className="sidebar-section-title">Skills</h2>
        <button type="button" onClick={addSkill}>
          Add
        </button>
      </div>
      <div>
        {skills.map(({ id, category, technologies }) => (
          <div key={id} className="form-entry">
            <div className="form-field">
              <label htmlFor="">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) =>
                  setSkills(
                    skills.map((skill) =>
                      skill.id === id
                        ? { ...skill, category: e.target.value }
                        : skill,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">Technologies</label>
              <input
                type="text"
                value={technologies}
                onChange={(e) =>
                  setSkills(
                    skills.map((skill) =>
                      skill.id === id
                        ? { ...skill, technologies: e.target.value }
                        : skill,
                    ),
                  )
                }
              />
            </div>

            <button type="button" onClick={() => deleteSkill(id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsForm;
