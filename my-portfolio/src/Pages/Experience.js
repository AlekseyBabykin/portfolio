import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
  return (
    <div className="experince">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 July-OCT"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              Full-stack Bootcamp Student
            </h3>
            <br />
            <li> Backend: Python, Node.js, </li>
            <li>
              Frontend: HTML, CSS, React, Java-script DB: SQL/NoSQl, Postgres
            </li>
            <li>Version control: GitHub</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 Sep-2023 Apri"
          iconStyle={{ background: "#3e497a", color: "orange" }}
          icon={<SchoolIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              Java Masa Program
            </h3>
            <br />
            <li> Java, object-oriented and multithreaded programming</li>
            <li>Version control: GitHub</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 Jan-2023 May"
          iconStyle={{ background: "#3e588a", color: "dark" }}
          icon={<SchoolIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <br />

            <li>
              Power_Bi, google-sheets, SQL (connection, grouping, adding, etc.)
            </li>
            <li>
              Metrics for collecting data such as: google-analyst; Python
              (Numpy, Pandas,)
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2022"
          iconStyle={{ background: "#e9d35b", color: "dark" }}
          icon={<WorkIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              ”AM group” - Technical consultant in the construction sector
            </h3>
            <br />
            <li>
              Look for customers, analyze the month sales, and predict sale
              plans for the future months; Manage all logistical and
              organizational aspects of the sale
            </li>
            <li>
              Negotiate with suppliers and customers; Organize employees
              training
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2022"
          iconStyle={{ background: "#e9d35b", color: "dark" }}
          icon={<WorkIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              ”Luxnrg” : Sales manager in the energy sector
            </h3>
            <br />
            <li>
              Manage the sales throughout various industries: metallurgy,
              lumber, and mining industry
            </li>
            <li>
              Cooperate with foreign companies from Germany, Italy, China,
              Sweden, France
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="5 years"
          iconStyle={{ background: "#e9d35b", color: "dark" }}
          icon={<SchoolIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              Saint Petersburg State Polytechnic University
            </h3>
            <br />
            <li>Master degree - engineer of gas turbines and engines</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
