import { useFormik } from "formik";
import React from "react";
import { loginSchema } from "../../validations/UserSchema";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../app/features/authApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/features/userSlice";
import Input from "../ui/Input";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const res = await login(values).unwrap();
        dispatch(setUser(res.token));
        toast.success("Login successful!");
      } catch (err) {
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });

  return (
    <FormContainer title="Login">
      <form className="flex flex-col space-y-6" onSubmit={formik.handleSubmit}>
        <Input
          label="Email"
          error={formik.errors.email}
          touched={formik.touched.email}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          error={formik.errors.password}
          touched={formik.touched.password}
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Enter your password"
        />

        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-2">
            <Link
              to="/reset-password"
              className="text-sm text-[#2C9DB7] hover:underline"
            >
              Forgot Password?
            </Link>
            <Link
              to="/verify-email"
              className="text-sm text-[#2C9DB7] hover:underline"
            >
              Verify email?
            </Link>
          </div>
          <Link
            to="/register"
            className="text-sm text-[#2C9DB7] hover:underline"
          >
            Create new account
          </Link>
        </div>

        <SubmitButton disabled={formik.isSubmitting || isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
