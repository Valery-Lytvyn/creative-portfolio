import React from "react";
import { motion } from "motion/react";

interface TaglineProps {
  slogan: string;
  styles?: string;
}
const Tagline: React.FC<TaglineProps> = ({ slogan, styles }) => {
  return (
    <div className={`${styles}`}>
      <motion.h3
        className="title text-2xl italic text-secondary md:text-3xl lg:text-4xl"
        initial={{ x: "-40%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {slogan}
      </motion.h3>
    </div>
  );
};

export default Tagline;
