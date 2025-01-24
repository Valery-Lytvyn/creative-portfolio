import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  styles?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, styles }) => {
  return (
    <div className={`${styles} title flex flex-wrap space-x-4 pb-4`}>
      <AnimatePresence>
        {title.split(" ").map((word, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            style={{ hyphens: "auto", overflowWrap: "break-word" }}
            className="text-5xl first-letter:uppercase md:text-6xl lg:text-7xl"
          >
            {word}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SectionTitle;
