interface Project {
  title: string;
  description: string;
  techStack: string[];
  period: string;
  link: string;
  image: string;
  isGithub: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Discussion Forum",
      description:
        "Building a full-stack discussion platform with user authentication, topic-based threads, and RESTful APIs. Developing backend services in Go with PostgreSQL, alongside a clean and intuitive React-based user interface for browsing and participating in discussions.",
      techStack: ["Go", "PostgreSQL", "React"],
      period: "Dec 2025 – Present",
      link: "https://github.com/sahishnuk2/web-forum",
      image: "/forum.png",
      isGithub: true,
    },
    {
      title: "LambdaLab – Teaching Assistant Management App",
      description:
        "Implemented core features for a desktop application used by teaching assistants to manage student information, attendance, and progress tracking. Developed data processing, sorting, validation logic, and automated tests to ensure reliability and accuracy.",
      techStack: ["Java", "JavaFX", "JUnit"],
      period: "Sep 2025 – Nov 2025",
      link: "https://ay2526s1-cs2103t-t09-3.github.io/tp/",
      image: "/lambdalab.png",
      isGithub: false,
    },
    {
      title: "Sharva Task Manager Chatbot",
      description:
        "Sharva is a powerful yet simple task management chatbot built with Java and JavaFX. It helps you efficiently manage your daily tasks through a clean text-based chat interface with a graphical UI. Sharva provides an effective solution for organizing todos, deadlines, and events.",
      techStack: ["Java", "JavaFX", "JUnit"],
      period: "Aug 2025 – Sep 2025",
      link: "https://sahishnuk2.github.io/ip/",
      image: "/sharva.png",
      isGithub: false,
    },
    {
      title: "Personal Task Tracker",
      description:
        "Developed a lightweight task manager with LocalStorage persistence, actively used by peers for tracking academic tasks and deadlines. Implemented task creation, prioritisation, sorting, and completion workflows with a responsive and React-based UI.",
      techStack: ["TypeScript", "React", "HTML", "CSS"],
      period: "Aug 2025 – Sep 2025",
      link: "https://todolist.sahishnu.dev",
      image: "/todolist.png",
      isGithub: false,
    },
    {
      title: "ChronoPanthers – Productivity Desktop App",
      description:
        "Developed a desktop productivity application combining a Pomodoro timer, task management, and an AI-assisted study feature with productivity analytics. Designed a responsive JavaFX UI, implemented visual charts, and integrated Supabase for persistent data storage.",
      techStack: ["Java", "JavaFX", "Supabase"],
      period: "May 2025 – Aug 2025",
      link: "https://github.com/sahishnuk2/ChronoPanthers",
      image: "/CP.jpeg",
      isGithub: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-vscode-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-vscode-text mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-vscode-text-muted mb-16">
          A timeline of projects I've built to solve real problems and learn new
          technologies
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500 dark:from-vscode-accent dark:to-blue-600"></div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative flex items-start animate-fade-in ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-teal-600 dark:bg-vscode-accent rounded-full -ml-2 border-4 border-white dark:border-vscode-bg z-10"></div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white dark:bg-vscode-bg-lighter border-2 border-gray-200 dark:border-vscode-border rounded-lg p-6 hover:border-teal-500 dark:hover:border-vscode-accent transition-all hover:shadow-lg hover:-translate-y-1 group">
                    {/* Period Badge */}
                    <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-vscode-bg text-teal-700 dark:text-vscode-accent text-sm font-medium rounded-full mb-4">
                      {project.period}
                    </span>

                    {/* Project Image */}
                    {project.image && (
                      <div className="w-full h-48 bg-gray-50 dark:bg-vscode-bg rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-vscode-text mb-3">
                      {project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal-600 dark:hover:text-vscode-accent transition-colors"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-vscode-text-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-vscode-bg text-gray-700 dark:text-vscode-text text-sm rounded border border-gray-200 dark:border-vscode-border hover:bg-teal-50 dark:hover:bg-vscode-bg-lightest hover:border-teal-300 dark:hover:border-vscode-accent transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub icon and project link */}
                    <div className="flex justify-between items-center">
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-teal-600 dark:text-vscode-accent hover:text-teal-800 dark:hover:text-vscode-accent-hover font-medium transition-colors"
                        >
                          View Project
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      <a
                        href={project.link !== "#" ? project.link : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-gray-600 dark:text-vscode-text-muted hover:text-teal-600 dark:hover:text-vscode-accent transition-colors"
                        title="View on GitHub"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
