// // // import React, { useState } from "react";

// // // const Expenses: React.FC = () => {
// // //   const [category, setCategory] = useState("");
// // //   const [amount, setAmount] = useState("");

// // //   const handleAddExpense = () => {
// // //     // Call backend here
// // //     console.log("Expense:", { category, amount });
// // //   };

// // //   return (
// // //     <div className="p-6">
// // //       <h2 className="text-2xl font-bold mb-4">General Expenses</h2>
// // //       <div className="space-y-4 max-w-md">
// // //         <input
// // //           type="text"
// // //           placeholder="Category"
// // //           className="w-full px-4 py-2 border rounded"
// // //           value={category}
// // //           onChange={(e) => setCategory(e.target.value)}
// // //         />
// // //         <input
// // //           type="number"
// // //           placeholder="Amount"
// // //           className="w-full px-4 py-2 border rounded"
// // //           value={amount}
// // //           onChange={(e) => setAmount(e.target.value)}
// // //         />
// // //         <button
// // //           onClick={handleAddExpense}
// // //           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
// // //           Add Expense
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Expenses;
// // import React, { useState } from "react";

// // interface Expense {
// //   category: string;
// //   amount: number;
// // }

// // const Expenses: React.FC = () => {
// //   const [category, setCategory] = useState("");
// //   const [amount, setAmount] = useState<number | "">("");
// //   const [expenses, setExpenses] = useState<Expense[]>([]);

// //   const handleAddExpense = () => {
// //     if (!category || amount === "") return;

// //     const newExpense: Expense = { category, amount: Number(amount) };
// //     setExpenses([...expenses, newExpense]);
// //     setCategory("");
// //     setAmount("");
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-3xl font-bold mb-6">💸 General Expenses</h2>

// //       <div className="bg-white p-6 rounded-xl shadow mb-6">
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //           <input
// //             type="text"
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             placeholder="Enter Category"
// //             className="border p-2 rounded"
// //           />
// //           <input
// //             type="number"
// //             value={amount}
// //             onChange={(e) => setAmount(Number(e.target.value))}
// //             placeholder="Enter Amount"
// //             className="border p-2 rounded"
// //           />
// //           <button
// //             onClick={handleAddExpense}
// //             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
// //             Add Expense
// //           </button>
// //         </div>
// //       </div>

// //       <div className="bg-white p-6 rounded-xl shadow">
// //         <h3 className="text-xl font-semibold mb-4">📋 Expense List</h3>
// //         <ul className="list-disc pl-6 space-y-2">
// //           {expenses.map((exp, index) => (
// //             <li key={index}>
// //               {exp.category}: ₹{exp.amount}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Expenses;
// // import React, { useState, useEffect } from "react";

// // interface Expense {
// //   category: string;
// //   amount: number;
// // }

// // const LOCAL_STORAGE_KEY = "generalExpenses";

// // const Expenses: React.FC = () => {
// //   const [category, setCategory] = useState("");
// //   const [amount, setAmount] = useState<number | "">("");
// //   const [expenses, setExpenses] = useState<Expense[]>([]);

// //   // 🟢 Load from localStorage on first render
// //   useEffect(() => {
// //     const data = localStorage.getItem(LOCAL_STORAGE_KEY);
// //     if (data) {
// //       setExpenses(JSON.parse(data));
// //     }
// //   }, []);

// //   // 🟡 Save to localStorage every time expenses change
// //   useEffect(() => {
// //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
// //   }, [expenses]);

// //   const handleAddExpense = () => {
// //     if (!category || amount === "") return;

// //     const newExpense: Expense = { category, amount: Number(amount) };
// //     setExpenses((prev) => [...prev, newExpense]);
// //     setCategory("");
// //     setAmount("");
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-3xl font-bold mb-6">💸 General Expenses</h2>

// //       <div className="bg-white p-6 rounded-xl shadow mb-6">
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //           <input
// //             type="text"
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             placeholder="Enter Category"
// //             className="border p-2 rounded"
// //           />
// //           <input
// //             type="number"
// //             value={amount}
// //             onChange={(e) => setAmount(Number(e.target.value))}
// //             placeholder="Enter Amount"
// //             className="border p-2 rounded"
// //           />
// //           <button
// //             onClick={handleAddExpense}
// //             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
// //             Add Expense
// //           </button>
// //         </div>
// //       </div>

// //       <div className="bg-white p-6 rounded-xl shadow">
// //         <h3 className="text-xl font-semibold mb-4">📋 Expense List</h3>
// //         <ul className="list-disc pl-6 space-y-2">
// //           {expenses.map((exp, index) => (
// //             <li key={index}>
// //               {exp.category}: ₹{exp.amount}
// //             </li>
// //           ))}
// //           {expenses.length === 0 && <p>No expenses yet.</p>}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Expenses;
// import React, { useState, useEffect } from "react";

// interface Expense {
//   category: string;
//   amount: number;
// }

// const LOCAL_STORAGE_KEY = "generalExpenses";

// const Expenses: React.FC = () => {
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState<number | "">("");
//   const [expenses, setExpenses] = useState<Expense[]>([]);

//   useEffect(() => {
//     const data = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (data) setExpenses(JSON.parse(data));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
//   }, [expenses]);

//   const handleAddExpense = () => {
//     if (!category || amount === "") return;
//     const newExpense: Expense = { category, amount: Number(amount) };
//     setExpenses((prev) => [...prev, newExpense]);
//     setCategory("");
//     setAmount("");
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">
//         💸 General Expenses
//       </h2>

//       <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             placeholder="Enter Category"
//             className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//             placeholder="Enter Amount"
//             className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleAddExpense}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
//             ➕ Add Expense
//           </button>
//         </div>
//       </div>

//       <div className="bg-white shadow-md rounded-2xl p-6">
//         <h3 className="text-2xl font-semibold mb-4 text-gray-800">
//           📋 Expense List
//         </h3>
//         {expenses.length === 0 ? (
//           <p className="text-gray-500 italic">No expenses added yet. ✨</p>
//         ) : (
//           <ul className="space-y-3">
//             {expenses.map((exp, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center p-3 border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
//                 <span className="font-medium text-gray-700">
//                   {exp.category}
//                 </span>
//                 <span className="text-green-600 font-bold">₹{exp.amount}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Expenses;
// import React, { useState, useEffect } from "react";
// import styles from "./Expenses.module.css"; // 👈 Import CSS module

// interface Expense {
//   category: string;
//   amount: number;
// }

// const LOCAL_STORAGE_KEY = "generalExpenses";

// const Expenses: React.FC = () => {
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState<number | "">("");
//   const [expenses, setExpenses] = useState<Expense[]>([]);

//   useEffect(() => {
//     const data = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (data) setExpenses(JSON.parse(data));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
//   }, [expenses]);

//   const handleAddExpense = () => {
//     if (!category || amount === "") return;
//     const newExpense: Expense = { category, amount: Number(amount) };
//     setExpenses((prev) => [...prev, newExpense]);
//     setCategory("");
//     setAmount("");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>💸 General Expenses</h2>

//       <div className={styles.card}>
//         <div className={styles.grid}>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             placeholder="Enter Category"
//             className={styles.input}
//           />
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//             placeholder="Enter Amount"
//             className={styles.input}
//           />
//           <button onClick={handleAddExpense} className={styles.button}>
//             ➕ Add Expense
//           </button>
//         </div>
//       </div>

//       <div className={styles.card}>
//         <h3 className={styles.sectionTitle}>📋 Expense List</h3>
//         {expenses.length === 0 ? (
//           <p className={styles.emptyText}>No expenses added yet. ✨</p>
//         ) : (
//           <ul className={styles.list}>
//             {expenses.map((exp, index) => (
//               <li key={index} className={styles.listItem}>
//                 <span className={styles.categoryText}>{exp.category}</span>
//                 <span className={styles.amountText}>₹{exp.amount}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Expenses;
// import React, { useState, useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import styles from "./Expenses.module.css";

// interface Expense {
//   category: string;
//   amount: number;
// }

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a29bfe"];

// const LOCAL_STORAGE_KEY = "generalExpenses";

// const Expenses: React.FC = () => {
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState<number | "">("");
//   const [expenses, setExpenses] = useState<Expense[]>([]);

//   useEffect(() => {
//     const data = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (data) setExpenses(JSON.parse(data));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
//   }, [expenses]);

//   const handleAddExpense = () => {
//     if (!category || amount === "") return;
//     const newExpense: Expense = { category, amount: Number(amount) };
//     setExpenses((prev) => [...prev, newExpense]);
//     setCategory("");
//     setAmount("");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>💸 General Expenses</h2>

//       <div className={styles.card}>
//         <div className={styles.grid}>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             placeholder="Enter Category"
//             className={styles.input}
//           />
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//             placeholder="Enter Amount"
//             className={styles.input}
//           />
//           <button onClick={handleAddExpense} className={styles.button}>
//             ➕ Add Expense
//           </button>
//         </div>
//       </div>

//       <div className={styles.card}>
//         <h3 className={styles.sectionTitle}>📋 Expense List</h3>
//         {expenses.length === 0 ? (
//           <p className={styles.emptyText}>No expenses added yet. ✨</p>
//         ) : (
//           <ul className={styles.list}>
//             {expenses.map((exp, index) => (
//               <li key={index} className={styles.listItem}>
//                 <span className={styles.categoryText}>{exp.category}</span>
//                 <span className={styles.amountText}>₹{exp.amount}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {expenses.length > 0 && (
//         <div className={styles.chartGrid}>
//           <div className={styles.chartCard}>
//             <h3 className={styles.chartTitle}>📊 Bar Chart</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={expenses}>
//                 <XAxis dataKey="category" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="amount" fill="#8884d8" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className={styles.chartCard}>
//             <h3 className={styles.chartTitle}>🍩 Pie Chart</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={expenses}
//                   dataKey="amount"
//                   nameKey="category"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={100}
//                   label>
//                   {expenses.map((_, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Expenses;
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import styles from "./Expenses.module.css";

interface Expense {
  category: string;
  amount: number;
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a29bfe"];
const LOCAL_STORAGE_KEY = "generalExpenses";

const Expenses: React.FC = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Load expenses from localStorage when the component mounts
  useEffect(() => {
    const savedExpenses = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Update localStorage every time the expenses state changes
  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
    }
  }, [expenses]);

  const handleAddExpense = () => {
    if (!category || amount === "") return;

    const newExpense: Expense = { category, amount: Number(amount) };
    setExpenses((prev) => [...prev, newExpense]);

    setCategory("");
    setAmount("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>💸 General Expenses</h2>

      <div className={styles.card}>
        <div className={styles.grid}>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
            className={styles.input}
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter Amount"
            className={styles.input}
          />
          <button onClick={handleAddExpense} className={styles.button}>
            ➕ Add Expense
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <h3 className={styles.sectionTitle}>📋 Expense List</h3>
        {expenses.length === 0 ? (
          <p className={styles.emptyText}>No expenses added yet. ✨</p>
        ) : (
          <ul className={styles.list}>
            {expenses.map((exp, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.categoryText}>{exp.category}</span>
                <span className={styles.amountText}>₹{exp.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {expenses.length > 0 && (
        <div className={styles.chartGrid}>
          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>📊 Bar Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenses}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>🍩 Pie Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenses}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label>
                  {expenses.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
