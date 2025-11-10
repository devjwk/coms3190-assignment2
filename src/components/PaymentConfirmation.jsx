// PaymentConfirmation.jsx
import { useLocation } from "react-router-dom";

export default function PaymentConfirmation() {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Payment Confirmation</h1>
      {formData ? (
        <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
          <p className="mb-2"><strong>Name:</strong> {formData.fullName}</p>
          <p className="mb-2"><strong>Email:</strong> {formData.email}</p>
          <p className="mb-2"><strong>Start Date:</strong> {formData.startDate}</p>
          <p className="mb-2"><strong>Mode:</strong> {formData.mode}</p>
          <p><strong>Comment:</strong> {formData.comment || "None"}</p>
        </div>
      ) : (
        <p>No data received.</p>
      )}
    </div>
  );
}