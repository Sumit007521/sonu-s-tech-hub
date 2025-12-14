import { ArrowDown, Mail, FolderOpen, Sparkles } from "lucide-react";
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
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient orbs with animation */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-up">
          {/* Status badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Avatar with enhanced effects */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-70" />
            <Avatar className="w-36 h-36 border-4 border-background relative">
              <AvatarFallback className="text-4xl font-bold bg-card text-primary">
                SK
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 p-2 bg-card rounded-full border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Headline with enhanced styling */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="gradient-text">Sonu Kumar</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                DevOps Engineer & GitHub Automation Enthusiast
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>

          {/* Bio with glassmorphism card */}
          <div className="max-w-2xl p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-primary/10 shadow-xl shadow-primary/5">
            <p className="text-muted-foreground text-lg leading-relaxed">
              IT professional specializing in DevOps with hands-on experience in GitHub workflows 
              and GitHub Actions. Passionate about combining{" "}
              <span className="text-primary font-medium">DevOps</span> and{" "}
              <span className="text-accent font-medium">Artificial Intelligence</span>{" "}
              to build smarter, more efficient systems.
            </p>
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="relative group overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={() => scrollTo("#projects")}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <FolderOpen className="mr-2 h-5 w-5 relative z-10" />
              <span className="relative z-10">View Portfolio</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => scrollTo("#contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
