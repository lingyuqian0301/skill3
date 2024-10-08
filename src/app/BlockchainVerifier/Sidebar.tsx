/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Sidebar: React.FC = () => {
  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b9986aaae3c2e207f18cd82916f8d8b3c1dec0895edb815520a14f8b57e399b?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Home",
      active: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d67412d0bc484559ac6ba6c8ecb057d920e1278aeeb5def34c91c60e7df5f7f8?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Dashboard",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2095188f0b964c51d98308973961098778e3da470eccc4401a9a33a8969ebfc0?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "New Skill",
      category: "ACADEMIC",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd1a5b6a4cf0082102feba60a161e5d18e78f4c316929856a6b09594bf5ccb18?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Expert",
      category: "ACADEMIC",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a521c7b0a5cf0c500474e8f30884b60fec95678450ee56c57aa8e31105557a6?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Progress",
      category: "ACADEMIC",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f73059ca7e3402bc0ef33f019a828aaf77607d075242436d575a98c2495db2e?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Chat",
      category: "ACADEMIC",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3275b57f34ef31ccc87d3808a0a893fa187cea05ab0bfd024b1742b4370bb2c8?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Announcements",
      category: "ACADEMIC",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00f7fbad29da18e90e63db389c351ba92eaf9d5d951c0cf95fa6d168fc6e03b0?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Account settings",
      category: "SETTINGS",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb91eb8b5535eb63818f1ee496cd67f3eacd56c0905c6fd29e6ab6b0d21e4736?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Notification preferences",
      category: "SETTINGS",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e99f2ac5ca4749d9b9b61225f16196e5a5b17b9e0b4602321dff8b40fefdef19?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Logout",
    },
  ];

  return (
    <aside className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
      <nav className="flex overflow-hidden flex-col grow w-full text-base font-semibold bg-white border-r border-neutral-200 max-md:mt-4">
        <div className="flex overflow-hidden flex-col bg-white border-r border-neutral-200">
          <div className="flex flex-col items-start pt-7 pr-1.5 pb-48 w-full bg-slate-900 rounded-[76px] max-md:pb-24">
            <div className="flex-1 shrink gap-2.5 px-3.5 py-2.5 text-white whitespace-nowrap rounded-md border-white border-l-[5px]">
              Home
            </div>
            <div className="z-10 flex-1 shrink gap-2.5 px-3.5 py-2.5 mt-0 text-white whitespace-nowrap rounded-md border-white border-l-[5px]">
              Home
            </div>
            <h2 className="z-10 -mt-6 ml-4 text-3xl tracking-tight text-zinc-100 max-md:ml-2.5">
              Skill³
            </h2>
            <div className="flex flex-col self-stretch mt-14 mb-0 w-full text-xl font-medium max-md:mt-10 max-md:mb-2.5">
              <div className="flex flex-col items-start pr-12 pl-5 w-full font-semibold whitespace-nowrap max-md:pr-5">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-2.5 px-3.5 py-2.5 mt-3.5 ${
                      item.active
                        ? "text-teal-500 border-teal-500"
                        : "text-white border-white"
                    } rounded-md border-l-[5px]`}
                  >
                    <img
                      loading="lazy"
                      src={item.icon}
                      alt=""
                      className="object-contain shrink-0 my-auto w-5 aspect-square"
                    />
                    <div className="flex-1 shrink basis-0">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
