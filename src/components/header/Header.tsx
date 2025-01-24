import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../ui/Logo";
import { ROUTES } from "../../routing/routes";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const navbarList = [
  { id: 1, title: "home", link: ROUTES.HASHES.home },
  { id: 2, title: "about", link: ROUTES.HASHES.about },
  { id: 3, title: "portfolio", link: ROUTES.HASHES.portfolio },
  { id: 4, title: "contact", link: ROUTES.HASHES.contact },
];
const Header: React.FC = () => {
  const { hash } = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <header className="fixed inset-0 z-50 h-24">
      <motion.div
        className="relative z-50 mx-auto flex items-center justify-between bg-transparent bg-opacity-10 bg-clip-padding p-4 backdrop-blur-sm backdrop-filter sm:px-8 lg:max-w-screen-2xl"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.05 }}
      >
        {/* Logo */}
        <Logo />
        {/* Desktop Navbar */}
        <ul className="hidden justify-center gap-10 md:flex">
          {navbarList.map(({ id, title, link }) => (
            <li
              key={id}
              className={`transition-all duration-300 ease-in-out hover:text-secondary ${
                (!hash && title === "home") || hash.slice(1) === title
                  ? "text-secondary"
                  : "text-accent"
              }`}
            >
              <Link
                to={{ pathname: ROUTES.index, hash: link }}
                className="p-4 text-2xl first-letter:uppercase"
              >
                {t(`navigation.${title}`)}{" "}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div className="flex gap-2">
          <button
            onClick={() => changeLanguage("en")}
            className={`rounded bg-opacity-50 px-1 text-lg ${
              i18n.language === "en"
                ? "bg-gray-800 text-secondary"
                : "text-accent/40"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("ua")}
            className={`rounded bg-opacity-50 px-1 text-lg ${
              i18n.language === "ua"
                ? "bg-gray-800 text-secondary"
                : "text-accent/40"
            }`}
          >
            UA
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="text-2xl text-accent md:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-dark md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, easing: "ease-in-out" }}
          >
            <ul className="space-y-6 text-center">
              {navbarList.map(({ id, title, link }) => (
                <li key={id}>
                  <Link
                    to={{ pathname: ROUTES.index, hash: link }}
                    className={`block text-3xl text-white first-letter:uppercase ${
                      hash.slice(1) === title ? "text-secondary" : "text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(`navigation.${title}`)}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
