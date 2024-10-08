/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import SignInForm from "./SignInForm";

const SignInPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-28 bg-white max-md:pb-24">
      <Header />
      <main className="self-center pt-10 pr-4 pb-6 pl-16 mt-16 max-w-full bg-zinc-100 w-[837px] max-md:pl-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3baef5894381fa19e9662196c56a9b538debcb02c3553a6d259d877745b12ed3?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
              alt=""
              className="object-contain grow w-full aspect-[0.86] max-md:mt-10"
            />
          </div>
          <SignInForm />
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
