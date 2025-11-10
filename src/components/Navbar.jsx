import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <Link to="/" className="text-2xl font-bold hover:text-indigo-400 transition-colors">
        SkillFlix
      </Link>
    </nav>
  );
}