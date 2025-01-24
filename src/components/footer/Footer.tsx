import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../ui/Logo";
import footerBack from "../../assets/footer_back.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative w-full overflow-hidden bg-dark-bg text-light-gray">
      {/* Container */}
      <div className="relative z-20 mx-auto flex flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:p-8 lg:max-w-screen-2xl">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          {/* Logo */}
          <Logo />
          <span className="text-sm text-primary">{t("footer.copyright")}</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center sm:items-end sm:gap-4 sm:text-right">
          <h3 className="text-xl font-semibold text-accent">
            {t("footer.location.title")}
          </h3>
          <address className="flex flex-col items-center not-italic sm:items-end">
            <span>{t("footer.location.address")}</span>
            <span>
              {t("footer.location.phone")}{" "}
              <a
                href="tel:0965951726"
                className="text-primary hover:underline"
                aria-label={t("footer.location.phoneLabel")}
              >
                096 595 17 26
              </a>
            </span>
            <span>
              {t("footer.location.email")}{" "}
              <a
                href="mailto:lytvynvalery@gmail.com"
                className="text-primary hover:underline"
                aria-label={t("footer.location.emailLabel")}
              >
                lytvynvalery@gmail.com
              </a>
            </span>
          </address>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute bottom-0 right-0 -z-0 h-14 w-14 bg-highlight opacity-60 blur-3xl"></div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-0 hidden items-center justify-center opacity-20 sm:flex">
        <LazyLoadImage
          src={footerBack}
          alt="Footer Background"
          className="h-full w-auto object-cover"
          loading="lazy"
          effect="blur"
        />
        <div className="footer-gradient absolute inset-0"></div>
      </div>
    </footer>
  );
};

export default Footer;
