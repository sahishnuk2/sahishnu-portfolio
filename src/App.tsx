import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
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
      </header>

      {/* <!-- Main Content --> */}
      <main>
        <section>
          <h1>About Me</h1>
          <p>
            I am Sahishnu. I'm currently a year 2 Computer Science Student
            studying at NUS.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div>
            <p>Coding</p>
            <p>Football</p>
            <p>Java</p>
            <p>JavaScript</p>
          </div>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div>
            <div>Image</div>
            <div>Description</div>
            <div>link</div>
          </div>
        </section>

        <section>
          <h2>Resume</h2>
          <p>This is a placeholder for the main content.</p>
        </section>

        <section>
          <h2>Contact me</h2>
          <p>This is a placeholder for the main content.</p>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <footer>
        <p>© 2025 My Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
