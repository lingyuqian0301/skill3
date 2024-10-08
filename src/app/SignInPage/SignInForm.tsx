/**
 * This code was generated by Builder.io.
 */
import React from "react";

const SignInForm: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <form className="flex flex-col items-start mt-2 text-xl font-semibold leading-relaxed text-sky-900 max-md:mt-10">
        <h1 className="text-5xl leading-none max-md:text-4xl">Sign In</h1>
        <label htmlFor="username" className="sr-only">
          Username/Email
        </label>
        <input
          id="username"
          type="text"
          className="self-stretch px-5 py-3.5 mt-8 w-full whitespace-nowrap bg-white rounded-xl border border-sky-900 border-solid"
          placeholder="username/email"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="self-stretch px-5 py-3.5 mt-5 w-full whitespace-nowrap bg-white rounded-xl border border-sky-900 border-solid max-md:px-5"
          placeholder="Password"
        />
        <button
          type="submit"
          className="px-14 py-3.5 mt-5 bg-white rounded-xl border border-sky-900 border-solid max-md:px-5"
        >
          Sign In
        </button>
        <a href="#" className="mt-5 underline">
          Forgot Password
        </a>
      </form>
    </div>
  );
};

export default SignInForm;
