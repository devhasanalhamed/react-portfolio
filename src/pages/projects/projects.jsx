import { useState } from "react";
import { ProjectTemplate } from "../../components/project_template/project_template";
import "./projects.scss";
import adminProject from "../../assets/project.jpg";
export const Projects = () => {
  const [tags] = useState([
    "React",
    "CSS/SCSS",
    "Node.js",
    "Express",
    "More...",
  ]);
  return (
    <div className="projects-wrapper">
      <div></div>
      <ProjectTemplate
        projectName="Admint Dashboard"
        projectDescription="Project description"
        tags={tags}
        img={adminProject}
      />
      <ProjectTemplate
        projectName="Admint Dashboard"
        projectDescription="Project description"
        tags={tags}
        img={adminProject}
      />
      <ProjectTemplate
        projectName="Admint Dashboard"
        projectDescription="Project description"
        tags={tags}
        img={adminProject}
      />
      <div></div>
    </div>
  );
};
