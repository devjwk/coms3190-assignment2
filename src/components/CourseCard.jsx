// CourseCard.jsx
export default function CourseCard({ course, onViewDetails }) {
  return (
    <div className="flex-shrink-0 min-w-[280px] max-w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div
        onClick={() => onViewDetails(course)}
        className="h-48 w-full overflow-hidden"
      >
        <img
          src={course.thumbnail || course.image || "https://via.placeholder.com/400x250"}
          alt={course.title}
          className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          {course.instructor || "Unknown Instructor"}
        </p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {course.shortDescription || course.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-indigo-600 text-xl">
            {course.price ? `$${course.price}` : "Free"}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(course);
            }}
            className="text-sm px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}