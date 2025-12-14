import { ArrowDown, Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-up">
          {/* Avatar */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-50" />
            <Avatar className="w-32 h-32 border-4 border-primary/50 relative">
              <AvatarFallback className="text-3xl font-bold bg-secondary text-primary">
                SK
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Sonu Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              DevOps Engineer & GitHub Automation Enthusiast
            </p>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            IT professional specializing in DevOps with hands-on experience in GitHub workflows 
            and GitHub Actions. Passionate about combining DevOps and Artificial Intelligence 
            to build smarter, more efficient systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="glow-effect bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              onClick={() => scrollTo("#projects")}
            >
              <FolderOpen className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => scrollTo("#contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
