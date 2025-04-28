import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useForgetPasswordMutation,
  useResendOtpMutation,
} from "../../app/features/authApi";

const SendOtpButton = ({ email, error, isForResetPassword }) => {
  const [timer, setTimer] = useState(0);

  const [forgetPassword, { isLoading: loading1 }] = useForgetPasswordMutation();
  const [resendOtp, { isLoading: loading2 }] = useResendOtpMutation();

  const handleSendOtp = useCallback(async () => {
    try {
      if (!email) {
        toast.error("Please enter your email first");
        return;
      }
      if (error) {
        toast.error("Please enter a valid email");
        return;
      }
      const res = isForResetPassword
        ? await forgetPassword({ email }).unwrap()
        : await resendOtp({ email }).unwrap();
      toast.success(res.message);
      setTimer(60);
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }, [email, error, forgetPassword, resendOtp, isForResetPassword]);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <button
      type="button"
      onClick={handleSendOtp}
      className="p-2 cursor-pointer text-nowrap text-white rounded-md bg-primary disabled:bg-gray-500 disabled:cursor-progress"
      disabled={loading1 || loading2 || timer > 0}
    >
      {timer ? `Resend (${timer})` : "Send"}
    </button>
  );
};

export default SendOtpButton;
