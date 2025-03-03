import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiCheck,
} from "react-icons/fi";

import { Step1 } from "../Component/Step1";
import StepIndicator from "../Component/StepIndicator";
import { Step2 } from "../Component/Step2";
import clsx from "clsx";
import { Step3 } from "../Component/Step3";
import styles from "../css/multiform.module.css";
import { useCreateLeadMutation } from "../store/leadSlice";
import { useNavigate } from "react-router-dom";

function MultiForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [createLead, { isLoading: isCreateLeadLoading }] =
    useCreateLeadMutation();
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      services: {
        companyBranding: false,
        productLaunch: false,
        individualPR: false,
        consultation: false,
        pressRelease: false,
      },
    },
  });

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    try {
      const result = await createLead(data);
      console.log(result);
      toast.success("form sumitted successfully");
      navigate("/admin-table");
    } catch (err) {
      console.log(err);
      toast.err("some problem in submitted form");
    }
  };

  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-fit pt-28 bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6 lg:p-8 flex justify-center">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Service Request Form
        </h1>

        <StepIndicator currentStep={currentStep} />

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={`mt-8`}>
            <div className="mb-8">
              {currentStep === 1 && <Step1 />}
              {currentStep === 2 && <Step2 />}
              {currentStep === 3 && <Step3 />}
            </div>

            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FiArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                >
                  Next
                  <FiArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors ml-auto"
                >
                  Submit
                  <FiCheckCircle className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </form>
        </FormProvider>
        <ToastContainer />
      </div>
    </div>
  );
}

export default MultiForm;
