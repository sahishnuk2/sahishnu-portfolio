import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);

    // Update favicon based on theme
    const updateFavicon = () => {
      const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
      console.log('Updating favicon for theme:', theme);
      console.log('Favicon element found:', !!favicon);

      if (favicon) {
        const color = theme === 'dark' ? '#007acc' : '#0d9488'; // Blue for dark, teal-600 for light
        console.log('Using color:', color);

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M24 8 C24 4, 20 4, 16 4 C12 4, 8 6, 8 10 C8 12, 10 14, 14 14 C18 14, 20 16, 20 18 C20 20, 18 22, 14 22 C10 22, 8 20, 8 16 L4 16 C4 24, 8 28, 14 28 C20 28, 24 24, 24 18 C24 16, 22 14, 18 14 C14 14, 12 12, 12 10 C12 8, 14 6, 16 6 C18 6, 20 8, 20 12 L24 12 C24 4, 20 4, 16 4 Z" fill="${color}"/></svg>`;

        // Use data URL instead of Blob
        const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`;
        favicon.href = dataUrl;
        console.log('Favicon updated to:', dataUrl);
      }
    };

    // Update favicon after a small delay to ensure DOM is ready
    setTimeout(updateFavicon, 0);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
