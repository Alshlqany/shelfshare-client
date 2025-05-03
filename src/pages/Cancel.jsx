import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <XCircle className="text-red-500 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold text-red-600 mb-2">Payment Canceled</h1>
      <p className="text-gray-700 mb-6">
        Your transaction was canceled. If this was a mistake, you can try again
        from your orders page.
      </p>
      <Link
        to="/profile/orders"
        className="bg-primary text-white px-6 py-3 rounded-full"
      >
        Go to Orders
      </Link>
    </div>
  );
};

export default Cancel;
