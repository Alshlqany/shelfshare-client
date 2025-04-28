import { useFormik } from "formik";
import { verifyEmailSchema } from "../../validations/UserSchema";
import { useVerifyOtpMutation } from "../../app/features/authApi";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SendOtpButton from "./SendOtpButton";
import Input from "../ui/Input";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";

const VerifyEmailForm = () => {
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
      otp: "",
    },
    validationSchema: verifyEmailSchema,
    onSubmit: async (values) => {
      try {
        const res = await verifyOtp(values).unwrap();
        toast.success(res.message);
        navigate("/login");
      } catch (err) {
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });

  return (
    <FormContainer label="Verify Your Email">
      <form className="flex flex-col space-y-6" onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full h-full outline-none px-3 py-2 "
          placeholder="Enter your email"
          label="Email"
          error={formik.errors.email}
          touched={formik.touched.email}
        >
          <SendOtpButton
            email={formik.values.email}
            error={formik.errors.email}
          />
        </Input>
        <Input
          id="otp"
          name="otp"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.otp}
          label="OTP"
          placeholder="Enter your OTP"
          error={formik.errors.otp}
          touched={formik.touched.otp}
        />

        <Link to="/login" className="text-sm text-[#2C9DB7] hover:underline">
          Go To Login?
        </Link>

        <SubmitButton disabled={formik.isSubmitting || isLoading}>
          {isLoading ? "VERIFYING Email..." : "VERIFY EMAIL"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default VerifyEmailForm;
