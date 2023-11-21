import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Aleksei</h2>
        <div className="prompt">
          <p>
            I'm a Full Stack Developer with a background in both server-side and
            client-side in the field of web development. My technical skills are
            complemented by a creative approach to problem-solving, allowing me
            to find innovative solutions to address business needs effectively.
          </p>
          <a href="https://www.linkedin.com/in/aleksei-babykin-19002024b/">
            <LinkedInIcon />
          </a>
          <EmailIcon />
          <a href="https://github.com/AlekseyBabykin">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, ReactJS, BootStrap, Ionic, StyledComponents</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Python-Django, mySQL, PGAdmin (Postgres), SQL/noSQl , AWS
              : (SNS, SQS, S3, RDS, Lambda)
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,TypeScript, Python, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
