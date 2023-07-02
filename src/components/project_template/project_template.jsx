import { Tag } from "../tag/tag";
import "./project_template.scss";

export const ProjectTemplate = (prob) => {
  return (
    <div className="project">
      <div className="project-details">
        <h2 className="project-name">{prob.projectName}</h2>
        <span className="project-desc">{prob.decription}</span>
        <div className="tags">
          <h2 className="tech-stack">Technologies Used:</h2>
          <div className="tags-wrapper">
            {prob.tags.map((tag, index) => {
              return <Tag title={tag} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="project-image">
        <img src={prob.img} alt="project-image" />
      </div>
    </div>
  );
};
