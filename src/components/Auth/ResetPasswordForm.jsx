import { useFormik } from "formik";
import { resetPasswordSchema } from "../../validations/UserSchema";
import { useResetPasswordMutation } from "../../app/features/authApi";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SendOtpButton from "./SendOtpButton";
import Input from "../ui/Input";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";

const ResetPasswordForm = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
      otp: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      try {
        const res = await resetPassword(values).unwrap();
        toast.success(res.message);
        navigate("/login");
      } catch (err) {
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });

  return (
    <FormContainer label="Reset Password">
      <form className="flex flex-col space-y-6" onSubmit={formik.handleSubmit}>
        <Input
          error={formik.errors.email}
          touched={formik.touched.password}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full h-full outline-none px-3 py-2 "
          placeholder="Enter your email"
          label="Email"
        >
          <SendOtpButton
            email={formik.values.email}
            error={formik.errors.email}
            isForResetPassword
          />
        </Input>
        <Input
          error={formik.errors.otp}
          touched={formik.touched.otp}
          label="OTP"
          id="otp"
          name="otp"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.otp}
          placeholder="Enter your OTP"
        />
        <Input
          error={formik.errors.newPassword}
          touched={formik.touched.newPassword}
          label="New Password"
          id="newPassword"
          name="newPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.newPassword}
          placeholder="Enter your password"
        />
        <Link to="/login" className="text-sm text-[#2C9DB7] hover:underline">
          Go To Login?
        </Link>
        <SubmitButton disabled={formik.isSubmitting || isLoading}>
          {isLoading ? "VERIFYING OTP..." : "VERIFY OTP"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ResetPasswordForm;
