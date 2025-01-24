import React from "react";

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <h2 className="title mb-6 text-center text-2xl font-semibold italic text-secondary md:text-4xl">
      {text}
    </h2>
  );
};

export default Subtitle;
