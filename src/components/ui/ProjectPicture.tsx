import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { IMAGE_KIT_URL_ENDPOINT } from "../../lib/constants";
import errorImage from "../../assets/error_image.webp";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ErrorFallbackProps {
  errorText: string;
}
const ErrorFallback: React.FC<ErrorFallbackProps> = ({ errorText }) => (
  <div className="relative -z-0 flex h-full w-full flex-col items-center gap-1">
    <LazyLoadImage
      src={errorImage}
      alt="Error Image"
      className="h-auto w-full rounded-xl object-cover opacity-20"
      loading="lazy"
      effect="blur"
      style={{ opacity: 0.2 }}
    />
    <div className="absolute inset-0 mx-auto flex w-2/3 flex-col items-center gap-2 p-2 pt-6">
      <HiOutlineEmojiSad className="text-center text-2xl" />
      <span className="px-4 text-center text-2xl text-red-500">
        {errorText}
      </span>
    </div>
  </div>
);

interface ProjectPictureProps {
  fileName: string;
  projectTitle: string;
}
const ProjectPicture: React.FC<ProjectPictureProps> = ({
  fileName = "",
  projectTitle = "",
}) => {
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  const imageSrc = useMemo(() => {
    if (!fileName) return "";
    return `${IMAGE_KIT_URL_ENDPOINT}${fileName}.webp`;
  }, [fileName]);

  useEffect(() => {
    setHasError(false);
  }, [fileName]);

  const handleError = () => {
    setHasError(true);
  };

  return hasError || !imageSrc ? (
    <ErrorFallback errorText={t("portfolio.errorLoadingImage")} />
  ) : (
    <LazyLoadImage
      loading="lazy"
      src={imageSrc}
      alt={`${t("portfolio.projectImage")} ${projectTitle}`}
      className="transition-smooth h-full rounded-t-lg object-cover group-hover:scale-110"
      effect="blur"
      onError={handleError}
    />
  );
};

export default ProjectPicture;
