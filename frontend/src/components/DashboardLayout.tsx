// // // // // // // import React from "react";
// // // // // // // import { Link, Outlet } from "react-router-dom";

// // // // // // // const DashboardLayout: React.FC = () => {
// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-100">
// // // // // // //       <nav className="bg-blue-600 text-white p-4 flex gap-4">
// // // // // // //         <Link to="/dashboard/analytics">Analytics</Link>
// // // // // // //         <Link to="/dashboard/payment">Payment</Link>
// // // // // // //         <Link to="/dashboard/expenses">Expenses</Link>
// // // // // // //         <Link to="/dashboard/crud">CRUD</Link>
// // // // // // //       </nav>
// // // // // // //       <main className="p-4">
// // // // // // //         <Outlet />
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // // export default DashboardLayout;
// // // // // // // import React from "react";
// // // // // // // import { Link, Outlet, useNavigate } from "react-router-dom";

// // // // // // // const DashboardLayout: React.FC = () => {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleLogout = () => {
// // // // // // //     localStorage.removeItem("token");
// // // // // // //     navigate("/");
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex flex-col md:flex-row">
// // // // // // //       {/* Sidebar */}
// // // // // // //       <aside className="w-full md:w-64 bg-gray-900 text-white p-4">
// // // // // // //         <h2 className="text-2xl font-bold mb-6">📊 Dashboard</h2>
// // // // // // //         <nav className="space-y-4">
// // // // // // //           <Link
// // // // // // //             to="/dashboard/analytics"
// // // // // // //             className="block hover:text-yellow-400">
// // // // // // //             Analytics
// // // // // // //           </Link>
// // // // // // //           <Link
// // // // // // //             to="/dashboard/expenses"
// // // // // // //             className="block hover:text-yellow-400">
// // // // // // //             Expenses
// // // // // // //           </Link>
// // // // // // //           <Link to="/dashboard/payment" className="block hover:text-yellow-400">
// // // // // // //             Payment Expenses
// // // // // // //           </Link>
// // // // // // //           <Link to="/dashboard/crud" className="block hover:text-yellow-400">
// // // // // // //             CRUD
// // // // // // //           </Link>
// // // // // // //           <button
// // // // // // //             onClick={handleLogout}
// // // // // // //             className="mt-4 bg-red-600 px-3 py-1 rounded hover:bg-red-700">
// // // // // // //             Logout
// // // // // // //           </button>
// // // // // // //         </nav>
// // // // // // //       </aside>

// // // // // // //       {/* Main Content */}
// // // // // // //       <main className="flex-1 bg-gray-100 p-6">
// // // // // // //         <Outlet />
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // // export default DashboardLayout;
// // // // // // // import React from "react";
// // // // // // // import { Link, Outlet, useNavigate } from "react-router-dom";

// // // // // // // const DashboardLayout: React.FC = () => {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleLogout = () => {
// // // // // // //     localStorage.removeItem("token");
// // // // // // //     navigate("/");
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
// // // // // // //       {/* Sidebar */}
// // // // // // //       <aside className="w-full md:w-64 bg-gray-900 text-white p-6 shadow-xl">
// // // // // // //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// // // // // // //           📊 Dashboard
// // // // // // //         </h2>
// // // // // // //         <nav className="space-y-4">
// // // // // // //           <Link
// // // // // // //             to="/dashboard/analytics"
// // // // // // //             className="block py-2 px-4 rounded hover:bg-gray-700 transition">
// // // // // // //             📈 Analytics
// // // // // // //           </Link>
// // // // // // //           <Link
// // // // // // //             to="/dashboard/expenses"
// // // // // // //             className="block py-2 px-4 rounded hover:bg-gray-700 transition">
// // // // // // //             💸 Expenses
// // // // // // //           </Link>
// // // // // // //           <Link
// // // // // // //             to="/dashboard/payment"
// // // // // // //             className="block py-2 px-4 rounded hover:bg-gray-700 transition">
// // // // // // //             🧾 Payment Expenses
// // // // // // //           </Link>
// // // // // // //           <Link
// // // // // // //             to="/dashboard/crud"
// // // // // // //             className="block py-2 px-4 rounded hover:bg-gray-700 transition">
// // // // // // //             🛠️ CRUD Operations
// // // // // // //           </Link>
// // // // // // //           <button
// // // // // // //             onClick={handleLogout}
// // // // // // //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// // // // // // //             🔒 Logout
// // // // // // //           </button>
// // // // // // //         </nav>
// // // // // // //       </aside>

// // // // // // //       {/* Main Content */}
// // // // // // //       <main className="flex-1 p-8 overflow-auto">
// // // // // // //         <div className="bg-white rounded-xl shadow-md p-6 h-full">
// // // // // // //           <Outlet />
// // // // // // //         </div>
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default DashboardLayout;
// // // // // // // DashboardLayout.tsx
// // // // // // import React from "react";
// // // // // // import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// // // // // // const DashboardLayout: React.FC = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem("token");
// // // // // //     navigate("/");
// // // // // //   };

// // // // // //   const isActive = (path: string) =>
// // // // // //     location.pathname === path
// // // // // //       ? "bg-yellow-500 text-gray-900 font-semibold"
// // // // // //       : "hover:bg-gray-700";

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
// // // // // //       {/* Sidebar */}
// // // // // //       <aside className="w-full md:w-64 bg-gray-900 text-white p-6 shadow-xl md:min-h-screen overflow-y-auto">
// // // // // //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// // // // // //           📊 Dashboard
// // // // // //         </h2>
// // // // // //         <nav className="space-y-4">
// // // // // //           <Link
// // // // // //             to="/dashboard/analytics"
// // // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // // //               "/dashboard/analytics"
// // // // // //             )}`}>
// // // // // //             📈 Analytics
// // // // // //           </Link>
// // // // // //           <Link
// // // // // //             to="/dashboard/expenses"
// // // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // // //               "/dashboard/expenses"
// // // // // //             )}`}>
// // // // // //             💸 Expenses
// // // // // //           </Link>
// // // // // //           <Link
// // // // // //             to="/dashboard/payment"
// // // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // // //               "/dashboard/payment"
// // // // // //             )}`}>
// // // // // //             🧾 Payment Expenses
// // // // // //           </Link>
// // // // // //           <Link
// // // // // //             to="/dashboard/crud"
// // // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // // //               "/dashboard/crud"
// // // // // //             )}`}>
// // // // // //             🛠️ CRUD Operations
// // // // // //           </Link>
// // // // // //           <button
// // // // // //             onClick={handleLogout}
// // // // // //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// // // // // //             🔒 Logout
// // // // // //           </button>
// // // // // //         </nav>
// // // // // //       </aside>

// // // // // //       {/* Main Content */}
// // // // // //       <main className="flex-1 p-6 overflow-auto">
// // // // // //         <div className="bg-white rounded-xl shadow-md p-6 min-h-[80vh]">
// // // // // //           <Outlet />
// // // // // //         </div>
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // // export default DashboardLayout;
// // // // // // import React from "react";
// // // // // // import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// // // // // // const DashboardLayout: React.FC = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem("token");
// // // // // //     navigate("/");
// // // // // //   };

// // // // // //   const isActive = (path: string) =>
// // // // // //     location.pathname === path
// // // // // //       ? "bg-yellow-500 text-gray-900 font-semibold"
// // // // // //       : "hover:bg-gray-700";

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
// // // // // //       {/* Sidebar */}
// // // // // //       <aside className="w-full md:w-64 bg-gray-900 text-white p-6 shadow-xl md:min-h-screen overflow-y-auto">
// // // // // //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// // // // // //           📊 Dashboard
// // // // // //         </h2>
// // // // // //         <nav className="space-y-4">
// // // // // //           <Link
// // // // // //             to="/dashboard/analytics"
// // // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // // //               "/dashboard/analytics"
// // // // // //             )}`}>
// // // // // //             📈 Analytics
// // // // // //           </Link>
// // // // // //           <Link
// // // // // //             to="/dashboard/expenses"
// // // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // // //               "/dashboard/expenses"
// // // // // //             )}`}>
// // // // // //             💸 Expenses
// // // // // //           </Link>
// // // // // //           <Link
// // // // // //             to="/dashboard/payment"
// // // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // // //               "/dashboard/payment"
// // // // // //             )}`}>
// // // // // //             🧾 Payment Expenses
// // // // // //           </Link>
// // // // // //           <Link
// // // // // //             to="/dashboard/crud"
// // // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // // //               "/dashboard/crud"
// // // // // //             )}`}>
// // // // // //             🛠️ CRUD Operations
// // // // // //           </Link>
// // // // // //           <button
// // // // // //             onClick={handleLogout}
// // // // // //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// // // // // //             🔒 Logout
// // // // // //           </button>
// // // // // //         </nav>
// // // // // //       </aside>

// // // // // //       {/* Main Content */}
// // // // // //       <main className="flex-1 p-6 overflow-auto">
// // // // // //         <div className="bg-white rounded-xl shadow-md p-6 min-h-[80vh]">
// // // // // //           {/* The Outlet will render the component of the selected link */}
// // // // // //           <Outlet />
// // // // // //         </div>
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DashboardLayout;
// // // // // import React from "react";
// // // // // import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// // // // // const DashboardLayout: React.FC = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("token");
// // // // //     navigate("/");
// // // // //   };

// // // // //   const isActive = (path: string) =>
// // // // //     location.pathname === path
// // // // //       ? "bg-yellow-500 text-gray-900 font-semibold"
// // // // //       : "hover:bg-gray-700";

// // // // //   return (
// // // // //     <div className="min-h-screen flex bg-gray-100">
// // // // //       {/* Sidebar */}
// // // // //       <aside className="w-64 bg-gray-900 text-white p-6 shadow-xl md:min-h-screen overflow-y-auto">
// // // // //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// // // // //           📊 Dashboard
// // // // //         </h2>
// // // // //         <nav className="space-y-4">
// // // // //           <Link
// // // // //             to="/dashboard/analytics"
// // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // //               "/dashboard/analytics"
// // // // //             )}`}>
// // // // //             📈 Analytics
// // // // //           </Link>
// // // // //           <Link
// // // // //             to="/dashboard/expenses"
// // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // //               "/dashboard/expenses"
// // // // //             )}`}>
// // // // //             💸 Expenses
// // // // //           </Link>
// // // // //           <Link
// // // // //             to="/dashboard/payment"
// // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // //               "/dashboard/payment"
// // // // //             )}`}>
// // // // //             🧾 Payment Expenses
// // // // //           </Link>
// // // // //           <Link
// // // // //             to="/dashboard/crud"
// // // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // // //               "/dashboard/crud"
// // // // //             )}`}>
// // // // //             🛠️ CRUD Operations
// // // // //           </Link>
// // // // //           <button
// // // // //             onClick={handleLogout}
// // // // //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// // // // //             🔒 Logout
// // // // //           </button>
// // // // //         </nav>
// // // // //       </aside>

// // // // //       {/* Main Content */}
// // // // //       <main className="flex-1 p-6 overflow-auto">
// // // // //         <div className="bg-white rounded-xl shadow-md p-6 min-h-[80vh]">
// // // // //           {/* The Outlet will render the component of the selected link */}
// // // // //           <Outlet />
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DashboardLayout;
// // // // import React from "react";
// // // // import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// // // // const DashboardLayout: React.FC = () => {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     navigate("/");
// // // //   };

// // // //   const isActive = (path: string) =>
// // // //     location.pathname === path
// // // //       ? "bg-yellow-500 text-gray-900 font-semibold"
// // // //       : "hover:bg-gray-700";

// // // //   return (
// // // //     <div className="min-h-screen flex bg-gray-100">
// // // //       {/* Sidebar */}
// // // //       <aside className="w-64 bg-gray-900 text-white p-6 shadow-xl md:min-h-screen overflow-y-auto">
// // // //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// // // //           📊 Dashboard
// // // //         </h2>
// // // //         <nav className="space-y-4">
// // // //           <Link
// // // //             to="/dashboard/analytics"
// // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // //               "/dashboard/analytics"
// // // //             )}`}>
// // // //             📈 Analytics
// // // //           </Link>
// // // //           <Link
// // // //             to="/dashboard/expenses"
// // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // //               "/dashboard/expenses"
// // // //             )}`}>
// // // //             💸 Expenses
// // // //           </Link>
// // // //           <Link
// // // //             to="/dashboard/payment"
// // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // //               "/dashboard/payment"
// // // //             )}`}>
// // // //             🧾 Payment Expenses
// // // //           </Link>
// // // //           <Link
// // // //             to="/dashboard/crud"
// // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // //               "/dashboard/crud"
// // // //             )}`}>
// // // //             🛠️ CRUD Operations
// // // //           </Link>
// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// // // //             🔒 Logout
// // // //           </button>
// // // //         </nav>
// // // //       </aside>

// // // //       {/* Main Content */}
// // // //       <main className="flex-1 p-6 overflow-auto">
// // // //         <div className="bg-white rounded-xl shadow-md p-6 min-h-[80vh]">
// // // //           {/* The Outlet will render the component of the selected link */}
// // // //           <Outlet />
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // // export default DashboardLayout;
// // // // import React from "react";
// // // // import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// // // // const DashboardLayout: React.FC = () => {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     navigate("/");
// // // //   };

// // // //   const isActive = (path: string) =>
// // // //     location.pathname === path
// // // //       ? "bg-yellow-500 text-gray-900 font-semibold"
// // // //       : "hover:bg-gray-700";

// // // //   return (
// // // //     <div className="min-h-screen flex bg-gray-100">
// // // //       {/* Sidebar */}
// // // //       <aside className="w-64 bg-gray-900 text-white p-6 shadow-xl md:min-h-screen overflow-y-auto">
// // // //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// // // //           📊 Dashboard
// // // //         </h2>
// // // //         <nav className="space-y-4">
// // // //           <Link
// // // //             to="/dashboard/analytics"
// // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // //               "/dashboard/analytics"
// // // //             )}`}>
// // // //             📈 Analytics
// // // //           </Link>
// // // //           <Link
// // // //             to="/dashboard/expenses"
// // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // //               "/dashboard/expenses"
// // // //             )}`}>
// // // //             💸 Expenses
// // // //           </Link>
// // // //           <Link
// // // //             to="/dashboard/payment"
// // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // //               "/dashboard/payment"
// // // //             )}`}>
// // // //             🧾 Payment Expenses
// // // //           </Link>
// // // //           <Link
// // // //             to="/dashboard/crud"
// // // //             className={`block py-2 px-4 rounded transition ${isActive(
// // // //               "/dashboard/crud"
// // // //             )}`}>
// // // //             🛠️ CRUD Operations
// // // //           </Link>
// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// // // //             🔒 Logout
// // // //           </button>
// // // //         </nav>
// // // //       </aside>

// // // //       {/* Main Content */}
// // // //       <main className="flex-1 p-6 overflow-auto">
// // // //         <div className="bg-white rounded-xl shadow-md p-6 min-h-[80vh]">
// // // //           <Outlet />
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashboardLayout;
// // // // export default DashboardLayout;
// // // import React from "react";
// // // import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// // // const DashboardLayout: React.FC = () => {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     navigate("/");
// // //   };

// // //   const isActive = (path: string) =>
// // //     location.pathname === path
// // //       ? "bg-yellow-500 text-gray-900 font-semibold"
// // //       : "hover:bg-gray-700";

// // //   return (
// // //     <div className="min-h-screen flex bg-gray-100 dark:bg-gray-800">
// // //       {/* Sidebar */}
// // //       <aside className="w-64 bg-gray-900 text-white p-6 shadow-xl md:min-h-screen overflow-y-auto">
// // //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// // //           📊 Dashboard
// // //         </h2>
// // //         <nav className="space-y-3">
// // //           <Link
// // //             to="/dashboard"
// // //             className={`block py-2 px-4 rounded transition ${isActive(
// // //               "/dashboard"
// // //             )}`}
// // //             aria-current={
// // //               location.pathname === "/dashboard" ? "page" : undefined
// // //             }>
// // //             🏠 Home
// // //           </Link>
// // //           <Link
// // //             to="/dashboard/analytics"
// // //             className={`block py-2 px-4 rounded transition ${isActive(
// // //               "/dashboard/analytics"
// // //             )}`}
// // //             aria-current={
// // //               location.pathname === "/dashboard/analytics" ? "page" : undefined
// // //             }>
// // //             📈 Analytics
// // //           </Link>
// // //           <Link
// // //             to="/dashboard/expenses"
// // //             className={`block py-2 px-4 rounded transition ${isActive(
// // //               "/dashboard/expenses"
// // //             )}`}
// // //             aria-current={
// // //               location.pathname === "/dashboard/expenses" ? "page" : undefined
// // //             }>
// // //             💸 Expenses
// // //           </Link>
// // //           <Link
// // //             to="/dashboard/payment"
// // //             className={`block py-2 px-4 rounded transition ${isActive(
// // //               "/dashboard/payment"
// // //             )}`}
// // //             aria-current={
// // //               location.pathname === "/dashboard/payment" ? "page" : undefined
// // //             }>
// // //             🧾 Payment Expenses
// // //           </Link>
// // //           <Link
// // //             to="/dashboard/crud"
// // //             className={`block py-2 px-4 rounded transition ${isActive(
// // //               "/dashboard/crud"
// // //             )}`}
// // //             aria-current={
// // //               location.pathname === "/dashboard/crud" ? "page" : undefined
// // //             }>
// // //             🛠️ CRUD Operations
// // //           </Link>
// // //           <button
// // //             onClick={handleLogout}
// // //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// // //             🔒 Logout
// // //           </button>
// // //         </nav>
// // //       </aside>

// // //       {/* Main Content */}
// // //       <main className="flex-1 p-6 overflow-auto">
// // //         <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 min-h-[80vh] text-gray-800 dark:text-white">
// // //           <Outlet />
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default DashboardLayout;
// // import React from "react";
// // import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// // const DashboardLayout: React.FC = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   const isActive = (path: string) =>
// //     location.pathname === path
// //       ? "bg-yellow-500 text-gray-900 font-semibold"
// //       : "hover:bg-gray-700";

// //   return (
// //     <div className="min-h-screen flex bg-gray-100 dark:bg-gray-800">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-gray-900 text-white p-6 shadow-xl md:min-h-screen overflow-y-auto">
// //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// //           📊 Dashboard
// //         </h2>
// //         <nav className="space-y-3">
// //           <Link
// //             to="/dashboard"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard" ? "page" : undefined
// //             }>
// //             🏠 Home
// //           </Link>
// //           <Link
// //             to="/dashboard/analytics"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard/analytics"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard/analytics" ? "page" : undefined
// //             }>
// //             📈 Analytics
// //           </Link>
// //           <Link
// //             to="/dashboard/expenses"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard/expenses"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard/expenses" ? "page" : undefined
// //             }>
// //             💸 Expenses
// //           </Link>
// //           <Link
// //             to="/dashboard/payment"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard/payment"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard/payment" ? "page" : undefined
// //             }>
// //             🧾 Payment Expenses
// //           </Link>
// //           <Link
// //             to="/dashboard/crud"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard/crud"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard/crud" ? "page" : undefined
// //             }>
// //             🛠️ CRUD Operations
// //           </Link>
// //           <button
// //             onClick={handleLogout}
// //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// //             🔒 Logout
// //           </button>
// //         </nav>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-6 overflow-auto">
// //         <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 min-h-[80vh] text-gray-800 dark:text-white">
// //           <Outlet />
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // // export default DashboardLayout;
// // import React from "react";
// // import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// // const DashboardLayout: React.FC = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   const isActive = (path: string) =>
// //     location.pathname === path
// //       ? "bg-yellow-500 text-gray-900 font-semibold"
// //       : "hover:bg-gray-700";

// //   return (
// //     <div className="min-h-screen flex bg-gray-100 dark:bg-gray-800">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-gray-900 text-white p-6 shadow-xl md:min-h-screen overflow-y-auto">
// //         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
// //           📊 Dashboard
// //         </h2>
// //         <nav className="space-y-3">
// //           <Link
// //             to="/dashboard"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard" ? "page" : undefined
// //             }>
// //             🏠 Home
// //           </Link>
// //           <Link
// //             to="/dashboard/analytics"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard/analytics"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard/analytics" ? "page" : undefined
// //             }>
// //             📈 Analytics
// //           </Link>
// //           <Link
// //             to="/dashboard/expenses"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard/expenses"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard/expenses" ? "page" : undefined
// //             }>
// //             💸 Expenses
// //           </Link>
// //           <Link
// //             to="/dashboard/payment"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard/payment"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard/payment" ? "page" : undefined
// //             }>
// //             🧾 Payment Expenses
// //           </Link>
// //           <Link
// //             to="/dashboard/crud"
// //             className={`block py-2 px-4 rounded transition ${isActive(
// //               "/dashboard/crud"
// //             )}`}
// //             aria-current={
// //               location.pathname === "/dashboard/crud" ? "page" : undefined
// //             }>
// //             🛠️ CRUD Operations
// //           </Link>
// //           <button
// //             onClick={handleLogout}
// //             className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
// //             🔒 Logout
// //           </button>
// //         </nav>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-6 overflow-auto">
// //         <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 min-h-[80vh] text-gray-800 dark:text-white">
// //           {/* Ensure the content is displayed as a list (column) */}
// //           <div className="space-y-6">
// //             <Outlet />
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;
// // export default DashboardLayout;
// import React from "react";
// import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

// const DashboardLayout: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const isActive = (path: string) =>
//     location.pathname === path
//       ? "bg-yellow-400 text-gray-900 font-semibold"
//       : "hover:bg-gray-700 text-white";

//   const navLinks = [
//     { to: "/dashboard", icon: "🏠", label: "Home" },
//     { to: "/dashboard/analytics", icon: "📈", label: "Analytics" },
//     { to: "/dashboard/expenses", icon: "💸", label: "Expenses" },
//     { to: "/dashboard/payment", icon: "🧾", label: "Payment Expenses" },
//     { to: "/dashboard/crud", icon: "🛠️", label: "CRUD Operations" },
//   ];

//   return (
//     <div className="min-h-screen flex bg-gray-100 dark:bg-gray-800">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white p-6 shadow-xl flex flex-col">
//         <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
//           📊 Dashboard
//         </h2>

//         <nav className="flex flex-col gap-2 flex-grow">
//           {navLinks.map(({ to, icon, label }) => (
//             <Link
//               key={to}
//               to={to}
//               className={`flex items-center gap-3 py-2 px-4 rounded transition duration-200 ${isActive(
//                 to
//               )}`}
//               aria-current={location.pathname === to ? "page" : undefined}>
//               <span className="text-lg">{icon}</span>
//               <span className="text-base">{label}</span>
//             </Link>
//           ))}
//         </nav>

//         {/* Logout at bottom */}
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-2 w-full mt-6 py-2 px-4 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
//           🔒 <span>Logout</span>
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-auto">
//         <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 min-h-[80vh] text-gray-800 dark:text-white">
//           <div className="space-y-6">
//             <Outlet />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;
import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const isActive = (path: string) =>
    location.pathname === path
      ? "bg-yellow-400 text-gray-900 font-semibold"
      : "hover:bg-gray-700 text-white";

  const navLinks = [
    { to: "/dashboard", icon: "🏠", label: "Home" },
    { to: "/dashboard/analytics", icon: "📈", label: "Analytics" },
    { to: "/dashboard/expenses", icon: "💸", label: "Expenses" },
    { to: "/dashboard/payment", icon: "🧾", label: "Payment Expenses" },
    { to: "/dashboard/crud", icon: "🛠️", label: "CRUD Operations" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-800">
      {/* Left Column: Titles List */}
      <aside className="w-64 bg-white dark:bg-gray-900 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          📋 Pages
        </h2>

        <nav className="flex flex-col gap-2">
          {navLinks.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition ${isActive(
                to
              )}`}>
              <span>{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-semibold transition">
          🔒 Logout
        </button>
      </aside>

      {/* Right Column: Content Output */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 min-h-[80vh] text-gray-800 dark:text-white">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
