// import { Link } from "react-router-dom";

// function LandingPage() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Finance Tracker</h1>
//       <div className="flex gap-4">
//         <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
//           Login
//         </Link>
//         <Link
//           to="/register"
//           className="px-4 py-2 bg-green-600 text-white rounded">
//           Register
//         </Link>
//         <Link
//           to="/about"
//           className="px-4 py-2 bg-purple-600 text-white rounded">
//           About
//         </Link>
//         <Link
//           to="/contact"
//           className="px-4 py-2 bg-yellow-600 text-white rounded">
//           Contact
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-white to-green-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800 drop-shadow-sm">
          💰 Finance Tracker
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Take control of your spending. Track your expenses with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition">
            Register
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition">
            About
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
