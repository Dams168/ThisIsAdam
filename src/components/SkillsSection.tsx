import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Tools",
    skills: ["Git", "Figma", "Webpack", "Vite", "Docker", "CI/CD"],
  },
  {
    label: "Concepts",
    skills: ["Design Systems", "A11y", "Web Perf", "REST APIs", "Testing"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="section-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-foreground mb-6">Skills</h2>
      <div className="space-y-5">
        {skillGroups.map((group, gi) => (
          <div key={gi}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.div
                  key={si}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                >
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
