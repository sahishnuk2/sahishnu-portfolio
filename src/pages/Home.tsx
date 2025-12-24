import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-vscode-bg dark:to-vscode-bg-lighter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-vscode-text mb-6 animate-slide-up">
          Sahishnu Kumaar
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-vscode-text-muted mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Computer Science Student at NUS
        </p>
        <p className="text-lg text-gray-500 dark:text-vscode-text-muted mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Building software, solving problems, and learning continuously
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/achievements"
            className="px-8 py-3 bg-teal-700 dark:bg-vscode-accent text-white rounded-lg hover:bg-teal-800 dark:hover:bg-vscode-accent-hover transition-all hover:scale-105 font-medium"
          >
            View Achievements
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3 bg-white dark:bg-vscode-bg-lighter text-teal-700 dark:text-vscode-accent border-2 border-teal-700 dark:border-vscode-accent rounded-lg hover:bg-gray-50 dark:hover:bg-vscode-bg-lightest transition-all hover:scale-105 font-medium"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
