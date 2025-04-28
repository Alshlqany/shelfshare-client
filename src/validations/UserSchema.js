import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .uppercase("Password must contain at least one uppercase letter")
    .lowercase("Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export const signupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .uppercase("Password must contain at least one uppercase letter")
    .lowercase("Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});
export const resetPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .uppercase("Password must contain at least one uppercase letter")
    .lowercase("Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  otp: yup
    .string()
    .required("OTP is required")
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits"),
});

export const verifyEmailSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  otp: yup
    .string()
    .required("OTP is required")
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits"),
});
