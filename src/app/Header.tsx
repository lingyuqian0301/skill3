import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col grow items-center px-20 pb-12 w-full bg-green-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1448px]">
        <div className="flex flex-wrap gap-5 justify-between self-center max-w-full w-[1105px]">
          <div className="self-end mt-12 text-xl font-bold uppercase text-zinc-500 max-md:mt-10">
            skill 3
          </div>
          <nav className="flex flex-col text-lg text-black max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/40fbd3553e9309c2d960a539949bca6765b96dae12fca191c5dfa20cfa5a1809?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
              alt=""
              className="object-contain self-end max-w-full aspect-[16.67] w-[182px]"
            />
            <a href="/" className="self-start mt-12 max-md:mt-10">
              Home
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;