function AchievementsForm({ achievements, setAchievements }) {
  const addAchievement = () => {
    const newAchievement = {
      id: crypto.randomUUID(),
      text: "New Achievement",
    };

    setAchievements([ ...achievements, newAchievement ]);
  };

  const deleteAchievement = (achievementId) => {
    setAchievements(
      achievements.filter((achievement) => achievement.id !== achievementId),
    );
  };
  return (
    <>
      <div className="sidebar-section-header">
        <h2 className="sidebar-section-title">Achievements</h2>
        <button type="button" onClick={addAchievement}>
          Add
        </button>
      </div>
      <div>
        {achievements.map(({ id, text }, index) => (
          <div key={id} className="form-entry">
            <div className="form-field">
              <label htmlFor="">Achievement {index + 1}</label>
              <input
                type="text"
                value={text}
                onChange={(e) =>
                  setAchievements(
                    achievements.map((achievement) =>
                      achievement.id === id
                        ? { ...achievement, text: e.target.value }
                        : achievement,
                    ),
                  )
                }
              />
              <button
                type="button"
                onClick={() => deleteAchievement(id)}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AchievementsForm;
