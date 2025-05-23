import { useState } from "react";

export const useStepNavigation = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  return {
    step,
    nextStep,
    prevStep,
    setStep,
  };
};
