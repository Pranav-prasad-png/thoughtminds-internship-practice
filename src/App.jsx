import "./App.css";

function App() {
  return (
    <div>

      {/* Hero Section */}
      <section className="DC">
        <h1>Hi, I'm Pranav Prasad</h1>

        <h2>university student</h2>

        <p>
          I create responsive and modern websites using React,
          JavaScript and frontend technologies.
        </p>

        <button>Contact Me</button>
        <button>View Projects</button>
      </section>


      {/* About Section */}
      <section>
        <h1>About Me</h1>

        <p>
          I am  Pranav Prasad, and I am a BCA student with a strong interest in web development
          especially React. I am a quick learner with good communication and problem-solving skills.
          I enjoy learning new technologies.and I am eager to gain practical experience and grow in 
          the it field


        </p>

        <p>
          Education: Secondary School Graduate
        </p>

        <p>
          Interests: Learning new technologies , Web Development
        </p>

      </section>


      {/* Skills Section */}
      <section>

        <h1>Skills</h1>

        <div className="cards">

          <div>Python</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Git</div>

        </div>

      </section>


      {/* Projects Section */}
      <section>

        <h1>Projects</h1>

        <div className="project">

          <h2>React Counter App</h2>

          <p>
            A simple counter application built using React useState.
          </p>

        </div>

      </section>


      {/* Contact Section */}
      <section>

        <h1>Contact</h1>

        <p>
          Email: prasadpranav649@gmail.com
        </p>

        <p>
          GitHub:https://github.com/Pranav-prasad-png
        </p>

      </section>


    </div>
  );
}

export default App;