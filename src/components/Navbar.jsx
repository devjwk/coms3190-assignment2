import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        SkillFlix
      </Link>

      {/* Menu's */}
      <div className="flex space-x-6 text-sm">
        {/*  Home Part --> NavLink */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-400 font-semibold"
              : "hover:text-indigo-400 transition-colors"
          }
        >
          Home
        </NavLink>

        {/* Stay other Nav Link*/}
        <Link to="/courses" className="hover:text-indigo-400 transition-colors">
          Courses
        </Link>
        <Link to="/about" className="hover:text-indigo-400 transition-colors">
          About
        </Link>
        <Link to="/contact" className="hover:text-indigo-400 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}