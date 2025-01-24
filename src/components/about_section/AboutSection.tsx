import React from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Tagline from "../ui/Tagline";
import SectionTitle from "../ui/SectionTitle";
import Subtitle from "../ui/Subtitle";
import { skills } from "../../lib/skillsData";
import aboutBg from "../../assets/about_back.webp";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col-reverse flex-wrap px-4 pb-2 sm:px-8 lg:min-h-[calc(100vh_-_6rem)] lg:flex-row lg:flex-nowrap">
        {/* Left Section */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-end gap-4 pt-6 lg:gap-16">
          {/* Technologies Section */}
          <Subtitle text={t("skills.title")} />
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                className="rounded-full bg-gradient-to-r from-primary to-highlight px-4 py-2 text-dark shadow-md"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
          {/* Tagline */}
          <Tagline slogan={t("about.tagline")} styles="text-start" />
        </div>
        {/* Right Section */}
        <div className="relative z-10 flex flex-1 flex-col items-start gap-4 lg:items-end lg:gap-6">
          {/* Title */}
          <SectionTitle title={t("about.title")} styles="justify-end w-full" />
          <div className="flex w-full flex-col gap-4 text-xl text-light-gray lg:text-end">
            <p>{t("about.descriptionPartOne")}</p>
            <p>{t("about.descriptionPartTwo")}</p>
            <p>{t("about.descriptionPartThree")}</p>
          </div>
        </div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-0 hidden h-full w-full opacity-20 sm:block">
        {/* <picture className="mx-auto flex h-full w-screen"> */}
        <LazyLoadImage
          src={aboutBg}
          alt={t("imageAlt")}
          loading="lazy"
          effect="blur"
          className="mx-auto h-auto w-screen object-cover opacity-20"
        />
        {/* </picture> */}
        <div className="back-gradient absolute inset-0 -z-0 h-full w-full"></div>
      </div>
    </>
  );
};

export default AboutSection;
