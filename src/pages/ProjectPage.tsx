import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import { projects } from "../lib/projects";
import Hyperlink from "../components/ui/Hyperlink";
import Subtitle from "../components/ui/Subtitle";
import ProjectPicture from "../components/ui/ProjectPicture";
import { useTranslation } from "react-i18next";

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <>
      {images.map((image, i) => (
        <div className="group overflow-hidden rounded-lg" key={`${image}${i}`}>
          <ProjectPicture projectTitle={image} fileName={image} />
        </div>
      ))}
    </>
  );
};
type FeatureProps = {
  title: string;
  details: string;
};

const Feature: React.FC<FeatureProps> = ({ title, details }) => {
  return (
    <div className="transform rounded-lg bg-gray-800 p-6 shadow-md transition-transform hover:scale-105">
      <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
      <p className="text-gray-400">{details}</p>
    </div>
  );
};

type TechBadgeProps = {
  technology: string;
};

const TechBadge: React.FC<TechBadgeProps> = ({ technology }) => {
  return (
    <span className="rounded-full bg-gradient-to-r from-primary to-highlight px-4 py-2 text-dark shadow-md">
      {technology}
    </span>
  );
};

interface Project {
  title: string;
  url: string;
  repository: string;
  images: string[];
  getDescription: () => string;
  features: {
    getTitle: () => string;
    getDetails: () => string;
  }[];
  technologies: string[];
  getConclusion: () => string;
}

const ProjectPage: React.FC = () => {
  const { categoryName } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const currentProject = projects.find(
      ({ project }) => project.title.toLowerCase() === categoryName,
    );

    setProject((currentProject?.project as Project) || null);
  }, [categoryName]);

  return (
    <div
      className="from-dark-bg mx-auto max-w-screen-2xl bg-gradient-to-br to-gray-900 p-4 pt-32 text-light-gray"
      id="project"
    >
      {/* Header Section */}
      <div className="mb-12 text-center">
        <SectionTitle
          title={project?.title || ""}
          styles="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-primary font-bold "
        />
        <p className="mt-6 text-lg leading-relaxed text-gray-400">
          {project?.getDescription() || ""}
        </p>
      </div>
      {/* Image Gallery */}
      {project?.images && project?.images.length > 0 && (
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ImageGallery images={project?.images} />
        </div>
      )}
      {/* Links Section */}
      <div className="mb-12 flex flex-wrap justify-center gap-8">
        {project?.url && (
          <Hyperlink
            href={project?.url}
            children={t("project.viewProjectLink")}
            className="title transition-smooth rounded-full bg-primary px-6 py-3 tracking-wider text-white shadow-md hover:bg-secondary"
            label={`${t("project.linkToPage")} ${project?.url}`}
          />
        )}
        {project?.repository && (
          <Hyperlink
            href={project?.repository}
            children={t("project.viewRepositoryLink")}
            className="title transition-smooth rounded-full bg-secondary px-6 py-3 tracking-wider text-white shadow-md hover:bg-primary"
            label={`${t("project.linkToPage")} ${project?.repository}`}
          />
        )}
      </div>
      {/* Key Features Section */}
      {project?.features && project?.features?.length > 0 && (
        <div className="mb-12">
          <Subtitle text={t("project.keyFeatures")} />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {project?.features.map(({ getTitle, getDetails }, i) => (
              <Feature
                key={`${getTitle()}${i}`}
                details={getDetails()}
                title={getTitle()}
              />
            ))}
          </div>
        </div>
      )}
      {/* Technologies Section */}
      {project?.technologies && project?.technologies?.length > 0 && (
        <div className="mb-12">
          <Subtitle text={t("project.technologiesUsed")} />
          <div className="flex flex-wrap justify-center gap-4">
            {project?.technologies.map((tech) => (
              <TechBadge key={tech} technology={tech} />
            ))}
          </div>
        </div>
      )}
      {/* Conclusion Section */}
      {project?.getConclusion && (
        <div className="mb-12 text-center">
          <Subtitle text={t("project.conclusion")} />
          <p className="text-lg leading-relaxed text-gray-400">
            {project?.getConclusion()}
          </p>
        </div>
      )}
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 -z-0 h-64 w-64 rounded-full bg-highlight opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-accent opacity-20 blur-3xl"></div>
    </div>
  );
};

export default ProjectPage;
