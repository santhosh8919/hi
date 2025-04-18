// // // // // // import { useState } from 'react'
// // // // // // import reactLogo from './assets/react.svg'
// // // // // // import viteLogo from '/vite.svg'
// // // // // // import './App.css'

// // // // // // function App() {
// // // // // //   const [count, setCount] = useState(0)

// // // // // //   return (
// // // // // //     <>
// // // // // //       <div>
// // // // // //         <a href="https://vite.dev" target="_blank">
// // // // // //           <img src={viteLogo} className="logo" alt="Vite logo" />
// // // // // //         </a>
// // // // // //         <a href="https://react.dev" target="_blank">
// // // // // //           <img src={reactLogo} className="logo react" alt="React logo" />
// // // // // //         </a>
// // // // // //       </div>
// // // // // //       <h1>Vite + React</h1>
// // // // // //       <div className="card">
// // // // // //         <button onClick={() => setCount((count) => count + 1)}>
// // // // // //           count is {count}
// // // // // //         </button>
// // // // // //         <p>
// // // // // //           Edit <code>src/App.tsx</code> and save to test HMR
// // // // // //         </p>
// // // // // //       </div>
// // // // // //       <p className="read-the-docs">
// // // // // //         Click on the Vite and React logos to learn more
// // // // // //       </p>
// // // // // //     </>
// // // // // //   )
// // // // // // }

// // // // // // export default App
// // // // // import { Route, Routes } from "react-router-dom";
// // // // // import Landing from "./pages/Landing";
// // // // // import Login from "./pages/Login";
// // // // // import Register from "./pages/Register";
// // // // // import About from "./pages/About";
// // // // // import Contact from "./pages/Contact";

// // // // // function App() {
// // // // //   return (
// // // // //     <Routes>
// // // // //       <Route path="/" element={<Landing />} />
// // // // //       <Route path="/login" element={<Login />} />
// // // // //       <Route path="/register" element={<Register />} />
// // // // //       <Route path="/about" element={<About />} />
// // // // //       <Route path="/contact" element={<Contact />} />
// // // // //     </Routes>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // import Login from "./pages/Login";
// // // // import Register from "./pages/Register";
// // // // import About from "./pages/About";
// // // // import Contact from "./pages/Contact";
// // // // import Analytics from "./pages/dashboard/Analytics";
// // // // import Expenses from "./pages/dashboard/Expenses";
// // // // import PaymentExpenses from "./pages/dashboard/PaymentExpenses";
// // // // import CrudPage from "./pages/dashboard/CrudPage";
// // // // import DashboardLayout from "./components/DashboardLayout";

// // // // const App: React.FC = () => {
// // // //   return (
// // // //     <Router>
// // // //       <Routes>
// // // //         {/* Public Pages */}
// // // //         <Route path="/" element={<Login />} />
// // // //         <Route path="/register" element={<Register />} />
// // // //         <Route path="/about" element={<About />} />
// // // //         <Route path="/contact" element={<Contact />} />

// // // //         {/* Protected Routes with Dashboard Layout */}
// // // //         <Route path="/dashboard" element={<DashboardLayout />}>
// // // //           <Route path="analytics" element={<Analytics />} />
// // // //           <Route path="expenses" element={<Expenses />} />
// // // //           <Route path="payment" element={<PaymentExpenses />} />
// // // //           <Route path="crud" element={<CrudPage />} />
// // // //         </Route>
// // // //       </Routes>
// // // //     </Router>
// // // //   );
// // // // };

// // // // export default App;
// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Login from "./pages/Login";
// // // import Register from "./pages/Register";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Analytics from "./pages/dashboard/Analytics";
// // // import Expenses from "./pages/dashboard/Expenses";
// // // import PaymentExpenses from "./pages/dashboard/PaymentExpenses";
// // // import CrudPage from "./pages/dashboard/CrudPage";
// // // import DashboardLayout from "./components/DashboardLayout";
// // // import ProtectedRoute from "./components/ProtectedRoute"; // ✅ Add this line

// // // const App: React.FC = () => {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         {/* Public Pages */}
// // //         <Route path="/" element={<Login />} />
// // //         <Route path="/register" element={<Register />} />
// // //         <Route path="/about" element={<About />} />
// // //         <Route path="/contact" element={<Contact />} />

// // //         {/* ✅ Protected Dashboard Routes */}
// // //         <Route
// // //           path="/dashboard"
// // //           element={
// // //             <ProtectedRoute>
// // //               <DashboardLayout />
// // //             </ProtectedRoute>
// // //           }>
// // //           <Route path="analytics" element={<Analytics />} />
// // //           <Route path="expenses" element={<Expenses />} />
// // //           <Route path="payment" element={<PaymentExpenses />} />
// // //           <Route path="crud" element={<CrudPage />} />
// // //         </Route>
// // //       </Routes>
// // //     </Router>
// // //   );
// // // };

// // // export default App;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";
// // import Analytics from "./pages/dashboard/Analytics";
// // import Expenses from "./pages/dashboard/Expenses";
// // import PaymentExpenses from "./pages/dashboard/PaymentExpenses";
// // import CrudPage from "./pages/dashboard/CrudPage";
// // import DashboardLayout from "./components/DashboardLayout";
// // import ProtectedRoute from "./components/ProtectedRoute"; // ✅ Import

// // // const App: React.FC = () => {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         {/* Public Pages */}
// // //         <Route path="/" element={<Login />} />
// // //         <Route path="/register" element={<Register />} />
// // //         <Route path="/about" element={<About />} />
// // //         <Route path="/contact" element={<Contact />} />

// // //         {/* Protected Dashboard Routes */}
// // //         <Route
// // //           path="/dashboard"
// // //           element={
// // //             <ProtectedRoute>
// // //               <DashboardLayout />
// // //             </ProtectedRoute>
// // //           }>
// // //           <Route path="analytics" element={<Analytics />} />
// // //           <Route path="expenses" element={<Expenses />} />
// // //           <Route path="payment" element={<PaymentExpenses />} />
// // //           <Route path="crud" element={<CrudPage />} />
// // //         </Route>
// // //       </Routes>
// // //     </Router>
// // //   );
// // // };

// // const App: React.FC = () => {
// //   return (
// //     <Routes>
// //       {/* Public Pages */}
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/" element={<Register />} />
// //       <Route path="/about" element={<About />} />
// //       <Route path="/contact" element={<Contact />} />

// //       {/* Protected Dashboard Routes */}
// //       <Route
// //         path="/dashboard"
// //         element={
// //           <ProtectedRoute>
// //             <DashboardLayout />
// //           </ProtectedRoute>
// //         }>
// //         <Route path="analytics" element={<Analytics />} />
// //         <Route path="expenses" element={<Expenses />} />
// //         <Route path="payment" element={<PaymentExpenses />} />
// //         <Route path="crud" element={<CrudPage />} />
// //       </Route>
// //       <Route
// //         path="*"
// //         element={
// //           <div className="p-8 text-center text-xl font-bold text-red-600">
// //             404 - Page Not Found
// //           </div>
// //         }
// //       />
// //     </Routes>
// //   );
// // };

// // export default App;
// // //

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import ProtectedRoute from "./components/ProtectedRoute";
// import DashboardLayout from "./components/DashboardLayout";
// import Analytics from "./pages/dashboard/Analytics";
// import Expenses from "./pages/dashboard/Expenses";
// import PaymentExpenses from "./pages/dashboard/PaymentExpenses";
// import CrudPage from "./pages/dashboard/CrudPage";
// import Home from "./pages/Home"; // import Home page

// const App: React.FC = () => {
//   return (
//     <Routes>
//       {/* Public Pages */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={<Home />} /> {/* Home page as default route */}
//       <Route path="/about" element={<Home />} />{" "}
//       {/* Home page with About section */}
//       <Route path="/contact" element={<Home />} />{" "}
//       {/* Home page with Contact section */}
//       {/* Protected Dashboard Routes */}
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <DashboardLayout />
//           </ProtectedRoute>
//         }>
//         <Route path="analytics" element={<Analytics />} />
//         <Route path="expenses" element={<Expenses />} />
//         <Route path="payment" element={<PaymentExpenses />} />
//         <Route path="crud" element={<CrudPage />} />
//       </Route>
//       {/* 404 Page */}
//       <Route
//         path="*"
//         element={
//           <div className="p-8 text-center text-xl font-bold text-red-600">
//             404 - Page Not Found
//           </div>
//         }
//       />
//     </Routes>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"; // Import Register page
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";
import Analytics from "./pages/dashboard/Analytics";
import Expenses from "./pages/dashboard/Expenses";
import PaymentExpenses from "./pages/dashboard/PaymentExpenses";
import CrudPage from "./pages/dashboard/CrudPage";
import Home from "./pages/Home"; // Import Home page

const App: React.FC = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />{" "}
      {/* Register page route */}
      <Route path="/" element={<Home />} /> {/* Home page as default route */}
      <Route path="/about" element={<Home />} />{" "}
      {/* Home page with About section */}
      <Route path="/contact" element={<Home />} />{" "}
      {/* Home page with Contact section */}
      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
        <Route path="analytics" element={<Analytics />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="payment" element={<PaymentExpenses />} />
        <Route path="crud" element={<CrudPage />} />
      </Route>
      {/* 404 Page */}
      <Route
        path="*"
        element={
          <div className="p-8 text-center text-xl font-bold text-red-600">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default App;
