export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-vscode-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-vscode-text mb-8">
          About Me
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-vscode-text space-y-6">
            <p>
              Hi, I'm Sahishnu. I'm a Year 2 Computer Science student at the
              National University of Singapore (NUS), where I'm building my
              foundations in software development and problem solving. I enjoy
              tackling coding challenges on platforms like LeetCode, and I'm
              always curious about learning new technologies that can turn ideas
              into real projects.
            </p>

            <p>
              Outside of academics, I love playing football and strategy-based
              card games like Coup, which keep me active and sharpen my
              strategic thinking. I'm always excited to connect with other
              coders, share knowledge, and collaborate on projects that push our
              skills further.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-vscode-border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-vscode-text mb-6">
              Technical Skills
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-vscode-text mb-3">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "JavaScript",
                    "TypeScript",
                    "Go",
                    "Python",
                    "C",
                  ].map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-teal-50 dark:bg-vscode-bg-lighter text-teal-700 dark:text-vscode-accent rounded-lg text-sm font-medium hover:bg-teal-100 dark:hover:bg-vscode-bg-lightest hover:scale-105 transition-all cursor-default"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-vscode-text mb-3">
                  Web Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "HTML",
                    "CSS",
                    "JavaFX",
                    "JUnit",
                    "Material UI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-teal-50 dark:bg-vscode-bg-lighter text-teal-700 dark:text-vscode-accent rounded-lg text-sm font-medium hover:bg-teal-100 dark:hover:bg-vscode-bg-lightest hover:scale-105 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-vscode-text mb-3">
                  Backend & Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL (Supabase)"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-teal-50 dark:bg-vscode-bg-lighter text-teal-700 dark:text-vscode-accent rounded-lg text-sm font-medium hover:bg-teal-100 dark:hover:bg-vscode-bg-lightest hover:scale-105 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-vscode-text mb-3">
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git",
                    "GitHub",
                    "Visual Studio Code",
                    "IntelliJ IDEA",
                    "Render",
                    "Vercel",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-teal-50 dark:bg-vscode-bg-lighter text-teal-700 dark:text-vscode-accent rounded-lg text-sm font-medium hover:bg-teal-100 dark:hover:bg-vscode-bg-lightest hover:scale-105 transition-all cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
