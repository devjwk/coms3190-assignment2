import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-10 py-10">
      <h1 className="text-4xl font-bold mb-4 flex items-center">
        Browse Courses 🎓
      </h1>
      <p className="text-gray-300 mb-8">
        Explore courses by category in a Netflix-style interface. Scroll horizontally to discover
        Software Development, AI & ML, Theory of Computation, and more.
      </p>

      {/* 카테고리 섹션 */}
      {courses.map((category, idx) => (
        <section key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>

          {/* 가로 스크롤 영역 */}
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
            {category.courses.map((course, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white text-gray-900 rounded-lg shadow-md w-72 transition-transform hover:scale-105"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
                  <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                  <p className="text-indigo-600 font-bold mb-2">${course.price}</p>
                  <Link
                    to="/coursedetails"
                    state={{ course }}
                    className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}