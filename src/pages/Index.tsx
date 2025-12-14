import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sonu Kumar | DevOps Engineer & GitHub Automation Expert</title>
        <meta
          name="description"
          content="Sonu Kumar is a DevOps Engineer specializing in GitHub workflows, GitHub Actions, and automation. Currently pursuing M.Tech at BITS Pilani."
        />
        <meta
          name="keywords"
          content="DevOps, GitHub, GitHub Actions, Automation, React, JavaScript, BITS Pilani"
        />
        <link rel="canonical" href="https://sonukumar.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
