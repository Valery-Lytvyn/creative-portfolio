import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IconCarousel from "../ui/IconCarousel";
import Tagline from "../ui/Tagline";
import Anchor from "../ui/Anchor";
import { ROUTES } from "../../routing/routes";
import { contacts } from "../../lib/contactsData";
import heroSmall from "../../assets/hero_small.webp";
import heroLarge from "../../assets/hero_large.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = memo(() => {
  const { t } = useTranslation();

  return (
    <>
      {/* Container */}
      <div className="mx-auto flex h-full max-w-6xl flex-col flex-wrap px-4 pb-2 sm:px-8 lg:min-h-[calc(100vh_-_6rem)] lg:max-w-screen-2xl lg:flex-row lg:flex-nowrap">
        {/* Left Section */}
        <div className="relative z-10 flex flex-1 flex-col justify-center gap-4 lg:gap-6">
          {/* Main Title */}
          <h1 className="title bg-gradient-to-br from-accent/50 to-primary bg-clip-text text-start text-6xl font-bold text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
            {t("intro.greeting")} <br /> {t("intro.name")} <br />
            {t("intro.surname")}
          </h1>
          {/* Subtitle */}
          <h2 className="empty-text flex-1 self-end text-right text-4xl font-semibold text-accent sm:text-5xl md:text-6xl lg:text-7xl">
            {t("intro.sloganPartOne")} <br /> {t("intro.sloganPartTwo")}
          </h2>
          {/* Link to Portfolio */}
          <Anchor
            pathname={ROUTES.index}
            hash={ROUTES.HASHES.portfolio}
            label={t("intro.viewProjects")}
            children={t("intro.viewProjects")}
            className="title transition-smooth mt-6 w-fit rounded-full bg-secondary px-6 py-3 tracking-wider text-white shadow-md hover:bg-primary"
          />
        </div>
        {/* Right Section */}
        <div className="relative z-10 flex flex-1 flex-col justify-end gap-4 lg:gap-6">
          <Anchor
            pathname={ROUTES.index}
            hash={ROUTES.HASHES.contact}
            label={t("intro.contactMe")}
            children={t("intro.contactMe")}
            className="title transition-smooth mt-6 w-fit rounded-full bg-primary px-6 py-3 tracking-wider text-white shadow-md hover:bg-secondary"
          />
          {/* Icons and Tagline */}
          <div className="mt-6 flex flex-col items-end gap-2 md:gap-4 lg:gap-6">
            <IconCarousel items={contacts} />
            <Tagline slogan={t("intro.tagline")} styles="text-right pr-2" />
          </div>
        </div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-y-0 right-0 -z-0 hidden min-h-full sm:block lg:w-1/2">
        <picture className="flex h-full w-full">
          <source srcSet={`${heroSmall} 640w`} media="(max-width: 640px)" />
          <source srcSet={`${heroLarge} 1080w`} media="(min-width: 641px)" />
          <LazyLoadImage
            src={heroLarge}
            alt={t("imageAlt")}
            effect="blur"
            style={{
              opacity: 0.2,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-tr from-dark to-transparent"></div>
      </div>
      {/* Decorative Background Element */}
      <div className="absolute left-0 top-0 -z-0 h-48 w-48 bg-highlight opacity-30 blur-3xl md:h-64 md:w-64"></div>
    </>
  );
});

export default HeroSection;
