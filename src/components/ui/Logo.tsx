import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routing/routes";
import logo from "../../assets/logo.webp";

const Logo: React.FC = () => {
  return (
    <div className="h-14 w-14">
      <Link
        to={{ pathname: ROUTES.index, hash: ROUTES.HASHES.home }}
        aria-label="Go to Hero Section"
      >
        <LazyLoadImage
          alt="logo"
          src={logo}
          loading="lazy"
          className="h-14 w-14 object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
