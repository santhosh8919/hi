// // // // // // // import React from "react";

// // // // // // // const Analytics: React.FC = () => {
// // // // // // //   return (
// // // // // // //     <div className="p-6">
// // // // // // //       <h2 className="text-2xl font-bold mb-4">Analytics</h2>
// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //         <div className="bg-white rounded shadow p-4">
// // // // // // //           <h3 className="font-semibold mb-2">Bar Chart (Coming Soon)</h3>
// // // // // // //           {/* Integrate chart library here */}
// // // // // // //           <div className="h-40 bg-gray-100 flex items-center justify-center">
// // // // // // //             Bar Chart Placeholder
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white rounded shadow p-4">
// // // // // // //           <h3 className="font-semibold mb-2">Pie Chart (Coming Soon)</h3>
// // // // // // //           <div className="h-40 bg-gray-100 flex items-center justify-center">
// // // // // // //             Pie Chart Placeholder
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Analytics;
// // // // // // import React from "react";
// // // // // // import {
// // // // // //   BarChart,
// // // // // //   Bar,
// // // // // //   PieChart,
// // // // // //   Pie,
// // // // // //   Cell,
// // // // // //   XAxis,
// // // // // //   YAxis,
// // // // // //   Tooltip,
// // // // // //   Legend,
// // // // // //   ResponsiveContainer,
// // // // // // } from "recharts";

// // // // // // const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b", "#00c49f"];

// // // // // // const paymentData = [
// // // // // //   { name: "Food", amount: 400 },
// // // // // //   { name: "Bills", amount: 300 },
// // // // // //   { name: "Travel", amount: 200 },
// // // // // //   { name: "Shopping", amount: 100 },
// // // // // // ];

// // // // // // const expenseData = [
// // // // // //   { name: "Rent", amount: 600 },
// // // // // //   { name: "Groceries", amount: 350 },
// // // // // //   { name: "Fuel", amount: 150 },
// // // // // //   { name: "Misc", amount: 120 },
// // // // // // ];

// // // // // // const Analytics: React.FC = () => {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2 className="text-3xl font-bold mb-6">📈 Analytics</h2>

// // // // // //       {/* Payment Bar Chart */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow mb-8">
// // // // // //         <h3 className="text-xl font-semibold mb-4">Payment Expenses (Bar)</h3>
// // // // // //         <ResponsiveContainer width="100%" height={300}>
// // // // // //           <BarChart data={paymentData}>
// // // // // //             <XAxis dataKey="name" />
// // // // // //             <YAxis />
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //             <Bar dataKey="amount" fill="#8884d8" />
// // // // // //           </BarChart>
// // // // // //         </ResponsiveContainer>
// // // // // //       </div>

// // // // // //       {/* General Expense Pie Chart */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow">
// // // // // //         <h3 className="text-xl font-semibold mb-4">General Expenses (Pie)</h3>
// // // // // //         <ResponsiveContainer width="100%" height={300}>
// // // // // //           <PieChart>
// // // // // //             <Pie
// // // // // //               data={expenseData}
// // // // // //               dataKey="amount"
// // // // // //               nameKey="name"
// // // // // //               cx="50%"
// // // // // //               cy="50%"
// // // // // //               outerRadius={100}
// // // // // //               fill="#82ca9d"
// // // // // //               label>
// // // // // //               {expenseData.map((entry, index) => (
// // // // // //                 <Cell
// // // // // //                   key={`cell-${index}`}
// // // // // //                   fill={pieColors[index % pieColors.length]}
// // // // // //                 />
// // // // // //               ))}
// // // // // //             </Pie>
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //           </PieChart>
// // // // // //         </ResponsiveContainer>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // // export default Analytics;
// // // // // // import React from "react";
// // // // // // import {
// // // // // //   BarChart,
// // // // // //   Bar,
// // // // // //   PieChart,
// // // // // //   Pie,
// // // // // //   Cell,
// // // // // //   XAxis,
// // // // // //   YAxis,
// // // // // //   Tooltip,
// // // // // //   Legend,
// // // // // //   ResponsiveContainer,
// // // // // // } from "recharts";

// // // // // // const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b", "#00c49f"];

// // // // // // const paymentData = [
// // // // // //   { name: "Food", amount: 400 },
// // // // // //   { name: "Bills", amount: 300 },
// // // // // //   { name: "Travel", amount: 200 },
// // // // // //   { name: "Shopping", amount: 100 },
// // // // // // ];

// // // // // // const expenseData = [
// // // // // //   { name: "Rent", amount: 600 },
// // // // // //   { name: "Groceries", amount: 350 },
// // // // // //   { name: "Fuel", amount: 150 },
// // // // // //   { name: "Misc", amount: 120 },
// // // // // // ];

// // // // // // const Analytics: React.FC = () => {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2 className="text-3xl font-bold mb-6">📈 Analytics</h2>

// // // // // //       {/* Payment Expenses Bar Chart */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow mb-8">
// // // // // //         <h3 className="text-xl font-semibold mb-4">Payment Expenses (Bar)</h3>
// // // // // //         <ResponsiveContainer width="100%" height={300}>
// // // // // //           <BarChart data={paymentData}>
// // // // // //             <XAxis dataKey="name" />
// // // // // //             <YAxis />
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //             <Bar dataKey="amount" fill="#8884d8" />
// // // // // //           </BarChart>
// // // // // //         </ResponsiveContainer>
// // // // // //       </div>

// // // // // //       {/* General Expenses Pie Chart */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow">
// // // // // //         <h3 className="text-xl font-semibold mb-4">General Expenses (Pie)</h3>
// // // // // //         <ResponsiveContainer width="100%" height={300}>
// // // // // //           <PieChart>
// // // // // //             <Pie
// // // // // //               data={expenseData}
// // // // // //               dataKey="amount"
// // // // // //               nameKey="name"
// // // // // //               cx="50%"
// // // // // //               cy="50%"
// // // // // //               outerRadius={100}
// // // // // //               fill="#82ca9d"
// // // // // //               label>
// // // // // //               {expenseData.map((_, index) => (
// // // // // //                 <Cell
// // // // // //                   key={`cell-${index}`}
// // // // // //                   fill={pieColors[index % pieColors.length]}
// // // // // //                 />
// // // // // //               ))}
// // // // // //             </Pie>
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //           </PieChart>
// // // // // //         </ResponsiveContainer>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Analytics;
// // // // // import React from "react";
// // // // // import {
// // // // //   BarChart,
// // // // //   Bar,
// // // // //   PieChart,
// // // // //   Pie,
// // // // //   Cell,
// // // // //   XAxis,
// // // // //   YAxis,
// // // // //   Tooltip,
// // // // //   Legend,
// // // // //   ResponsiveContainer,
// // // // // } from "recharts";

// // // // // const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b", "#00c49f"];

// // // // // const paymentData = [
// // // // //   { name: "Food", amount: 400 },
// // // // //   { name: "Bills", amount: 300 },
// // // // //   { name: "Travel", amount: 200 },
// // // // //   { name: "Shopping", amount: 100 },
// // // // // ];

// // // // // const expenseData = [
// // // // //   { name: "Rent", amount: 600 },
// // // // //   { name: "Groceries", amount: 350 },
// // // // //   { name: "Fuel", amount: 150 },
// // // // //   { name: "Misc", amount: 120 },
// // // // // ];

// // // // // const Analytics: React.FC = () => {
// // // // //   return (
// // // // //     <div className="space-y-8">
// // // // //       <h2 className="text-4xl font-bold text-gray-800 mb-4">📊 Analytics</h2>

// // // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // // //         {/* Bar Chart for Payment Expenses */}
// // // // //         <div className="bg-white p-6 rounded-2xl shadow-md border">
// // // // //           <h3 className="text-2xl font-semibold text-blue-600 mb-4">
// // // // //             💳 Payment Expenses
// // // // //           </h3>
// // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // //             <BarChart data={paymentData}>
// // // // //               <XAxis dataKey="name" />
// // // // //               <YAxis />
// // // // //               <Tooltip />
// // // // //               <Legend />
// // // // //               <Bar dataKey="amount" fill="#4f46e5" radius={[10, 10, 0, 0]} />
// // // // //             </BarChart>
// // // // //           </ResponsiveContainer>
// // // // //         </div>

// // // // //         {/* Pie Chart for General Expenses */}
// // // // //         <div className="bg-white p-6 rounded-2xl shadow-md border">
// // // // //           <h3 className="text-2xl font-semibold text-green-600 mb-4">
// // // // //             🧾 General Expenses
// // // // //           </h3>
// // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // //             <PieChart>
// // // // //               <Pie
// // // // //                 data={expenseData}
// // // // //                 dataKey="amount"
// // // // //                 nameKey="name"
// // // // //                 cx="50%"
// // // // //                 cy="50%"
// // // // //                 outerRadius={100}
// // // // //                 label>
// // // // //                 {expenseData.map((_, index) => (
// // // // //                   <Cell
// // // // //                     key={`cell-${index}`}
// // // // //                     fill={pieColors[index % pieColors.length]}
// // // // //                   />
// // // // //                 ))}
// // // // //               </Pie>
// // // // //               <Tooltip />
// // // // //               <Legend />
// // // // //             </PieChart>
// // // // //           </ResponsiveContainer>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Analytics;
// // // // import React from "react";
// // // // import {
// // // //   BarChart,
// // // //   Bar,
// // // //   PieChart,
// // // //   Pie,
// // // //   Cell,
// // // //   XAxis,
// // // //   YAxis,
// // // //   Tooltip,
// // // //   Legend,
// // // //   ResponsiveContainer,
// // // // } from "recharts";

// // // // // Pie chart color scheme
// // // // const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b", "#00c49f"];

// // // // // Data for payment expenses (Bar chart)
// // // // const paymentData = [
// // // //   { name: "Food", amount: 400 },
// // // //   { name: "Bills", amount: 300 },
// // // //   { name: "Travel", amount: 200 },
// // // //   { name: "Shopping", amount: 100 },
// // // // ];

// // // // // Data for general expenses (Pie chart)
// // // // const expenseData = [
// // // //   { name: "Rent", amount: 600 },
// // // //   { name: "Groceries", amount: 350 },
// // // //   { name: "Fuel", amount: 150 },
// // // //   { name: "Misc", amount: 120 },
// // // // ];

// // // // const Analytics: React.FC = () => {
// // // //   return (
// // // //     <div className="space-y-8">
// // // //       <h2 className="text-4xl font-bold text-gray-800 mb-4">📊 Analytics</h2>

// // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // //         {/* Bar Chart for Payment Expenses */}
// // // //         <div className="bg-white p-6 rounded-2xl shadow-md border">
// // // //           <h3 className="text-2xl font-semibold text-blue-600 mb-4">
// // // //             💳 Payment Expenses
// // // //           </h3>
// // // //           <ResponsiveContainer width="100%" height={300}>
// // // //             <BarChart data={paymentData}>
// // // //               <XAxis dataKey="name" />
// // // //               <YAxis />
// // // //               <Tooltip />
// // // //               <Legend />
// // // //               <Bar dataKey="amount" fill="#4f46e5" radius={[10, 10, 0, 0]} />
// // // //             </BarChart>
// // // //           </ResponsiveContainer>
// // // //         </div>

// // // //         {/* Pie Chart for General Expenses */}
// // // //         <div className="bg-white p-6 rounded-2xl shadow-md border">
// // // //           <h3 className="text-2xl font-semibold text-green-600 mb-4">
// // // //             🧾 General Expenses
// // // //           </h3>
// // // //           <ResponsiveContainer width="100%" height={300}>
// // // //             <PieChart>
// // // //               <Pie
// // // //                 data={expenseData}
// // // //                 dataKey="amount"
// // // //                 nameKey="name"
// // // //                 cx="50%"
// // // //                 cy="50%"
// // // //                 outerRadius={100}
// // // //                 label>
// // // //                 {expenseData.map((_, index) => (
// // // //                   <Cell
// // // //                     key={`cell-${index}`}
// // // //                     fill={pieColors[index % pieColors.length]}
// // // //                   />
// // // //                 ))}
// // // //               </Pie>
// // // //               <Tooltip />
// // // //               <Legend />
// // // //             </PieChart>
// // // //           </ResponsiveContainer>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Analytics;
// // // import React from "react";
// // // import {
// // //   BarChart,
// // //   Bar,
// // //   PieChart,
// // //   Pie,
// // //   Cell,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   Legend,
// // //   ResponsiveContainer,
// // // } from "recharts";
// // // import styles from "./Analytics.module.css"; // 👈 CSS import

// // // const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b", "#00c49f"];

// // // const paymentData = [
// // //   { name: "Food", amount: 400 },
// // //   { name: "Bills", amount: 300 },
// // //   { name: "Travel", amount: 200 },
// // //   { name: "Shopping", amount: 100 },
// // // ];

// // // const expenseData = [
// // //   { name: "Rent", amount: 600 },
// // //   { name: "Groceries", amount: 350 },
// // //   { name: "Fuel", amount: 150 },
// // //   { name: "Misc", amount: 120 },
// // // ];

// // // const Analytics: React.FC = () => {
// // //   return (
// // //     <div className={styles.container}>
// // //       <h2 className={styles.title}>📊 Analytics</h2>

// // //       <div className={styles.grid}>
// // //         {/* Bar Chart */}
// // //         <div className={styles.chartCard}>
// // //           <h3 className={styles.chartTitleBlue}>💳 Payment Expenses</h3>
// // //           <ResponsiveContainer width="100%" height={300}>
// // //             <BarChart data={paymentData}>
// // //               <XAxis dataKey="name" />
// // //               <YAxis />
// // //               <Tooltip />
// // //               <Legend />
// // //               <Bar dataKey="amount" fill="#4f46e5" radius={[10, 10, 0, 0]} />
// // //             </BarChart>
// // //           </ResponsiveContainer>
// // //         </div>

// // //         {/* Pie Chart */}
// // //         <div className={styles.chartCard}>
// // //           <h3 className={styles.chartTitleGreen}>🧾 General Expenses</h3>
// // //           <ResponsiveContainer width="100%" height={300}>
// // //             <PieChart>
// // //               <Pie
// // //                 data={expenseData}
// // //                 dataKey="amount"
// // //                 nameKey="name"
// // //                 cx="50%"
// // //                 cy="50%"
// // //                 outerRadius={100}
// // //                 label>
// // //                 {expenseData.map((_, index) => (
// // //                   <Cell
// // //                     key={`cell-${index}`}
// // //                     fill={pieColors[index % pieColors.length]}
// // //                   />
// // //                 ))}
// // //               </Pie>
// // //               <Tooltip />
// // //               <Legend />
// // //             </PieChart>
// // //           </ResponsiveContainer>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// export default Analytics;
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./Analytics.module.css";

const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b", "#00c49f"];

const Analytics: React.FC = () => {
  // Define state to track payment and expense data
  const [paymentData, setPaymentData] = useState([
    { name: "Food", amount: 400 },
    { name: "Bills", amount: 300 },
    { name: "Travel", amount: 200 },
    { name: "Shopping", amount: 100 },
  ]);

  const [expenseData, setExpenseData] = useState([
    { name: "Rent", amount: 600 },
    { name: "Groceries", amount: 350 },
    { name: "Fuel", amount: 150 },
    { name: "Misc", amount: 120 },
  ]);

  // Effect hook to simulate dynamic updates (you can replace this with data fetching or any state-changing logic)
  useEffect(() => {
    // Example: Update payment and expense data every 10 seconds
    const interval = setInterval(() => {
      setPaymentData([
        { name: "Food", amount: Math.random() * 500 },
        { name: "Bills", amount: Math.random() * 500 },
        { name: "Travel", amount: Math.random() * 500 },
        { name: "Shopping", amount: Math.random() * 500 },
      ]);

      setExpenseData([
        { name: "Rent", amount: Math.random() * 1000 },
        { name: "Groceries", amount: Math.random() * 500 },
        { name: "Fuel", amount: Math.random() * 300 },
        { name: "Misc", amount: Math.random() * 200 },
      ]);
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []); // Empty dependency array means it runs once when component mounts

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📊 Analytics</h2>

      <div className={styles.grid}>
        {/* Bar Chart */}
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitleBlue}>💳 Payment Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={paymentData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#4f46e5" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitleGreen}>🧾 General Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseData}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label>
                {expenseData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../utils/axiosInstance";
// import {
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import styles from "./Analytics.module.css";

// const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b", "#00c49f"];

// const Analytics: React.FC = () => {
//   const [paymentData, setPaymentData] = useState<any[]>([]);
//   const [expenseData, setExpenseData] = useState<any[]>([]);

//   useEffect(() => {
//     // Fetch payment and expense data from API on component mount
//     const fetchData = async () => {
//       try {
//         const paymentResponse = await axiosInstance.get("/payments");
//         const expenseResponse = await axiosInstance.get("/expenses");

//         setPaymentData(paymentResponse.data); // Assuming data is an array of objects
//         setExpenseData(expenseResponse.data); // Assuming data is an array of objects
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means it runs only once when component mounts

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>📊 Analytics</h2>

//       <div className={styles.grid}>
//         {/* Bar Chart */}
//         <div className={styles.chartCard}>
//           <h3 className={styles.chartTitleBlue}>💳 Payment Expenses</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={paymentData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="amount" fill="#4f46e5" radius={[10, 10, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Pie Chart */}
//         <div className={styles.chartCard}>
//           <h3 className={styles.chartTitleGreen}>🧾 General Expenses</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={expenseData}
//                 dataKey="amount"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 label>
//                 {expenseData.map((_, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={pieColors[index % pieColors.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Analytics;
// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../utils/axiosInstance";
// import {
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import styles from "./Analytics.module.css";

// const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b", "#00c49f"];

// const Analytics: React.FC = () => {
//   const [paymentData, setPaymentData] = useState<any[]>([]);
//   const [expenseData, setExpenseData] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Loading state

//   useEffect(() => {
//     // Fetch payment and expense data from API on component mount
//     const fetchData = async () => {
//       try {
//         setLoading(true); // Start loading
//         const paymentResponse = await axiosInstance.get("/payments");
//         const expenseResponse = await axiosInstance.get("/expenses");

//         setPaymentData(paymentResponse.data); // Assuming data is an array of objects
//         setExpenseData(expenseResponse.data); // Assuming data is an array of objects
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false); // End loading
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means it runs only once when component mounts

//   if (loading) {
//     return <div>Loading...</div>; // Loading message while waiting for data
//   }

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>📊 Analytics</h2>

//       <div className={styles.grid}>
//         {/* Bar Chart */}
//         <div className={styles.chartCard}>
//           <h3 className={styles.chartTitleBlue}>💳 Payment Expenses</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={paymentData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="amount" fill="#4f46e5" radius={[10, 10, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Pie Chart */}
//         <div className={styles.chartCard}>
//           <h3 className={styles.chartTitleGreen}>🧾 General Expenses</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={expenseData}
//                 dataKey="amount"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 label>
//                 {expenseData.map((_, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={pieColors[index % pieColors.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;
