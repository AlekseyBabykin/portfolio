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
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h3>”IGA Tech”</h3>

            <li>
              Development of a food ordering project in React in collaboration
              with another developer. The project includes the selection and
              addition of dishes to the cart, order checkout with contact
              details and delivery address, user authentication and
              registration.
            </li>
            <br />
            <li>
              TypeScript, Node.js, HTML, CSS, React, Java-script, SQL/NoSQl,
              Postgresql, AWS(SNS, SQS, S3, RDS, Lambda)
            </li>
            <br />
            <li>Version control: GitHub</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#3e497a", color: "orange" }}
          icon={<WorkIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">Date Analyst</h3>
            <h3>”EXPOFORUM”</h3>

            <li>
              {" "}
              Working with the database. Plotting graphs. Providing different
              samples. Increase in sales metrics. Increase customer loyalty.
            </li>
            <br />
            <li>SQL/NoSQL, Python, Postgresql, PowerBI</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2021"
          iconStyle={{ background: "#3e588a", color: "dark" }}
          icon={<WorkIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              Technical consultant in the construction sector{" "}
            </h3>
            <h3>”AM group”</h3>
            <li>
              Searching for customers, analyzing monthly sales, predicting
              future sale plans; Managed all logistical and organizational
              aspects of the sale
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
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 July-November "
          iconStyle={{ background: "#e9d35b", color: "dark" }}
          icon={<SchoolIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              Full-stack Bootcamp Student
            </h3>
            <br />
            <li>
              HTML,CSS, SQL/NoSQL, pgAdmin (Postgresql), Python (Numpy, Pandas,
              Django, Pygame),Node.js, javascript, React, GitHub
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 Sep-2023 Apri"
          iconStyle={{ background: "#e9d35b", color: "dark" }}
          icon={<SchoolIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              Java Masa Program in Israel
            </h3>
            <br />
            <li>
              500 - hour course of Java (Java, object-oriented and multithreaded
              programming)
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 Jan-2021 May"
          iconStyle={{ background: "#e9d35b", color: "dark" }}
          icon={<SchoolIcon />}
        >
          <ul>
            <h3 className="vertical-timeline-element-title">
              Data analysis course
            </h3>
            <br />
            <li>
              600 -hour course (Power_Bi, google-sheets, SQL (connection,
              grouping, adding, etc.))
            </li>
            <br />
            <li>
              Metrics for collecting data such as: google-analyst; Python
              (Numpy, Pandas,)
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
