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
              <p>Supabase</p>
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

        <section className="projects container">
          <h2>My Projects</h2>
          <div>
            <div>Image</div>
            <div>Description</div>
            <div>link</div>
          </div>
        </section>

        <section className="resume container">
          <h2>Resume</h2>
          <p>This is a placeholder for the main content.</p>
        </section>

        <section className="contact-me container">
          <h2>Contact me</h2>
          <p>This is a placeholder for the main content.</p>
        </section>

        {/* <!-- Footer --> */}
        <footer>
          <p>© 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
