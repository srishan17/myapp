import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <aside className="sidebar">
        <h2>Srishanth Ganji</h2>
        <p className="job-title">Frontend Developer 💻</p>
        <p>Email: obiiicodes@gmail.com</p>
        <p>Phone: +91 9100530393</p>
        <p>Location: Hanumakonda, India</p>

        <h3>Skills</h3>
        <ul className="skills-list">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Wordpress and Webflow</li>
          <li>Git & GitHub</li>
        </ul>
      </aside>

      <main className="content">
        <section>
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Frontend Developer - ABC Corp</h3>
            <p>
              <i>Jan 2022 - Present</i>
            </p>
            <p>
              Developed responsive websites, optimized UI/UX, and worked with
              React.js.
            </p>
          </div>
          <div className="experience-item">
            <h3>Web Developer Intern - XYZ Solutions</h3>
            <p>
              <i>Jun 2021 - Dec 2021</i>
            </p>
            <p>
              Assisted in building landing pages and implemented SEO best
              practices.
            </p>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor's in Computer Science</h3>
            <p>
              <i>2018 - 2022</i>
            </p>
            <p>University of New York</p>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Portfolio Website</h3>
            <p>Built a personal portfolio using React and CSS.</p>
          </div>
          <div className="project-item">
            <h3>E-commerce Landing Page</h3>
            <p>
              Designed and developed an interactive landing page for an online
              store.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
