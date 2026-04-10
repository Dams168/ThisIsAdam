import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="section-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
      <p className="text-muted-foreground leading-relaxed">
        I'm a passionate frontend developer with 5+ years of experience crafting
        high-performance, accessible web applications. I specialize in React,
        TypeScript, and modern CSS — building design systems and component
        libraries that scale. I love bridging the gap between design and
        engineering, ensuring pixel-perfect implementations that delight users.
      </p>
      <p className="text-muted-foreground leading-relaxed mt-3">
        When I'm not coding, you'll find me exploring new developer tools,
        contributing to open-source projects, or writing about web performance
        optimization techniques.
      </p>
    </motion.section>
  );
};

export default AboutSection;
