import { Github, Code, Layout, Terminal, Workflow, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "DevOps & Tools",
    icon: Workflow,
    skills: [
      { name: "GitHub", icon: Github },
      { name: "GitHub Actions", icon: Workflow },
    ],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: [
      { name: "C", icon: Code },
      { name: "C++", icon: Code },
    ],
  },
  {
    title: "Front-End",
    icon: Layout,
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: FileCode },
      { name: "JavaScript", icon: FileCode },
      { name: "React", icon: Code },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit spanning DevOps, programming, and front-end development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-card/50 border-border card-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      <skill.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
