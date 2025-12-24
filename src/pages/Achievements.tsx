export default function Achievements() {
  const achievements = [
    {
      title: 'GPA: 4.88 / 5.00',
      description: 'Bachelor of Computing (Computer Science), Honours at National University of Singapore',
      icon: '🎓',
    },
    {
      title: "Dean's List",
      description: 'AY2024/2025 Semester 2',
      icon: '🏆',
    },
    {
      title: 'Top 10 out of 611 Students',
      description: 'CS2103T – Software Engineering',
      icon: '⭐',
    },
    {
      title: 'Best Soldier of the Month',
      description: 'June 2023 - SAF, HQ 9 Div/Inf G2 Branch',
      icon: '🎖️',
    },
  ];

  const education = {
    institution: 'National University of Singapore',
    degree: 'Bachelor of Computing (Computer Science), Honours',
    minor: 'Minor in Economics',
    period: 'Aug 2024 – Present',
    coursework: [
      'Software Engineering',
      'Data Structures & Algorithms',
      'Computer Organisation',
      'Probability & Statistics',
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-vscode-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-vscode-text mb-4">
          Achievements
        </h1>
        <p className="text-lg text-gray-600 dark:text-vscode-text-muted mb-12">
          Key highlights from my academic and professional journey
        </p>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 border-2 border-gray-200 dark:border-vscode-border rounded-lg hover:border-teal-500 dark:hover:border-vscode-accent transition-all hover:shadow-lg bg-white dark:bg-vscode-bg-lighter"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-vscode-text mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-vscode-text-muted">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="border-t border-gray-200 dark:border-vscode-border pt-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-vscode-text mb-8">
            Education
          </h2>
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-vscode-bg-lighter dark:to-vscode-bg-lightest p-8 rounded-lg border border-gray-200 dark:border-vscode-border">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-vscode-text">
                  {education.institution}
                </h3>
                <p className="text-lg text-teal-700 dark:text-vscode-accent font-medium mt-1">
                  {education.degree}
                </p>
                <p className="text-gray-600 dark:text-vscode-text-muted mt-1">
                  {education.minor}
                </p>
              </div>
              <span className="text-gray-600 dark:text-vscode-text-muted mt-2 md:mt-0">
                {education.period}
              </span>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-vscode-text mb-3">
                RELEVANT COURSEWORK
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-white dark:bg-vscode-bg text-teal-700 dark:text-vscode-accent border border-teal-200 dark:border-vscode-accent rounded text-sm hover:bg-teal-50 dark:hover:bg-vscode-bg-lightest hover:scale-105 transition-all cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="bg-gray-50 dark:bg-vscode-bg-lighter p-8 rounded-lg border border-gray-200 dark:border-vscode-border text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-vscode-text mb-4">
            Full Resume
          </h2>
          <p className="text-gray-600 dark:text-vscode-text-muted mb-6">
            Download my complete resume for detailed information about my experience, projects, and technical skills.
          </p>
          <a
            href="/Sahishnu_Kumaar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-700 dark:bg-vscode-accent text-white rounded-lg hover:bg-teal-800 dark:hover:bg-vscode-accent-hover transition-colors font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
