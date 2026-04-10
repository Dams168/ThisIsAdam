import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="section-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-foreground mb-4">Contact</h2>
      <p className="text-muted-foreground mb-6">
        Interested in working together? Let's connect.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button>
          <Mail className="w-4 h-4 mr-2" />
          alex@example.com
        </Button>
        <Button variant="outline" size="icon">
          <Github className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Linkedin className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Twitter className="w-5 h-5" />
        </Button>
      </div>
    </motion.section>
  );
};

export default ContactSection;
