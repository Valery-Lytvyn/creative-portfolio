import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface IconItem {
  IconComponent: IconType;
  label: string;
  link?: string;
}

interface IconCarouselProps {
  items: IconItem[];
}

const IconCarousel: React.FC<IconCarouselProps> = React.memo(({ items }) => {
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => setIsHovered?.(true);
  const handleMouseLeave = () => setIsHovered?.(false);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setVisibleIndex((prev) => (prev + 1) % items.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current!);
    }
    return () => {
      clearInterval(intervalRef.current!);
    };
  }, [isHovered, items.length]);

  return (
    <div
      className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Icon carousel"
    >
      {items.map(({ IconComponent, label, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`text-4xl transition-transform ${
            visibleIndex === index ? "scale-110 text-secondary" : "scale-100"
          } hover:text-accent`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleIndex === index ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <IconComponent />
          </motion.div>
        </a>
      ))}
    </div>
  );
});

export default IconCarousel;
