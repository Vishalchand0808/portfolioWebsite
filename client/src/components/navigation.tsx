import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor, Menu } from "lucide-react";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getThemeIcon = () => {
    if (theme === "dark") {
      return <Moon className="h-5 w-5 text-github-blue" />;
    } else if (theme === "light") {
      return <Sun className="h-5 w-5 text-highlight-orange" />;
    } else {
      return <Monitor className="h-5 w-5 text-slate-grey" />;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-github-blue" data-testid="nav-logo">
            Vishal Chand
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-github-blue transition-colors duration-200"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="hover:text-github-blue transition-colors duration-200"
              data-testid="nav-journey"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-github-blue transition-colors duration-200"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-github-blue transition-colors duration-200"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-github-blue transition-colors duration-200"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-muted"
              data-testid="button-theme-toggle"
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
