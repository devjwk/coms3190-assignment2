import { useLocation, useNavigate } from "react-router-dom";

export default function CourseDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { course } = location.state || {};

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-center">
          <p className="text-lg mb-4">No course data found 😢</p>
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    navigate("/enroll", { state: { course } });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Back to Courses
        </button>

        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          {/* Video Trailer Section */}
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={course.videoUrl}
              title={course.title}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Course Information */}
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            
            <div className="flex flex-wrap gap-6 mb-6 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">👨‍🏫</span>
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">⏱️</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-400 text-2xl font-bold">
                  ${course.price}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">About This Course</h2>
              <p className="text-gray-300 leading-relaxed">{course.description}</p>
            </div>

            <button
              onClick={handleEnroll}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}