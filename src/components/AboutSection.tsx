import { GraduationCap, Sparkles, GitBranch, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "M.Tech (Pursuing)",
    institution: "BITS Pilani",
    year: "Present",
    icon: GraduationCap,
  },
  {
    degree: "BCA",
    institution: "Kurukshetra University (KUK)",
    year: "2021",
    icon: GraduationCap,
  },
];

const highlights = [
  {
    icon: GitBranch,
    title: "DevOps Expertise",
    description: "Specialized in GitHub workflows, automation, and CI/CD pipelines",
  },
  {
    icon: Brain,
    title: "DevOps + AI",
    description: "Exploring the intersection of DevOps practices and Artificial Intelligence",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "Always expanding skills in modern technologies and best practices",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate IT professional with a strong foundation in DevOps and a vision for 
            the future of intelligent automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio & Highlights */}
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm Sonu Kumar, an IT professional with a keen focus on DevOps and GitHub automation. 
                My journey in tech has equipped me with hands-on experience in GitHub workflows and 
                GitHub Actions, enabling teams to streamline their development processes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond DevOps, I've developed proficiency in front-end technologies including HTML, 
                CSS, JavaScript, and React. Currently, I'm pursuing my M.Tech at BITS Pilani while 
                working as an Associate Trainee at Mindtree, where I continue to grow my expertise 
                in building smarter, more efficient systems.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-card/50 border-border card-hover">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent" />
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    
                    <Card className="bg-card/50 border-border card-hover">
                      <CardContent className="p-4">
                        <span className="text-xs text-primary font-medium">{item.year}</span>
                        <h4 className="font-semibold mt-1">{item.degree}</h4>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
