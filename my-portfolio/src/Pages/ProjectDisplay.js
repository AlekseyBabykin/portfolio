import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/icons-material/Link";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <b>Skills:</b> {project.skills}
        <a href={project.linkDeploy}>
          <Link />
        </a>
      </p>
      <a href={project.linkGit}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
