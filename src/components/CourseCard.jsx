// CourseCard.jsx
export default function CourseCard({ course, onViewDetails }) {
  return (
    <div className="min-w-[260px] max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-transform cursor-pointer">
      <img
        src={course.thumbnail || course.image || "https://via.placeholder.com/400x250"}
        alt={course.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          {course.instructor || "Unknown Instructor"}
        </p>
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          {course.shortDescription || course.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-indigo-600">
            {course.price ? `$${course.price}` : "Free"}
          </span>
          <button
            onClick={() => onViewDetails(course)}
            className="text-sm px-3 py-1 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}