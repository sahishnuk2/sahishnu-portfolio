import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <nav className="navbar container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        {/* <!-- Main Content --> */}
        <section className="about-me container">
          <h1>About Me</h1>
          <p>
            Hi, I’m Sahishnu. I’m a Year 2 Computer Science student at the
            National University of Singapore (NUS), where I’m building my
            foundations in software development and problem solving. I enjoy
            tackling coding challenges on platforms like LeetCode, and I’m
            always curious about learning new technologies that can turn ideas
            into real projects.
            <br /> <br />
            Outside of academics, I love playing football and strategy-based
            card games like Coup, which keep me active and sharpen my strategic
            thinking. I’m always excited to connect with other coders, share
            knowledge, and collaborate on projects that push our skills further.
          </p>
          <img
            id="my-photo"
            src="./src/assets/user.png"
            alt="Placeholder image of myself"
          />
        </section>

        <section className="skills-section container">
          <h2>Skills</h2>
          <div className="skills-list">
            <h4>Programming Languages</h4>
            <div className="languages skills">
              <p>Java</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Python</p>
            </div>
            <h4>Frameworks & Libraries</h4>
            <div className="tools skills">
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>JavaFX</p>
              <p>SupaBase</p>
            </div>
            <h4>Tools & Platforms</h4>
            <div className="tools skills">
              <p>Git</p>
              <p>GitHub</p>
              <p>VS Code</p>
              <p>IntelliJ IDEA</p>
            </div>
          </div>
        </section>

        <section className="projects-section container">
          <h2>My Projects</h2>
          <div className="projects">
            <div className="chronopanthers project">
              <img
                id="chronopanthers-pic"
                src="./src/assets/CP.jpeg"
                alt="ChronoPanthers"
              />
              <h4>
                <a href="https://github.com/sahishnuk2/ChronoPanthers">
                  ChronoPanthers Pomodoro
                </a>
              </h4>
              <p>
                A Pomodoro Timer desktop app developed in collaboration with a
                partner to enhance focus and productivity. The application
                includes a customizable timer, task manager, AI study assistant,
                and a productivity tracker with visual charts. The UI was built
                with JavaFX, while Supabase was integrated to manage data
                storage and persistence.
              </p>
              <div className="project-footer">
                <div className="tech">
                  <p>Java</p>
                  <p>JavaFX</p>
                  <p>SupaBase</p>
                </div>
                <div className="project-link">
                  <a href="https://github.com/sahishnuk2/ChronoPanthers">
                    link
                  </a>
                </div>
              </div>
            </div>
            <div className="chronopanthers project">
              <img
                id="chronopanthers-pic"
                src="./src/assets/todolist.png"
                alt="ChronoPanthers"
              />
              <h4>
                <a href="https://todolist.sahishnu.dev">
                  Personal Task Tracker
                </a>
              </h4>
              <p>
                A task management web application designed to help organize
                academic tasks and deadlines, actively used by peers for
                everyday productivity. Built with TypeScript and React, the app
                leverages LocalStorage for client-side data persistence. Key
                features include task creation, prioritization, sorting, and
                completion tracking, all presented through a responsive and
                intuitive interface optimized for both desktop and mobile
                devices.
              </p>
              <div className="project-footer">
                <div className="tech">
                  <p>TypeScript</p>
                  <p>React</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <div className="project-link">
                  <a href="https://github.com/sahishnuk2/my-to-do-list">link</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="resume container">
          <h2>Resume</h2>
          <p id="overview">
            Here’s a quick overview of my academic background. For more details,
            you can download my full resume below.
          </p>
          <div className="resume-content">
            <div className="education">
              <h3>Education</h3>
              <p>
                <strong>National University of Singapore (NUS)</strong>
                <br />
                B.Comp. in Computer Science, Year 2<br />
                Aug 2023 – Present
                <br />
                <br />
                <strong>Course Highlights:</strong> Programming Methodology,
                Data Structures, Algorithms, Software Engineering
                <br />
                <br />
                Dean’s List - AY2024/2025 Semester 2
              </p>
            </div>
            <a
              href="./src/assets/Sahishnu_Kumaar_Resume.pdf"
              download
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </section>

        <section className="contact-me container">
          <h2>Contact me</h2>
          <p>Placeholder</p>
        </section>

        {/* <!-- Footer --> */}
        <footer>
          <p>© 2025 Sahishnu Kumaar. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
