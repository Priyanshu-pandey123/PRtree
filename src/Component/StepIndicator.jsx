import React from "react";
import { FiCheck } from "react-icons/fi";
import clsx from "clsx";

function StepIndicator({ currentStep }) {
  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Services" },
    { number: 3, title: "Company Info" },
  ];

  return (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="relative flex items-center">
            <div
              className={clsx(
                "w-8 h-8 rounded-full flex items-center justify-center border-2",
                currentStep > step.number
                  ? "bg-blue-600 border-blue-600"
                  : currentStep === step.number
                  ? "border-blue-600 text-blue-600"
                  : "border-gray-300 text-gray-300"
              )}
            >
              {currentStep > step.number ? (
                <FiCheck className="w-5 h-5 text-white" />
              ) : (
                <span className="text-sm font-medium">{step.number}</span>
              )}
            </div>
            <div className="hidden sm:block ml-3">
              <p
                className={clsx(
                  "text-sm font-medium",
                  currentStep >= step.number ? "text-gray-900" : "text-gray-500"
                )}
              >
                {step.title}
              </p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={clsx(
                "hidden sm:block w-20 h-0.5 mx-4",
                currentStep > step.number ? "bg-blue-600" : "bg-gray-300"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;
