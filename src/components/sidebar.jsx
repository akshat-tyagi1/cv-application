import GeneralInfoForm from "./generalInfoForm";
import SummaryForm from "./summaryForm";
import EducationForm from "./educationForm";
import SkillsForm from "./skillsForm";
import ExperienceForm from "./experienceForm";
import ProjectsForm from "./projectsForm";
import AchievementsForm from "./achievementsForm";

function Sidebar({
  generalInfo,
  setGeneralInfo,
  summary,
  setSummary,
  educations,
  setEducations,
  skills,
  setSkills,
  experiences,
  setExperiences,
  projects,
  setProjects,
  achievements,
  setAchievements,
}) {
  return (
    <div className="sidebar">
      <h2>Edit Your Resume</h2>

      <form
        action=""
        className="sidebar-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="sidebar-section">
          <h2 className="sidebar-section-title">General Info</h2>
          <GeneralInfoForm
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
        </div>

        <div className="sidebar-section">
          <h2 className="sidebar-section-title">Summary</h2>
          <SummaryForm summary={summary} setSummary={setSummary} />
        </div>

        <div className="sidebar-section">
          <EducationForm
            educations={educations}
            setEducations={setEducations}
          />
        </div>

        <div className="sidebar-section">
          <SkillsForm skills={skills} setSkills={setSkills} />
        </div>

        <div className="sidebar-section">
          <ExperienceForm
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </div>

        <div className="sidebar-section">
          <ProjectsForm projects={projects} setProjects={setProjects} />
        </div>

        <div className="sidebar-section">
          <AchievementsForm
            achievements={achievements}
            setAchievements={setAchievements}
          />
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
