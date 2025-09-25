import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  title: string;
  period: string;
  institution: string;
  description: string;
  tags: string[];
  color: "blue" | "green" | "orange";
}

const timelineItems: TimelineItem[] = [
  {
    title: "Master's in Robotics & AI",
    period: "2024 - Present",
    institution: "Indian Institute of Technology, Guwahati",
    description: "Currently pursuing advanced coursework in machine learning, deep learning, and neural networks. Specializing in computer vision and natural language processing with hands-on research experience in developing scalable AI solutions.",
    tags: ["Research", "Deep Learning", "Computer Vision"],
    color: "blue"
  },
  {
    title: "Software Engineer",
    period: "2022 - 2023",
    institution: "Gagan Freight Carriers India",
    description: "Developed and deployed machine learning models for production use, reducing processing time by 40%. Collaborated with cross-functional teams to integrate AI capabilities into existing software products, gaining valuable experience in MLOps and scalable system design.",
    tags: ["Python", "TensorFlow", "AWS", "Docker"],
    color: "green"
  },
  {
    title: "B.Tech in Mechanical Engineering",
    period: "2018 - 2022",
    institution: "National Institute of Technology, Jalandhar",
    description: "Graduated with a Bachelor’s in Mechanical Engineering, developing strong foundations in mathematics, computational problem-solving, and analytical thinking. Gained experience with programming, simulations, and optimization, which sparked my transition into software and AI.",
    tags: ["Mathematics","Programming", "Problem Solving", "Optimization"],

    color: "orange"
  }
];

export function JourneySection() {
  const getColorClasses = (color: "blue" | "green" | "orange") => {
    switch (color) {
      case "blue":
        return "bg-blue-50 dark:bg-blue-950/20 text-github-blue";
      case "green":
        return "bg-green-50 dark:bg-green-950/20 text-success-green";
      case "orange":
        return "bg-orange-50 dark:bg-orange-950/20 text-highlight-orange";
      default:
        return "bg-blue-50 dark:bg-blue-950/20 text-github-blue";
    }
  };

  const getTagColorClasses = (color: "blue" | "green" | "orange") => {
    switch (color) {
      case "blue":
        return "bg-blue-100 dark:bg-blue-900/20 text-github-blue border-blue-200 dark:border-blue-800";
      case "green":
        return "bg-green-100 dark:bg-green-900/20 text-success-green border-green-200 dark:border-green-800";
      case "orange":
        return "bg-orange-100 dark:bg-orange-900/20 text-highlight-orange border-orange-200 dark:border-orange-800";
      default:
        return "bg-blue-100 dark:bg-blue-900/20 text-github-blue border-blue-200 dark:border-blue-800";
    }
  };

  return (
    <section id="journey" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-6 text-github-blue" data-testid="text-journey-title">
            My Journey
          </h2>
          <p className="text-xl text-slate-grey dark:text-muted-foreground max-w-3xl mx-auto" data-testid="text-journey-subtitle">
            From curiosity-driven exploration to specialized AI expertise - here's how my passion for intelligent systems evolved.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:items-center gap-8 animate-slide-up`}
                data-testid={`timeline-item-${index}`}
              >
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <Card className={`${getColorClasses(item.color)} border-none shadow-lg`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2" data-testid={`text-timeline-title-${index}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm font-code opacity-80 mb-2" data-testid={`text-timeline-period-${index}`}>
                        {item.period}
                      </p>
                      <p className="text-sm opacity-70" data-testid={`text-timeline-institution-${index}`}>
                        {item.institution}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed mb-4" data-testid={`text-timeline-description-${index}`}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className={`${getTagColorClasses(item.color)} font-medium`}
                        data-testid={`badge-timeline-tag-${index}-${tagIndex}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
