import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="buttons">
  <a href="#contact" className="btn">
    Contact Me
  </a>

  <a href="#projects" className="btn btn-outline">
    View Projects
  </a>

  <a
    href="/resume.pdf"
    download="Pranav Prasad  resume.pdf"
    className="btn"
  >
    Download Resume
  </a>
</div>
      <section className="hero">
        <div className="hero-content">
          <h1>Pranav Prasad</h1>
          <p>
           "Passionate student specializing in Artificial Intelligence and Machine
           Learning, with a strong interest in developing intelligent systems and
           solving real-world problems through technology."
          </p>

          <div className="buttons">
            <a href="#contact" className="btn">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am  Pranav Prasad, and I am a BCA student with a strong interest in web development
          especially React. I am a quick learner with good communication and problem-solving skills.
          I enjoy learning new technologies.and I am eager to gain practical experience and grow in 
          the it field
        </p>

        <p>
          Curious and driven about AI, Machine Learning, and web development,
          I focus on solving real-world problems and aim to become a capable AI engineer
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="card">
            <h3>Programming Languages</h3>
            <p>Python, JavaScript, Java, </p>
          </div>

          <div className="card">
            <h3>Frontend Technologies</h3>
            <p>HTML, CSS, JavaScript, React.js, </p>
          </div>

          <div className="card">
            <h3>Backend Technologies</h3>
            <p>Node.js, Express.js</p>
          </div>

          <div className="card">
            <h3>Tools & Platforms</h3>
            <p>VS Code, Github, Git</p>
          </div>

          <div className="card">
            <h3>Soft Skills</h3>
            <p>Communication Skills, Problem-Solving, Time Management</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Though mind internship</h3>
          <p>
           A skill-building internship that provides hands-on experience, project work, and career exposure for
           students.
          </p>

          <p>
            <strong>Technologies:</strong> React.js, CSS
          </p>

          <a href=" https://github.com/Pranav-prasad-png/thoughtminds-internship-practice.git">
            GitHub Repository
          </a>
        </div>

        <div className="project-card">
          <h3> Portfolio Website</h3>
          <p>
           Personal website showcasing my projects, skills, and achievements.
          </p>

          <p>
            <strong>Technologies:</strong> React.js, CSS, JavaScript
          </p>

          <a href=" https://github.com/Pranav-prasad-png/thoughtminds-internship-practice.git">
            GitHub Repository
          </a>
        </div>
      </section>

      {/* Internship */}
      <section className="section">
        <h2>Experience / Internship</h2>

        <div className="card">
          <h3>AI & Matchine Learning Internship</h3>
          <p>Thougthminds</p>

          <ul>
            <li>Worked on AI and Machine Learning projects.</li>
            <li>Worked on machine learning concepts and basic model development.</li>
            <li>Collaborated effectively with team members.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>

        <div className="card">
          <h3>B.Tech in Artificial Intelligence & Data Science</h3>
          <p>Mentor College of Engineering, Muvattupuzha</p>
          <p>Expected Graduation: 2029</p>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <h2>Contact Me</h2>
        <div className="contact-card">
          <p>📧prasadpranav649@gmail.com</p>
          <p>📱 +91 9447804538</p>

          <div className="social-links">
            <a
              href="https://github.com/Pranav-prasad-png/thoughtminds-internship-practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>Pranav Prasad</h3>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
