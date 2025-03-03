// Step3 Component
import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "../css/multiform.module.css";
import clsx from "clsx";

export function Step3() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-gray-700"
        >
          Company Name
        </label>
        <input
          placeholder="Enter company name"
          type="text"
          id="companyName"
          {...register("companyName", {
            required: "Company name is required",
          })}
          className={styles.inputText}
        />
        {errors.companyName && (
          <p className="mt-1 text-sm text-red-600">
            {errors.companyName.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-gray-700"
        >
          Website
        </label>
        <input
          type="url"
          id="website"
          {...register("website", {
            required: "Website URL is required",
            pattern: {
              value:
                /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
              message: "Please enter a valid URL",
            },
          })}
          className={styles.inputText}
          placeholder="Enter Your https://example.com"
        />
        {errors.website && (
          <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="comments"
          className="block text-sm font-medium text-gray-700"
        >
          Additional Comments
        </label>
        <textarea
          id="comments"
          {...register("comments")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Enter any additional comments here..."
          rows="4"
        />
      </div>
    </div>
  );
}
