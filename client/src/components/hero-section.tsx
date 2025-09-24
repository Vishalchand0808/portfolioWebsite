import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // TODO: Implement resume download functionality
    console.log("Download resume");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <img
            src="/profile.jpg"
            alt="Vishal Chand - Robotics & AI Engineer"
            className="w-40 h-40 rounded-full mx-auto mb-8 shadow-2xl border-4 border-background animate-float"
            data-testid="img-profile-photo"
          />
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary" data-testid="text-main-title">
            Vishal Chand
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-grey dark:text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-subtitle">
            M.Tech Student in Robotics & AI • Aspiring <span className="text-github-blue font-semibold">AI Engineer</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="text-description">
            A passionate and detail-oriented M.Tech student at IIT Guwahati with hands-on experience in machine learning, computer vision, and robotics. Proven problem-solver with a strong foundation in Data Structures and Algorithms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProjects}
              className="bg-github-blue hover:bg-github-blue/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              data-testid="button-view-projects"
            >
              View My Projects <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={downloadResume}
              className="border-github-blue text-github-blue hover:bg-github-blue hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com"
              className="text-2xl text-slate-grey hover:text-github-blue transition-colors duration-200"
              data-testid="link-github"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-2xl text-slate-grey hover:text-github-blue transition-colors duration-200"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:alex.chen@university.edu"
              className="text-2xl text-slate-grey hover:text-github-blue transition-colors duration-200"
              data-testid="link-email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
