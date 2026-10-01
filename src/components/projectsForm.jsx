function ProjectsForm({ projects, setProjects }) {
  const addProject = () => {
    const newProject = {
      id: crypto.randomUUID(),
      title: "Project Title",
      monthYear: "Month Year",
      technologies: "Technologies used e.g. JavaScript, HTML, CSS",
      pointers: [
        {
          id: crypto.randomUUID(),
          text: "Short description or achievement 1",
        },
        {
          id: crypto.randomUUID(),
          text: "Short description or achievement 2",
        },
        {
          id: crypto.randomUUID(),
          text: "Short description or achievement 3",
        },
      ],
    };

    setProjects([...projects, newProject]);
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  const deletePointer = (projectId, pointerId) => {
    const project = projects.find((project) => project.id === projectId);

    const pointers = project.pointers.filter(
      (pointer) => pointer.id !== pointerId,
    );

    setProjects(
      projects.map((project) =>
        project.id === projectId ? { ...project, pointers: pointers } : project,
      ),
    );
  };

  const addPointer = (projectId) => {
    const newPointer = {
      id: crypto.randomUUID(),
      text: "New Short description or achievement",
    };

    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? { ...project, pointers: [...project.pointers, newPointer] }
          : project,
      ),
    );
  };

  return (
    <>
      <div className="sidebar-section-header">
        <h2 className="sidebar-section-title">Projects</h2>
        <button type="button" onClick={addProject}>
          Add
        </button>
      </div>
      <div>
        {projects.map(
          ({ id: projectId, title, monthYear, technologies, pointers }) => (
            <div key={projectId} className="form-entry">
              <div className="form-field">
                <label htmlFor="">Project Name</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setProjects(
                      projects.map((project) =>
                        project.id === projectId
                          ? { ...project, title: e.target.value }
                          : project,
                      ),
                    )
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="">Date</label>
                <input
                  type="text"
                  value={monthYear}
                  onChange={(e) =>
                    setProjects(
                      projects.map((project) =>
                        project.id === projectId
                          ? { ...project, monthYear: e.target.value }
                          : project,
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
                    setProjects(
                      projects.map((project) =>
                        project.id === projectId
                          ? { ...project, technologies: e.target.value }
                          : project,
                      ),
                    )
                  }
                />
              </div>

              <div>
                <div className="pointer-header">
                  <span>Short descriptions or achievements</span>
                  <button type="button" onClick={() => addPointer(projectId)}>
                    Add
                  </button>
                </div>
             
                {pointers.map(({ id, text }) => (
                  <div key={id} className="form-field">
                    <input
                      type="text"
                      value={text}
                      onChange={(e) =>
                        setProjects(
                          projects.map((project) =>
                            project.id === projectId
                              ? {
                                  ...project,
                                  pointers: project.pointers.map((pointer) =>
                                    pointer.id === id
                                      ? { ...pointer, text: e.target.value }
                                      : pointer,
                                  ),
                                }
                              : project,
                          ),
                        )
                      }
                    />
                    <button
                      type="button"
                      onClick={() => deletePointer(projectId, id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

              <button type="button" onClick={() => deleteProject(projectId)}>
                Delete
              </button>
            </div>
          ),
        )}
      </div>
    </>
  );
}

export default ProjectsForm;
