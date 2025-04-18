// // // // function Login() {
// // // //   return (
// // // //     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
// // // //       <h2 className="text-3xl font-bold mb-4">Login</h2>
// // // //       <form className="flex flex-col gap-3 w-80">
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           className="p-2 border rounded"
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           className="p-2 border rounded"
// // // //         />
// // // //         <button type="submit" className="p-2 bg-blue-600 text-white rounded">
// // // //           Login
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;
// // // import React from "react";

// // // const Login: React.FC = () => {
// // //   return (
// // //     <div className="p-8">
// // //       <h2 className="text-2xl font-bold mb-4">Login</h2>
// // //       <form className="space-y-4 max-w-md">
// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           className="w-full px-4 py-2 border rounded"
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           className="w-full px-4 py-2 border rounded"
// // //         />
// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// // //           Login
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // import React, { useState } from "react";
// // import axios from "../utils/axiosInstance";
// // import { useNavigate } from "react-router-dom";

// // const Login: React.FC = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post("/auth/login", { email, password });

// //       // Save JWT token
// //       localStorage.setItem("token", res.data.token);

// //       alert("Login successful!");
// //       navigate("/dashboard/analytics");
// //     } catch (err) {
// //       alert("Invalid credentials");
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <div className="p-4 max-w-md mx-auto">
// //       <h1 className="text-xl font-bold mb-4">Login</h1>
// //       <form onSubmit={handleLogin} className="flex flex-col gap-4">
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className="p-2 border rounded"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="p-2 border rounded"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button type="submit" className="bg-blue-600 text-white p-2 rounded">
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// // src/pages/Login.tsx
// import React, { useState } from "react";
// import axios from "../utils/axiosInstance";
// import { useNavigate } from "react-router-dom";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       return alert("Please enter both email and password.");
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post("/auth/login", { email, password });

//       localStorage.setItem("token", res.data.token);

//       alert("Login successful!");
//       navigate("/dashboard/analytics");
//     } catch (err: any) {
//       console.error(err);
//       alert(err.response?.data?.message || "Invalid credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
//         Login to Your Account
//       </h1>

//       <form onSubmit={handleLogin} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Email"
//           className="p-3 border border-gray-300 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="p-3 border border-gray-300 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className={`bg-blue-600 text-white py-3 rounded font-semibold transition ${
//             loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//           }`}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please enter both email and password.");
    }

    try {
      setLoading(true);
      const res = await axios.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      navigate("/dashboard/analytics");
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login to Your Account</h1>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
