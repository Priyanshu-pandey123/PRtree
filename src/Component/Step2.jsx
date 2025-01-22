import React from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import { FiCheck } from "react-icons/fi";

export function Step2() {
  const { register, watch } = useFormContext();
  const watchedServices = watch("services");

  const services = [
    { id: "companyBranding", label: "Company Branding/Promotion" },
    { id: "productLaunch", label: "Product Launch" },
    { id: "individualPR", label: "Individual PR" },
    { id: "consultation", label: "For Consultation" },
    { id: "pressRelease", label: "Press Release Dissemination" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Select Services</h3>
      <div className="space-y-4">
        {services.map(({ id, label }) => (
          <label
            key={id}
            className={clsx(
              "flex items-center p-4 border rounded-lg cursor-pointer transition-colors",
              watchedServices[id]
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            )}
          >
            {/* Hidden checkbox input */}
            <input
              type="checkbox"
              {...register(`services.${id}`)}
              className="hidden" // Hide the actual checkbox input
            />

            {/* Custom checkbox styling */}
            <div
              className={clsx(
                "w-5 h-5 rounded-full border flex items-center justify-center mr-3",
                watchedServices[id]
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-300"
              )}
            >
              {watchedServices[id] && (
                <FiCheck className="w-3 h-3 text-white" />
              )}
            </div>

            {/* Service label */}
            <span className="text-sm font-medium text-gray-900">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
