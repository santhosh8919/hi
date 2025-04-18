import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Finance Tracker</h1>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </Link>
        <Link
          to="/about"
          className="bg-purple-500 text-white px-4 py-2 rounded">
          About
        </Link>
        <Link
          to="/contact"
          className="bg-yellow-500 text-white px-4 py-2 rounded">
          Contact
        </Link>
      </div>
    </div>
  );
}
