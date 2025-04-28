import { useFormik } from "formik";
import React from "react";
import { signupSchema } from "../../validations/UserSchema";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../app/features/authApi";
import toast from "react-hot-toast";
import Input from "../ui/Input";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";

const RegisterForm = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        const res = await signup(values).unwrap();
        navigate("/verify-email?email=" + values.email);
        toast.success(res.message);
      } catch (err) {
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });

  return (
    <FormContainer title="Create an Account">
      <form
        className="flex flex-col space-y-4 md:space-y-6"
        onSubmit={formik.handleSubmit}
      >
        <Input
          label="Name"
          error={formik.errors.name}
          touched={formik.touched.name}
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Enter your name"
        />
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
          label="address"
          error={formik.errors.address}
          touched={formik.touched.address}
          id="address"
          name="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          placeholder="Enter your address"
        />
        <Input
          label="phone"
          error={formik.errors.phone}
          touched={formik.touched.phone}
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          placeholder="Enter your phone"
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

        <Link to="/login" className="text-sm text-primary hover:underline">
          Already have an account | Login?
        </Link>

        <SubmitButton disabled={formik.isSubmitting || isLoading}>
          {isLoading ? "Registering in..." : "Register"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
