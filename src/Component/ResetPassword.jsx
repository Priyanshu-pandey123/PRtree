import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../store/apiSlice";
import { toast, ToastContainer } from "react-toastify";
const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { id } = useParams();
  const [resetPassword, { isLoading, isError, isSuccess, error }] =
    useResetPasswordMutation();
  console.log(id);

  const onSubmit = async (data) => {
    console.log("Reset Password Data:", data);

    try {
      const response = await resetPassword({ id, passwordData: data }).unwrap();
      console.log("Success:", response);
      toast.success("successfully change the password");
    } catch (err) {
      console.error("Failed:", err);
      toast.error("OOPS! something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="mt-1 p-2 w-full border rounded"
            />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              {...register("newPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="mt-1 p-2 w-full border rounded"
            />
            <p className="text-red-500 text-xs">
              {errors.newPassword?.message}
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === watch("newPassword") || "Passwords do not match",
              })}
              className="mt-1 p-2 w-full border rounded"
            />
            <p className="text-red-500 text-xs">
              {errors.confirmPassword?.message}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
