import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectComponentLibrary from "@/assets/project-component-library.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectTokenGenerator from "@/assets/project-token-generator.jpg";

const projects = [
  {
    title: "Component Library",
    description:
      "A production-ready React component library with 40+ accessible components, built with TypeScript and Tailwind CSS.",
    tags: ["React", "TypeScript", "Storybook"],
    image: projectComponentLibrary,
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Performance Dashboard",
    description:
      "Real-time web vitals monitoring dashboard with interactive charts and alerting system.",
    tags: ["Next.js", "D3.js", "WebSocket"],
    image: projectDashboard,
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Design Token Generator",
    description:
      "CLI tool that converts Figma design tokens into CSS custom properties and Tailwind config.",
    tags: ["Node.js", "Figma API", "CLI"],
    image: projectTokenGenerator,
    demoUrl: "#",
    codeUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="section-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-foreground mb-6">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-colors group"
          >
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={768}
                height={512}
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="h-8 px-2.5 text-xs" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
