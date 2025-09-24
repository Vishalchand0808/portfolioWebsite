import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Brain;
  color: "blue" | "green" | "orange";
  skills: {
    name: string;
    percentage: number;
  }[];
  technologies: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "blue",
    skills: [
      { name: "Deep Learning", percentage: 90 },
      { name: "Computer Vision", percentage: 85 },
      { name: "NLP", percentage: 80 },
      { name: "MLOps", percentage: 75 }
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "green",
    skills: [
      { name: "Python", percentage: 95 },
      { name: "JavaScript", percentage: 85 },
      { name: "Java", percentage: 80 },
      { name: "C++", percentage: 75 }
    ],
    technologies: ["SQL", "R", "Go", "TypeScript"]
  },
  {
    title: "Full-Stack Development",
    icon: Layers,
    color: "orange",
    skills: [
      { name: "React/Next.js", percentage: 90 },
      { name: "Node.js", percentage: 85 },
      { name: "Database Design", percentage: 80 },
      { name: "Cloud Platforms", percentage: 75 }
    ],
    technologies: ["AWS", "Docker", "MongoDB", "PostgreSQL"]
  }
];

export function SkillsSection() {
  const getColorClasses = (color: "blue" | "green" | "orange") => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-blue-100 dark:bg-blue-900/20",
          iconColor: "text-github-blue",
          titleColor: "text-github-blue",
          progressColor: "bg-github-blue",
          badgeClasses: "bg-blue-100 dark:bg-blue-900/20 text-github-blue border-blue-200 dark:border-blue-800"
        };
      case "green":
        return {
          iconBg: "bg-green-100 dark:bg-green-900/20",
          iconColor: "text-success-green",
          titleColor: "text-success-green",
          progressColor: "bg-success-green",
          badgeClasses: "bg-green-100 dark:bg-green-900/20 text-success-green border-green-200 dark:border-green-800"
        };
      case "orange":
        return {
          iconBg: "bg-orange-100 dark:bg-orange-900/20",
          iconColor: "text-highlight-orange",
          titleColor: "text-highlight-orange",
          progressColor: "bg-highlight-orange",
          badgeClasses: "bg-orange-100 dark:bg-orange-900/20 text-highlight-orange border-orange-200 dark:border-orange-800"
        };
      default:
        return {
          iconBg: "bg-blue-100 dark:bg-blue-900/20",
          iconColor: "text-github-blue",
          titleColor: "text-github-blue",
          progressColor: "bg-github-blue",
          badgeClasses: "bg-blue-100 dark:bg-blue-900/20 text-github-blue border-blue-200 dark:border-blue-800"
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-6 text-github-blue" data-testid="text-skills-title">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-grey dark:text-muted-foreground max-w-3xl mx-auto" data-testid="text-skills-subtitle">
            A comprehensive skill set spanning AI/ML research, software engineering, and full-stack development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <Card 
                key={categoryIndex}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                data-testid={`card-skill-category-${categoryIndex}`}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`${colors.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${colors.iconColor}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colors.titleColor}`} data-testid={`text-skill-category-title-${categoryIndex}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex justify-between items-center" data-testid={`skill-item-${categoryIndex}-${skillIndex}`}>
                        <span className="text-sm font-medium" data-testid={`text-skill-name-${categoryIndex}-${skillIndex}`}>
                          {skill.name}
                        </span>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div 
                            className={`${colors.progressColor} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${skill.percentage}%` }}
                            data-testid={`progress-skill-${categoryIndex}-${skillIndex}`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`text-xs font-medium ${colors.badgeClasses}`}
                        data-testid={`badge-technology-${categoryIndex}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
