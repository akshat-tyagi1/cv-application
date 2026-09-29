import { useState } from "react";
import GeneralInfo from "./components/genereralInfo";
import Educations from "./components/educations";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Achievements from "./components/achievement";
import Sidebar from "./components/sidebar";
import Summary from "./components/summary";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Your Name",
    email: "your.email@example.com",
    contactNumber: "+XX XXXXX XXXXX",
    location: "Your City, State",
    linkedin: "linkedin.com/in/yourusername",
    github: "github.com/yourusername",
  });

  const [summary, setSummary] = useState(
    "Write a short 1-2 line summary about yourself, your interests, and what you're looking for.",
  );

  const [educations, setEducations] = useState([
    {
      id: crypto.randomUUID(),
      name: "University Name",
      location: "City, City, Country",
      degree: "Degree, e.g. B.Tech in Computer Science and Engineering",
      years: "Start Year - End Year",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: crypto.randomUUID(),
      category: "Languages",
      technologies: "e.g. JavaScript, Python, C, C++",
    },
    {
      id: crypto.randomUUID(),
      category: "Frontend",
      technologies: "e.g. React, HTML, CSS, Tailwind CSS, Next.js",
    },
    {
      id: crypto.randomUUID(),
      category: "Backend",
      technologies: "e.g. Node.js, Express, REST APIs",
    },
    {
      id: crypto.randomUUID(),
      category: "Databases",
      technologies: "e.g. PostgreSQL, MongoDB, Prisma",
    },
    {
      id: crypto.randomUUID(),
      category: "Tools",
      technologies: "e.g. Git, Github, VS Code, Figma, Docker",
    },
    {
      id: crypto.randomUUID(),
      category: "Other",
      technologies: "e.g. Data Structures & Algorithms, Problem Solving, Linux",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
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
    },
  ]);

  const [projects, setProjects] = useState([
    {
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
    },
    {
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
    },
    {
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
    },
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: crypto.randomUUID(),
      text: "New Achievement",
    },
    {
      id: crypto.randomUUID(),
      text: "New Achievement",
    },
    {
      id: crypto.randomUUID(),
      text: "New Achievement",
    },
  ]);

  return (
    <div className="app-layout">
      <Sidebar
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        summary={summary}
        setSummary={setSummary}
        educations={educations}
        setEducations={setEducations}
        skills={skills}
        setSkills={setSkills}
        experiences={experiences}
        setExperiences={setExperiences}
        projects={projects}
        setProjects={setProjects}
        achievements={achievements}
        setAchievements={setAchievements}
      />

      <div className="resume-preview">
        <GeneralInfo generalInfo={generalInfo} />
        <Summary summary={summary} />
        <Educations educations={educations} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Achievements achievements={achievements} />
      </div>
    </div>
  );
}

export default App;
