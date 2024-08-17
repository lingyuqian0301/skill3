/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ProgressStep {
  label: string;
}

const ProgressBar: React.FC = () => {
  const steps: ProgressStep[] = [
    { label: "Registration" },
    { label: "Account Type" },
    { label: "Confirmation" },
  ];

  return (
    <div className="flex flex-wrap gap-5 justify-between items-start mt-2.5 max-w-full text-xl font-semibold leading-relaxed text-sky-900 w-[836px]">
      {steps.map((step, index) => (
        <div
          key={index}
          className="px-5 py-1 whitespace-nowrap bg-zinc-100 max-md:pl-5"
        >
          {step.label}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
