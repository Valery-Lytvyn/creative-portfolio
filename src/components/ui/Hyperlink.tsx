import React from "react";

interface HyperlinkProps {
  href: string;
  children: React.ReactNode | string;
  className?: string;
  label: string;
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
}
const Hyperlink: React.FC<HyperlinkProps> = ({
  href,
  children,
  className,
  label,
  onClick,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Hyperlink;
