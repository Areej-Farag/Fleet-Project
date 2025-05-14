import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    className="animated-section"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
