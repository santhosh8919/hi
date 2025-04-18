// // // // // // // function Register() {
// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
// // // // // // //       <h2 className="text-3xl font-bold mb-4">Register</h2>
// // // // // // //       <form className="flex flex-col gap-3 w-80">
// // // // // // //         <input type="text" placeholder="Name" className="p-2 border rounded" />
// // // // // // //         <input
// // // // // // //           type="email"
// // // // // // //           placeholder="Email"
// // // // // // //           className="p-2 border rounded"
// // // // // // //         />
// // // // // // //         <input
// // // // // // //           type="password"
// // // // // // //           placeholder="Password"
// // // // // // //           className="p-2 border rounded"
// // // // // // //         />
// // // // // // //         <button type="submit" className="p-2 bg-green-600 text-white rounded">
// // // // // // //           Register
// // // // // // //         </button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Register;
// // // // // // import React from "react";

// // // // // // const Register: React.FC = () => {
// // // // // //   return (
// // // // // //     <div className="p-8">
// // // // // //       <h2 className="text-2xl font-bold mb-4">Register</h2>
// // // // // //       <form className="space-y-4 max-w-md">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Name"
// // // // // //           className="w-full px-4 py-2 border rounded"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="email"
// // // // // //           placeholder="Email"
// // // // // //           className="w-full px-4 py-2 border rounded"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="password"
// // // // // //           placeholder="Password"
// // // // // //           className="w-full px-4 py-2 border rounded"
// // // // // //         />
// // // // // //         <button
// // // // // //           type="submit"
// // // // // //           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
// // // // // //           Register
// // // // // //         </button>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Register;
// // // // // import React, { useState } from "react";
// // // // // import axios from "../utils/axiosInstance";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const Register: React.FC = () => {
// // // // //   const [name, setName] = useState("");
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const navigate = useNavigate();

// // // // //   const handleRegister = async (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const res = await axios.post("/auth/register", {
// // // // //         name,
// // // // //         email,
// // // // //         password,
// // // // //       });

// // // // //       // Save token
// // // // //       localStorage.setItem("token", res.data.token);
// // // // //       alert("Registered successfully!");
// // // // //       navigate("/dashboard/analytics");
// // // // //     } catch (err) {
// // // // //       alert("Registration failed!");
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-4 max-w-md mx-auto">
// // // // //       <h1 className="text-xl font-bold mb-4">Register</h1>
// // // // //       <form onSubmit={handleRegister} className="flex flex-col gap-4">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Name"
// // // // //           className="p-2 border rounded"
// // // // //           value={name}
// // // // //           onChange={(e) => setName(e.target.value)}
// // // // //         />
// // // // //         <input
// // // // //           type="email"
// // // // //           placeholder="Email"
// // // // //           className="p-2 border rounded"
// // // // //           value={email}
// // // // //           onChange={(e) => setEmail(e.target.value)}
// // // // //         />
// // // // //         <input
// // // // //           type="password"
// // // // //           placeholder="Password"
// // // // //           className="p-2 border rounded"
// // // // //           value={password}
// // // // //           onChange={(e) => setPassword(e.target.value)}
// // // // //         />
// // // // //         <button type="submit" className="bg-green-600 text-white p-2 rounded">
// // // // //           Register
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Register;
// // // // import React, { useState } from "react";
// // // // import axios from "../utils/axiosInstance";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Register: React.FC = () => {
// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const navigate = useNavigate();

// // // //   const handleRegister = async (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await axios.post("/auth/register", {
// // // //         name,
// // // //         email,
// // // //         password,
// // // //       });

// // // //       // Store the token
// // // //       localStorage.setItem("token", res.data.token);

// // // //       alert("Registration successful!");
// // // //       navigate("/dashboard/analytics");
// // // //     } catch (error: any) {
// // // //       console.error("Registration error:", error);
// // // //       alert(error.response?.data?.message || "Registration failed.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-md mx-auto p-6">
// // // //       <h2 className="text-2xl font-bold mb-4">Register</h2>
// // // //       <form onSubmit={handleRegister} className="flex flex-col gap-4">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Name"
// // // //           className="p-2 border rounded"
// // // //           value={name}
// // // //           onChange={(e) => setName(e.target.value)}
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           className="p-2 border rounded"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           className="p-2 border rounded"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           required
// // // //         />
// // // //         <button
// // // //           type="submit"
// // // //           className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// // // //           Register
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Register;
// // // // src/pages/Register.tsx
// // // import React, { useState } from "react";
// // // import axios from "../utils/axiosInstance";
// // // import { useNavigate } from "react-router-dom";

// // // const Register: React.FC = () => {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   const handleRegister = async (e: React.FormEvent) => {
// // //     e.preventDefault();

// // //     if (password !== confirmPassword) {
// // //       return alert("Passwords do not match.");
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       const res = await axios.post("/auth/register", {
// // //         name,
// // //         email,
// // //         password,
// // //       });

// // //       localStorage.setItem("token", res.data.token);
// // //       alert("Registration successful!");
// // //       navigate("/dashboard/analytics");
// // //     } catch (error: any) {
// // //       console.error("Registration error:", error);
// // //       alert(error.response?.data?.message || "Registration failed.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto p-6 shadow-lg bg-white rounded-lg mt-10">
// // //       <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
// // //         Create an Account
// // //       </h2>

// // //       <form onSubmit={handleRegister} className="flex flex-col gap-4">
// // //         <input
// // //           type="text"
// // //           placeholder="Full Name"
// // //           className="p-3 border border-gray-300 rounded"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //           required
// // //         />

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           className="p-3 border border-gray-300 rounded"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           required
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           className="p-3 border border-gray-300 rounded"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           required
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Confirm Password"
// // //           className="p-3 border border-gray-300 rounded"
// // //           value={confirmPassword}
// // //           onChange={(e) => setConfirmPassword(e.target.value)}
// // //           required
// // //         />

// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           className={`bg-blue-600 text-white py-3 rounded font-semibold transition ${
// // //             loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
// // //           }`}>
// // //           {loading ? "Registering..." : "Register"}
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Register;
// // import React, { useState } from "react";
// // import axios from "../utils/axiosInstance";
// // import { useNavigate } from "react-router-dom";

// // const Register: React.FC = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [backBalance, setBackBalance] = useState<number>(0); // New state for back balance
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleRegister = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       return alert("Passwords do not match.");
// //     }

// //     try {
// //       setLoading(true);
// //       // Send backBalance along with other registration data
// //       const res = await axios.post("/auth/register", {
// //         name,
// //         email,
// //         password,
// //         backBalance, // Include backBalance in the request
// //       });

// //       localStorage.setItem("token", res.data.token);
// //       alert("Registration successful!");
// //       navigate("/dashboard/analytics");
// //     } catch (error: any) {
// //       console.error("Registration error:", error);
// //       alert(error.response?.data?.message || "Registration failed.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-6 shadow-lg bg-white rounded-lg mt-10">
// //       <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
// //         Create an Account
// //       </h2>

// //       <form onSubmit={handleRegister} className="flex flex-col gap-4">
// //         <input
// //           type="text"
// //           placeholder="Full Name"
// //           className="p-3 border border-gray-300 rounded"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className="p-3 border border-gray-300 rounded"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="p-3 border border-gray-300 rounded"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="password"
// //           placeholder="Confirm Password"
// //           className="p-3 border border-gray-300 rounded"
// //           value={confirmPassword}
// //           onChange={(e) => setConfirmPassword(e.target.value)}
// //           required
// //         />

// //         {/* Back Balance Input */}
// //         <input
// //           type="number"
// //           placeholder="Initial Back Balance"
// //           className="p-3 border border-gray-300 rounded"
// //           value={backBalance}
// //           onChange={(e) => setBackBalance(Number(e.target.value))}
// //           required
// //         />

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className={`bg-blue-600 text-white py-3 rounded font-semibold transition ${
// //             loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
// //           }`}>
// //           {loading ? "Registering..." : "Register"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Register;
// import React, { useState } from "react";
// import axios from "../utils/axiosInstance";
// import { useNavigate } from "react-router-dom";

// const Register: React.FC = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [backBalance, setBackBalance] = useState<number>(0);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       return alert("Passwords do not match.");
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post("/auth/register", {
//         name,
//         email,
//         password,
//         backBalance,
//       });

//       localStorage.setItem("token", res.data.token);
//       alert("Registration successful!");
//       navigate("/dashboard/analytics");
//     } catch (error: any) {
//       console.error("Registration error:", error);
//       alert(error.response?.data?.message || "Registration failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
//           Create an Account
//         </h2>

//         <form onSubmit={handleRegister} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               placeholder="Re-enter password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Initial Back Balance
//             </label>
//             <input
//               type="number"
//               placeholder="₹ 0.00"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               value={backBalance}
//               onChange={(e) => setBackBalance(Number(e.target.value))}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 text-white font-semibold rounded-lg transition ${
//               loading
//                 ? "bg-blue-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}>
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-blue-600 hover:underline font-medium">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [backBalance, setBackBalance] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      setLoading(true);
      const res = await axios.post("/auth/register", {
        name,
        email,
        password,
        backBalance,
      });

      localStorage.setItem("token", res.data.token);
      alert("Registration successful!");
      navigate("/dashboard/analytics");
    } catch (error: any) {
      console.error("Registration error:", error);
      alert(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create an Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className={styles.label}>Confirm Password</label>
            <input
              type="password"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className={styles.label}>Initial Back Balance</label>
            <input
              type="number"
              className={styles.input}
              value={backBalance}
              onChange={(e) => setBackBalance(Number(e.target.value))}
              required
            />
          </div>

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className={styles.footer}>
          Already have an account?{" "}
          <a href="/login" className={styles.link}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
