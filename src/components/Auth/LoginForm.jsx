import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { loginSchema } from "../../validations/UserSchema";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../app/features/authApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/features/userSlice";

const LoginForm = () => {
  const [login, { data, isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        validateYupSchema(values, loginSchema);
        const res = await login(values).unwrap();
        console.log(res);
        dispatch(setUser(res.token));
        toast.success("Login successful!");
      } catch (err) {
        toast.error(err.response.message);
      }
    },
  });

  return (
    <div className="p-20  w-full h-screen flex flex-col justify-center bg-white">
      <h1 className="text-3xl font-bold text-[#2C9DB7] mb-6 ">Login</h1>
      <form className="flex flex-col space-y-6" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`px-4 py-2 border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C9DB7] focus:border-transparent`}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`px-4 py-2 border ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C9DB7] focus:border-transparent`}
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <Link
            to="/forgot-password"
            className="text-sm text-[#2C9DB7] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#2C9DB7] text-white py-2 rounded-lg font-semibold hover:bg-[#238ca3] transition duration-300"
          disabled={formik.isSubmitting || isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      {data && (
        <p className="text-sm text-green-500 mt-4">
          Login successful! Redirecting...
        </p>
      )}
    </div>
  );
};

export default LoginForm;
