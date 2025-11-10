// CourseDetails.jsx
import { useLocation, useNavigate } from "react-router-dom";

export default function CourseDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { course } = location.state || {};

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p className="text-lg">No course data found 😢</p>
      </div>
    );
  }

  const handleEnroll = () => {
    navigate("/enroll", { state: { course } });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-10">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
        <p className="text-gray-400 mb-2">Instructor: {course.instructor}</p>
        <p className="text-gray-300 mb-4">{course.description}</p>
        <p className="text-indigo-400 font-semibold mb-6">${course.price}</p>

        <button
          onClick={handleEnroll}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}