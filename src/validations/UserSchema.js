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

// const userSchema = new mongoose.Schema(
//     {
//       name: { type: String, required: true },
//       email: { type: String, required: true, unique: true },
//       password: { type: String, required: true },
//       role: {
//         type: String,
//         enum: ["user", "admin"],
//         default: "user",
//       },
//       address: { type: String, required: true },
//       phone: String,
//       isVerified: { type: Boolean, default: false },
//       otp: String,
//       otpExpires: Date,
//     },
//     { timestamps: true }
//   );
//   export default mongoose.model("User", userSchema);
