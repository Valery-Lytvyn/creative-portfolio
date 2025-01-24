import React from "react";
import { Link } from "react-router-dom";

interface AnchorProps {
  pathname: string;
  hash: string;
  label: string;
  children: React.ReactNode | string;
  className?: string;
}
const Anchor: React.FC<AnchorProps> = ({
  pathname,
  hash,
  children,
  label,
  className,
}) => {
  return (
    <Link to={{ pathname, hash }} className={className} aria-label={label}>
      {children}
    </Link>
  );
};

export default Anchor;
