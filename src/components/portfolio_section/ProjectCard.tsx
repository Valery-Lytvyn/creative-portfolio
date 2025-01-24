import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routing/routes";
import ProjectPicture from "../ui/ProjectPicture";
import Anchor from "../ui/Anchor";
import Hyperlink from "../ui/Hyperlink";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  cardPictureName: string;
  projectTitle: string;
  pageURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  cardPictureName,
  projectTitle,
  pageURL,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleImageClick = () => {
    navigate(ROUTES.project(projectTitle));
  };
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-t-lg">
      {/* Picture */}
      <picture
        className="relative flex h-full w-full flex-col overflow-hidden rounded-t-lg bg-dark"
        onClick={handleImageClick}
      >
        <ProjectPicture
          projectTitle={projectTitle}
          fileName={cardPictureName}
        />
        <div className="transition-smooth absolute bottom-4 z-10 flex w-full flex-col items-center gap-4 group-hover:bottom-8">
          <h3 className="text-center text-xl capitalize text-light-gray group-hover:text-light-gray">
            {projectTitle}
          </h3>
          {/* Links */}
          <div className="transition-smooth flex w-full justify-between px-1 text-dark opacity-0 group-hover:opacity-100">
            <Anchor
              pathname={ROUTES.project(projectTitle)}
              hash={ROUTES.HASHES.project}
              label={t("portfolio.moreLink")}
              children={t("portfolio.moreLink")}
              className="px-4 py-3 text-center text-sm text-white transition-colors hover:text-blue-500 hover:underline"
            />
            <Hyperlink
              href={pageURL}
              children={t("portfolio.viewLink")}
              className="px-4 py-3 text-center text-sm text-white transition-colors hover:text-blue-500 hover:underline"
              label={`${t("portfolio.linkToPage")} ${projectTitle}`}
              onClick={(ev) => ev.stopPropagation()}
            />
          </div>
        </div>
        {/* Background Pattern */}
        <div className="card-gradient absolute inset-0 -z-0" />
      </picture>
    </div>
  );
};

export default ProjectCard;
