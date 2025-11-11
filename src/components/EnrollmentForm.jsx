import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function EnrollmentForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state || {}; // Course information passed from CourseDetails

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    startDate: "",
    mode: "Online",
    comment: "",
    cardNumber: "", // added credit card field
  });

  const [errors, setErrors] = useState({});

  // Handle form field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form inputs before submission
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.startDate) newErrors.startDate = "Start date is required.";
    return newErrors;
  };

  // Submit enrollment form data
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/payment-confirmation", { state: { formData, course } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Enrollment Form 📝
        </h1>

        {/* Render selected course details */}
        {course && (
          <div className="bg-indigo-900/20 p-4 rounded-lg mb-6 border border-indigo-800">
            <h2 className="text-lg font-semibold mb-1">Selected Course:</h2>
            <p className="text-gray-300">{course.title}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* User Information Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              User Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:bg-white focus:text-gray-900 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:bg-white focus:text-gray-900 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Enrollment Details Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Enrollment Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Preferred Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:bg-white focus:text-gray-900 focus:outline-none transition-colors"
                />
                {errors.startDate && (
                  <p className="text-red-400 text-sm mt-1">{errors.startDate}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Mode of Learning</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:bg-white focus:text-gray-900 focus:outline-none transition-colors"
                >
                  <option value="Online">Online</option>
                  <option value="In-person">In-person</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Comment / Message</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:bg-white focus:text-gray-900 focus:outline-none transition-colors resize-none placeholder-gray-400"
                  placeholder="Optional: Add any comments or questions"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Mock Credit Card Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Payment Information (Mock)
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Credit Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  maxLength="16"
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:bg-white focus:text-gray-900 focus:outline-none transition-colors"
                  placeholder="Enter mock credit card number"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
}
