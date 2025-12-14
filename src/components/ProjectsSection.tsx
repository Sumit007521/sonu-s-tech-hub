import { GitMerge, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Azure DevOps to GitHub Migration",
    description:
      "Successfully migrated a large-scale repository ecosystem from Azure DevOps to GitHub, ensuring seamless transition with zero data loss.",
    icon: GitMerge,
    highlights: [
      "Migrated 500 repositories",
      "Preserved version history",
      "Maintained workflow continuity",
      "Ensured repository integrity",
    ],
    tags: ["GitHub", "Azure DevOps", "Migration", "Automation"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing impactful work that demonstrates expertise in DevOps and large-scale migrations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border card-hover overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More projects hint */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            More projects coming soon
            <ArrowRight className="h-4 w-4" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
