import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";
import coursesData from "../data/courses.json";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  const handleViewDetails = (course) => {
    navigate("/course-details", { state: { course } });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen px-10 py-10">
      <h1 className="text-4xl font-bold mb-4 flex items-center">
        Browse Courses
      </h1>
      <p className="text-gray-300 mb-8">
        Explore courses by category in a Netflix-style interface. Scroll horizontally to discover
        Software Development, AI & ML, Theory of Computation, and more.
      </p>

      {/* Category sections */}
      {courses.map((category, idx) => (
        <section key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>

          {/* Horizontal scroll area */}
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
            {category.courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}