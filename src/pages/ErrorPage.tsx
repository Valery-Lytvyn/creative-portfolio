import { FaArrowLeft } from "react-icons/fa";
import { useRouteError } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ROUTES } from "../routing/routes";
import Anchor from "../components/ui/Anchor";
import errorBack from "../assets/error_page_back.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

function ErrorPage() {
  const error = useRouteError() as RouteError;
  const { t } = useTranslation();

  return (
    <main className="relative mx-auto h-screen w-full overflow-hidden px-4 sm:px-8 lg:max-w-screen-2xl">
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-5">
        {/* Error description*/}
        <h1 className="text-6xl font-bold text-primary">
          {t("errorPage.title")}
        </h1>
        <h2 className="text-center text-2xl text-secondary">
          {t("errorPage.subtitle")}
        </h2>
        <p className="text-center italic">
          {error?.statusText || error?.message}
        </p>
        <Anchor
          pathname={ROUTES.index}
          hash={ROUTES.HASHES.home}
          label={t("errorPage.backToHome")}
          className="title transition-smooth mt-6 flex w-fit items-center gap-2 rounded-full bg-secondary px-6 py-3 tracking-wider text-white shadow-md hover:bg-primary"
        >
          <FaArrowLeft />
          <span>{t("errorPage.backToHome")}</span>
        </Anchor>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-0 hidden items-center justify-center opacity-20 sm:flex">
        <LazyLoadImage
          src={errorBack}
          alt={t("imageAlt")}
          className="h-full w-auto object-cover"
          loading="lazy"
          effect="blur"
        />
        <div className="back-gradient absolute inset-0"></div>
      </div>
    </main>
  );
}

export default ErrorPage;
