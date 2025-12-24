export default function Experience() {
  const experience = {
    role: 'HQ 9 Div/Inf G2 Branch ASA',
    organization: 'Singapore Armed Forces (SAF)',
    period: 'July 2022 – May 2024',
    responsibilities: [
      'Led administrative operations as Branch IC, managing personnel clearance processes, planning unit tours, and maintaining critical documentation workflows',
      'Utilised Microsoft Excel to streamline data handling, track personnel movement, and generate operational reports, improving overall efficiency',
      'Coordinated inter-departmental communication and scheduling, demonstrating strong organizational and stakeholder management skills',
    ],
    award: 'Best Soldier of the Month (June 2023)',
    awardDescription: 'Awarded for outstanding leadership, discipline, and initiative',
  };

  const skills = [
    {
      category: 'Leadership & Coordination',
      items: ['Team Leadership', 'Stakeholder Management', 'Inter-departmental Communication'],
    },
    {
      category: 'Technical & Administrative',
      items: ['Data Management (Excel)', 'Process Optimization', 'Documentation Management'],
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Organization', 'Initiative & Discipline'],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-vscode-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-vscode-text mb-4">
          Work Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-vscode-text-muted mb-12">
          Professional experience demonstrating leadership, coordination, and responsibility
        </p>

        {/* Experience Card */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-vscode-bg-lighter dark:to-vscode-bg-lightest p-8 rounded-lg border-2 border-gray-200 dark:border-vscode-border mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-vscode-text">
                {experience.role}
              </h2>
              <p className="text-lg text-teal-700 dark:text-vscode-accent font-medium mt-1">
                {experience.organization}
              </p>
            </div>
            <span className="text-gray-600 dark:text-vscode-text-muted mt-2 md:mt-0">
              {experience.period}
            </span>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3 mb-6">
            {experience.responsibilities.map((responsibility, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal-600 dark:text-vscode-accent mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700 dark:text-vscode-text">{responsibility}</p>
              </div>
            ))}
          </div>

          {/* Award */}
          <div className="bg-white dark:bg-vscode-bg p-4 rounded-lg border border-teal-200 dark:border-vscode-accent">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-vscode-text">
                  {experience.award}
                </h3>
                <p className="text-gray-600 dark:text-vscode-text-muted">
                  {experience.awardDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transferable Skills */}
        <div className="border-t border-gray-200 dark:border-vscode-border pt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-vscode-text mb-8">
            Transferable Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white dark:bg-vscode-bg-lighter p-6 rounded-lg border border-gray-200 dark:border-vscode-border"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-vscode-text mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 dark:text-vscode-text-muted flex items-start gap-2"
                    >
                      <svg
                        className="w-4 h-4 text-teal-600 dark:text-vscode-accent mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
