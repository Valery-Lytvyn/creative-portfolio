import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../lib/projects";
import { useTranslation } from "react-i18next";

const PortfolioSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:gap:6 mx-auto flex max-w-screen-2xl flex-col gap-4 px-4 pb-2 sm:px-8">
      {/* Title */}
      <SectionTitle title={t("portfolio.title")} styles="justify-start" />
      {/* Gallery */}
      <div className="m-auto mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-16">
        {projects.map(({ id, project }) => (
          <ProjectCard
            cardPictureName={project.images[0]}
            projectTitle={project.title}
            key={id}
            pageURL={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
