import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Users, TrendingUp, Award, Download } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stats: {
    type: "github" | "downloads" | "users" | "research";
    primary: string;
    secondary: string;
  };
  color: "blue" | "green" | "orange";
}

const projects: Project[] = [
  {
    title: "Stress Detection from Social Media Posts",
    description: "Developed a stress detection model using machine learning to analyze social media posts and identify mental health concerns. Implemented data preprocessing, cleaning, and used Naive Bayes, SVM, and Decision Tree algorithms for accurate stress prediction.",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=200",
    technologies: ["Python", "Scikit-learn", "Pandas", "NLTK", "Naive Bayes", "SVM"],
    githubUrl: "https://github.com", // Please update this URL
    liveUrl: "",
    stats: {
      type: "github",
      primary: "NLP",
      secondary: "Machine Learning"
    },
    color: "blue"
  },
  {
    title: "Object Detection with Audio Feedback",
    description: "Developed a prototype for visually impaired assistance using YOLOv3, OpenCV, and Google Text-to-Speech API. Implemented real-time object detection and audio feedback, enhancing accessibility for the visually impaired.",
    image: "https://images.unsplash.com/photo-1593106576393-3cb635a23933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=200",
    technologies: ["YOLOv3", "OpenCV", "gTTS API", "Python", "MS COCO"],
    githubUrl: "https://github.com", // Please update this URL
    stats: {
      type: "github",
      primary: "Computer Vision",
      secondary: "Accessibility"
    },
    color: "green"
  },
  {
    title: "Autonomous Harvester Development",
    description: "Designed and 3D modeled a robotic harvester for crops using SolidWorks, eliminating manual labor. Conducted Finite Element Analysis (FEA) using ANSYS to ensure structural integrity and optimize performance.",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=200",
    technologies: ["SolidWorks", "ANSYS", "FEA", "Robotics"],
    githubUrl: "", // No public repo for this
    stats: {
      type: "research",
      primary: "R&D Intern",
      secondary: "IIT Ropar"
    },
    color: "orange"
  }
];

export function ProjectsSection() {
  const getColorClasses = (color: "blue" | "green" | "orange") => {
    switch (color) {
      case "blue":
        return {
          titleColor: "text-github-blue",
          badgeClasses: "bg-blue-100 dark:bg-blue-900/20 text-github-blue border-blue-200 dark:border-blue-800"
        };
      case "green":
        return {
          titleColor: "text-success-green",
          badgeClasses: "bg-green-100 dark:bg-green-900/20 text-success-green border-green-200 dark:border-green-800"
        };
      case "orange":
        return {
          titleColor: "text-highlight-orange",
          badgeClasses: "bg-orange-100 dark:bg-orange-900/20 text-highlight-orange border-orange-200 dark:border-orange-800"
        };
      default:
        return {
          titleColor: "text-github-blue",
          badgeClasses: "bg-blue-100 dark:bg-blue-900/20 text-github-blue border-blue-200 dark:border-blue-800"
        };
    }
  };

  const getStatsIcon = (type: string, index: number) => {
    switch (type) {
      case "github":
        return index === 0 ? <Star className="h-4 w-4 text-success-green" /> : <GitFork className="h-4 w-4 text-github-blue" />;
      case "downloads":
        return index === 0 ? <Download className="h-4 w-4 text-success-green" /> : <Star className="h-4 w-4 text-highlight-orange" />;
      case "users":
        return index === 0 ? <Users className="h-4 w-4 text-success-green" /> : <TrendingUp className="h-4 w-4 text-github-blue" />;
      case "research":
        return index === 0 ? <Award className="h-4 w-4 text-success-green" /> : <Award className="h-4 w-4 text-highlight-orange" />;
      default:
        return <Star className="h-4 w-4 text-success-green" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-6 text-github-blue" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-grey dark:text-muted-foreground max-w-3xl mx-auto" data-testid="text-projects-subtitle">
            A showcase of AI-powered solutions and full-stack applications that demonstrate my technical capabilities and problem-solving approach.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <Card 
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-up"
                data-testid={`card-project-${index}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`img-project-${index}`}
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold ${colors.titleColor}`} data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        className="text-slate-grey hover:text-github-blue transition-colors"
                        data-testid={`link-project-github-${index}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="text-slate-grey hover:text-success-green transition-colors"
                          data-testid={`link-project-live-${index}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`text-xs font-medium ${colors.badgeClasses}`}
                        data-testid={`badge-project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm text-slate-grey dark:text-muted-foreground">
                    <div className="flex items-center mr-4">
                      {getStatsIcon(project.stats.type, 0)}
                      <span className="ml-1" data-testid={`text-project-stat-primary-${index}`}>
                        {project.stats.primary}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {getStatsIcon(project.stats.type, 1)}
                      <span className="ml-1" data-testid={`text-project-stat-secondary-${index}`}>
                        {project.stats.secondary}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button
            className="bg-github-blue hover:bg-github-blue/90 text-white px-8 py-3 font-semibold transition-all duration-200 transform hover:scale-105"
            data-testid="button-view-all-projects"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
