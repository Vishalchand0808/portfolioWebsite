import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // TODO: Implement resume download functionality
    console.log("Download resume");
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-github-blue" data-testid="text-footer-name">
              Alex Chen
            </h3>
            <p className="text-muted leading-relaxed" data-testid="text-footer-description">
              Passionate about creating intelligent solutions that make a meaningful impact. 
              Always eager to learn, collaborate, and push the boundaries of what's possible with AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2 text-muted">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-github-blue transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-github-blue transition-colors"
                  data-testid="link-footer-projects"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-github-blue transition-colors"
                  data-testid="link-footer-skills"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-github-blue transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-connect-title">
              Connect
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com"
                className="bg-muted/20 hover:bg-github-blue p-3 rounded-full transition-colors duration-200"
                data-testid="link-footer-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="bg-muted/20 hover:bg-blue-600 p-3 rounded-full transition-colors duration-200"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:alex.chen@university.edu"
                className="bg-muted/20 hover:bg-red-600 p-3 rounded-full transition-colors duration-200"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="bg-muted/20 hover:bg-purple-600 p-3 rounded-full transition-colors duration-200"
                data-testid="link-footer-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <Button
              onClick={downloadResume}
              className="bg-success-green hover:bg-success-green/90 text-white px-6 py-2 font-semibold transition-all duration-200 transform hover:scale-105"
              data-testid="button-footer-download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="border-t border-muted/20 mt-8 pt-8 text-center text-muted">
          <p data-testid="text-footer-copyright">
            &copy; 2024 Alex Chen. Designed and built with passion for AI and great user experiences.
          </p>
          <p className="mt-2 text-sm" data-testid="text-footer-tech-stack">
            Built with React, Tailwind CSS, and powered by curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
