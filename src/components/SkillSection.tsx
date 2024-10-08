/**
 * This code was generated by Builder.io.
 */
import React from "react";
import SkillCard from "./SkillCard";

interface Skill {
  title: string;
  imageSrc: string;
}

interface SkillSectionProps {
  title?: string;
  skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => {
  return (
    <section className="flex flex-col px-1 mt-14 w-full max-md:mt-10 max-md:max-w-full">
      {title && (
        <h2 className="self-start text-2xl font-bold text-black mb-9">
          {title}
        </h2>
      )}
      <div className="flex gap-5 max-md:flex-col">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            imageSrc={skill.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
