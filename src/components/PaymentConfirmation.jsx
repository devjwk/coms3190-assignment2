import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PaymentConfirmation() {
  const location = useLocation();
  const { formData } = location.state || {};

  const [transactionId, setTransactionId] = useState("");

  // Generate random transaction ID once when component mounts
  useEffect(() => {
    const randomId = "TXN-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    setTransactionId(randomId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Payment Confirmation</h1>
      {formData ? (
        <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg">
          <p className="mb-2">
            <strong>Name:</strong> {formData.fullName}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {formData.email}
          </p>
          <p className="mb-2">
            <strong>Start Date:</strong> {formData.startDate}
          </p>
          <p className="mb-2">
            <strong>Mode:</strong> {formData.mode}
          </p>
          <p className="mb-2">
            <strong>Comment:</strong> {formData.comment || "None"}
          </p>

          <hr className="my-4 border-gray-600" />

          <p className="text-green-400 font-semibold text-center">
            Payment Successful!
          </p>
          <p className="text-gray-300 text-center mt-2">
            Transaction ID:{" "}
            <span className="font-mono text-indigo-400">{transactionId}</span>
          </p>
        </div>
      ) : (
        <p>No data received.</p>
      )}
    </div>
  );
}
