import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-6">
      <CheckCircle className="text-primary/80 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold text-primary mb-2">
        Payment Successful!
      </h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your transaction was completed
        successfully.
      </p>
      <Link
        to="/profile/orders"
        className="bg-primary  text-white not-only:p-3 rounded-full"
      >
        Go TO Orders
      </Link>
    </div>
  );
};

export default Success;
