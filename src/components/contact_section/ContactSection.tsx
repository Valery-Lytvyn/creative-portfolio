import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TelegramNotifier from "./TelegramNotifier";
import IconCarousel from "../ui/IconCarousel";
import { contacts } from "../../lib/contactsData";
import Tagline from "../ui/Tagline";
import SectionTitle from "../ui/SectionTitle";
import contactBg from "../../assets/contact_back.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative mx-auto flex max-w-screen-2xl flex-col p-4 pb-2 sm:p-8">
        <div className="relative z-10">
          {/* Title */}
          <SectionTitle title={t("contact.title")} styles="justify-end" />
          <div className="flex flex-col-reverse gap-4 md:flex-row lg:gap-16">
            {/* Contact Form */}
            <div className="mx-auto flex w-full max-w-screen-md flex-1 items-center justify-center">
              <TelegramNotifier />
            </div>
            {/*  Tagline*/}
            <div className="flex flex-1 flex-col gap-4 lg:gap-6">
              <Tagline slogan={t("contact.tagline")} styles="text-right" />
              <p className="w-3/4 self-end text-end text-xl leading-relaxed text-light-gray">
                {t("contact.descriptionPartOne")} <br />{" "}
                {t("contact.descriptionPartTwo")}
              </p>
            </div>
          </div>
          {/* Contact icons */}
          <div className="mt-6 flex items-center justify-center">
            <IconCarousel items={contacts} />
          </div>
        </div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-0 hidden h-full w-full opacity-20 sm:block">
        <LazyLoadImage
          src={contactBg}
          alt={t("imageAlt")}
          loading="lazy"
          effect="blur"
          className="mx-auto h-auto w-screen object-cover opacity-20"
        />
        <div className="back-gradient absolute inset-0 -z-0 h-full w-full"></div>
      </div>
    </>
  );
};

export default ContactSection;
