import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";

const HeroSection = lazy(
  () => import("../components/hero_section/HeroSection"),
);
const AboutSection = lazy(
  () => import("../components/about_section/AboutSection"),
);
const PortfolioSection = lazy(
  () => import("../components/portfolio_section/PortfolioSection"),
);
const ContactSection = lazy(
  () => import("../components/contact_section/ContactSection"),
);
interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.1 }, // Load section when it’s 10% in view
    );

    const section = document.getElementById(id);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [id]);

  return isVisible ? (
    <motion.section id={id} className={`${className} `}>
      {children}
    </motion.section>
  ) : (
    <div id={id} />
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <motion.section
        id="home"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeIn" }}
        className="section pt-24 lg:min-h-screen"
      >
        <HeroSection />
      </motion.section>
      <Suspense fallback={<div>Loading content, please wait...</div>}>
        <SectionWrapper id="about" className="relative overflow-hidden pt-24">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper id="portfolio" className="pt-24">
          <PortfolioSection />
        </SectionWrapper>
        <SectionWrapper id="contact" className="relative overflow-hidden pt-24">
          <ContactSection />
        </SectionWrapper>
      </Suspense>
    </>
  );
};

export default HomePage;
