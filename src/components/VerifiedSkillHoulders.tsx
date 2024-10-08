import React from 'react';

interface SkillHolderProps {
  imageSrc: string;
  text?: string;
}

const SkillHolder: React.FC<SkillHolderProps> = ({ imageSrc, text }) => (
  <div className="flex flex-col text-6xl font-bold tracking-tighter leading-none text-center text-black whitespace-nowrap min-w-[240px] w-[284px] max-md:text-4xl">
    <img loading="lazy" src={imageSrc} alt="" className="object-contain w-full aspect-[1.47]" />
    {text && <div className="self-start mt-5 ml-5 max-md:ml-2.5 max-md:text-4xl">{text}</div>}
  </div>
);

const VerifiedSkillHolders: React.FC = () => {
  const skillHolders = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/892fbfd1d353c84cfc8ae2f259657fdddb1c0d72c2d8c3a95c0612e25bd910ce?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a", text: "Verified" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24e4963440dde4aab855bf81bbc87fede88c9430288748919a79c2345eed9e1a?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/423e3dd10166f9dd0c319794e42f79ae78c20cbac78b08141055d432e36fdf01?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1de61c39fd6fad0de0781d727d85548cf9418be47461b902df60af84e0dac4a?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a" },
  ];

  return (
    <section className="flex overflow-hidden flex-col py-32 w-full bg-white max-w-[1440px] max-md:pt-24 max-md:max-w-full">
      <h2 className="self-center text-6xl font-bold tracking-tighter leading-none text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
        Join 10,000+ verified skill holders
      </h2>
      <div className="flex items-start mt-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start pr-16 pl-16 min-w-[240px] max-md:px-5 max-md:max-w-full">
          {skillHolders.map((holder, index) => (
            <SkillHolder key={index} imageSrc={holder.imageSrc} text={holder.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerifiedSkillHolders;