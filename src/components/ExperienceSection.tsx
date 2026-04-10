import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 – Present",
    highlights: [
      "Lead frontend architecture for a SaaS platform serving 50K+ users",
      "Built a component library with 40+ reusable components",
      "Reduced bundle size by 35% through code splitting and lazy loading",
      "Mentored a team of 4 junior developers",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Webpack", "Storybook"],
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2020 – 2022",
    highlights: [
      "Developed responsive web apps using React and TypeScript",
      "Implemented CI/CD pipelines with GitHub Actions",
      "Improved Lighthouse scores from 60 to 95+",
      "Collaborated with designers to build a unified design system",
    ],
    tags: ["React", "JavaScript", "SCSS", "GitHub Actions", "Figma"],
  },
  {
    title: "Junior Web Developer",
    company: "Digital Agency Co.",
    period: "2018 – 2020",
    highlights: [
      "Built client websites and landing pages with modern frameworks",
      "Introduced Webpack, ESLint, and Prettier to the team workflow",
      "Mentored interns on HTML, CSS, and JavaScript best practices",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Webpack", "jQuery"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="section-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-foreground mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{exp.title}</h3>
              <p className="text-primary text-sm font-medium">{exp.company}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{exp.period}</p>
              <ul className="mt-2 space-y-1.5">
                {exp.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="text-muted-foreground text-sm leading-relaxed flex items-baseline gap-2"
                  >
                    <span className="text-primary flex-shrink-0 text-xs">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
