// // import React, { useState, useEffect } from "react";
// // import {
// //   PieChart,
// //   Pie,
// //   Cell,
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// // } from "recharts";
// // import styles from "./PaymentExpenses.module.css"; // 👈 import

// // interface Payment {
// //   number: string;
// //   category: string;
// //   amount: number;
// // }

// // const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a29bfe"];

// // const PaymentExpenses: React.FC = () => {
// //   const [number, setNumber] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [amount, setAmount] = useState<number | "">("");
// //   const [payments, setPayments] = useState<Payment[]>([]);

// //   // New states for limits and total amount
// //   const [paymentLimit, setPaymentLimit] = useState<number>(1000); // Example: Set a default payment limit
// //   const [totalAmount, setTotalAmount] = useState<number>(0);
// //   const [enteredTotalAmount, setEnteredTotalAmount] = useState<number>(0); // Editable total amount

// //   useEffect(() => {
// //     const storedPayments = localStorage.getItem("payments");
// //     if (storedPayments) {
// //       const storedData = JSON.parse(storedPayments);
// //       setPayments(storedData);
// //       // Calculate the total amount from stored payments
// //       const total = storedData.reduce(
// //         (sum: number, payment: Payment) => sum + payment.amount,
// //         0
// //       );
// //       setTotalAmount(total);
// //       setEnteredTotalAmount(total); // Initialize editable total amount with current total
// //     }
// //   }, []);

// //   const handlePay = () => {
// //     if (!number || !category || amount === "") return;

// //     // Calculate total amount including the new payment
// //     const newTotalAmount = totalAmount + Number(amount);

// //     // Check if the amount exceeds the total amount or the payment limit
// //     if (Number(amount) > totalAmount) {
// //       alert("Entered amount cannot be greater than the total amount!");
// //       return;
// //     }

// //     if (newTotalAmount > paymentLimit) {
// //       alert("Payment exceeds the allowed total limit!");
// //       return;
// //     }

// //     const newPayment: Payment = { number, category, amount: Number(amount) };
// //     const updatedPayments = [...payments, newPayment];
// //     setPayments(updatedPayments);
// //     localStorage.setItem("payments", JSON.stringify(updatedPayments));

// //     // Update total amount
// //     setTotalAmount(newTotalAmount);
// //     setEnteredTotalAmount(newTotalAmount); // Update editable total amount

// //     setNumber("");
// //     setCategory("");
// //     setAmount("");
// //   };

// //   const handleClear = () => {
// //     setPayments([]);
// //     setTotalAmount(0);
// //     setEnteredTotalAmount(0); // Reset editable total amount
// //     localStorage.removeItem("payments");
// //   };

// //   // Handle the manual editing of the total amount
// //   const handleTotalAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const newAmount = Number(e.target.value);

// //     // Ensure the entered amount doesn't exceed the payment limit or total amount
// //     if (newAmount <= paymentLimit && newAmount <= totalAmount) {
// //       setEnteredTotalAmount(newAmount);
// //       setTotalAmount(newAmount); // Update the total amount
// //     } else {
// //       alert("Entered amount exceeds the total amount or payment limit!");
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h2 className={styles.heading}>💳 Payment Expenses</h2>

// //       <div className={styles.formCard}>
// //         <input
// //           type="text"
// //           placeholder="Enter Number"
// //           value={number}
// //           onChange={(e) => setNumber(e.target.value)}
// //           className={styles.input}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Enter Category"
// //           value={category}
// //           onChange={(e) => setCategory(e.target.value)}
// //           className={styles.input}
// //         />
// //         <input
// //           type="number"
// //           placeholder="Enter Amount"
// //           value={amount}
// //           onChange={(e) => setAmount(Number(e.target.value))}
// //           className={styles.input}
// //         />

// //         {/* Payment Limit */}
// //         <input
// //           type="number"
// //           placeholder="Set Payment Limit"
// //           value={paymentLimit}
// //           onChange={(e) => setPaymentLimit(Number(e.target.value))}
// //           className={styles.input}
// //         />

// //         <button onClick={handlePay} className={styles.buttonGreen}>
// //           Pay
// //         </button>
// //       </div>

// //       {/* Editable Total Amount */}
// //       <div className={styles.editTotalAmountWrapper}>
// //         <h3>Editable Total Amount</h3>
// //         <input
// //           type="number"
// //           value={enteredTotalAmount}
// //           onChange={handleTotalAmountChange}
// //           className={styles.input}
// //         />
// //       </div>

// //       {payments.length > 0 && (
// //         <div className={styles.clearButtonWrapper}>
// //           <button onClick={handleClear} className={styles.buttonRed}>
// //             Clear Payments
// //           </button>
// //         </div>
// //       )}

// //       <div className={styles.chartGrid}>
// //         <div className={styles.chartCard}>
// //           <h3 className={styles.chartTitle}>📊 Bar Chart</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <BarChart data={payments}>
// //               <XAxis dataKey="category" />
// //               <YAxis />
// //               <Tooltip />
// //               <Legend />
// //               <Bar dataKey="amount" fill="#8884d8" />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </div>

// //         <div className={styles.chartCard}>
// //           <h3 className={styles.chartTitle}>🍩 Pie Chart</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <PieChart>
// //               <Pie
// //                 data={payments}
// //                 dataKey="amount"
// //                 nameKey="category"
// //                 cx="50%"
// //                 cy="50%"
// //                 outerRadius={100}
// //                 fill="#82ca9d"
// //                 label>
// //                 {payments.map((_, index) => (
// //                   <Cell
// //                     key={`cell-${index}`}
// //                     fill={COLORS[index % COLORS.length]}
// //                   />
// //                 ))}
// //               </Pie>
// //             </PieChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>

// //       <div className={styles.totalAmount}>
// //         <h3>Total Payments: ${totalAmount}</h3>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentExpenses;
// import React, { useState, useEffect } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import styles from "./PaymentExpenses.module.css"; // 👈 import

// interface Payment {
//   number: string;
//   category: string;
//   amount: number;
// }

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a29bfe"];

// const PaymentExpenses: React.FC = () => {
//   const [number, setNumber] = useState("");
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState<number | "">("");
//   const [payments, setPayments] = useState<Payment[]>([]);

//   // New states for limits and total amount
//   const [paymentLimit, setPaymentLimit] = useState<number>(1000); // Example: Set a default payment limit
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [enteredTotalAmount, setEnteredTotalAmount] = useState<number>(0); // Editable total amount

//   useEffect(() => {
//     const storedPayments = localStorage.getItem("payments");
//     if (storedPayments) {
//       const storedData = JSON.parse(storedPayments);
//       setPayments(storedData);
//       // Calculate the total amount from stored payments
//       const total = storedData.reduce(
//         (sum: number, payment: Payment) => sum + payment.amount,
//         0
//       );
//       setTotalAmount(total);
//       setEnteredTotalAmount(total); // Initialize editable total amount with current total
//     }
//   }, []);

//   const handlePay = () => {
//     if (!number || !category || amount === "") return;

//     // Calculate total amount including the new payment
//     const newTotalAmount = totalAmount + Number(amount);

//     // Check if the amount exceeds the total amount or the payment limit
//     if (Number(amount) > totalAmount) {
//       alert("Entered amount cannot be greater than the total amount!");
//       return;
//     }

//     if (newTotalAmount > paymentLimit) {
//       alert("Payment exceeds the allowed total limit!");
//       return;
//     }

//     const newPayment: Payment = { number, category, amount: Number(amount) };
//     const updatedPayments = [...payments, newPayment];
//     setPayments(updatedPayments);
//     localStorage.setItem("payments", JSON.stringify(updatedPayments));

//     // Update total amount
//     setTotalAmount(newTotalAmount);
//     setEnteredTotalAmount(newTotalAmount); // Update editable total amount

//     setNumber("");
//     setCategory("");
//     setAmount("");
//   };

//   const handleClear = () => {
//     setPayments([]);
//     setTotalAmount(0);
//     setEnteredTotalAmount(0); // Reset editable total amount
//     localStorage.removeItem("payments");
//   };

//   // Handle the manual editing of the total amount
//   const handleTotalAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newAmount = Number(e.target.value);

//     // Ensure the entered amount doesn't exceed the payment limit or total amount
//     if (newAmount <= paymentLimit && newAmount <= totalAmount) {
//       setEnteredTotalAmount(newAmount);
//       setTotalAmount(newAmount); // Update the total amount
//     } else {
//       alert("Entered amount exceeds the total amount or payment limit!");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>💳 Payment Expenses</h2>

//       <div className={styles.formCard}>
//         <input
//           type="text"
//           placeholder="Enter payment number (e.g., #12345)"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter payment category (e.g., Utilities, Food)"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Enter payment amount (e.g., 100)"
//           value={amount}
//           onChange={(e) => setAmount(Number(e.target.value))}
//           className={styles.input}
//         />

//         {/* Payment Limit */}
//         <input
//           type="number"
//           placeholder="Set maximum payment limit (e.g., 1000)"
//           value={paymentLimit}
//           onChange={(e) => setPaymentLimit(Number(e.target.value))}
//           className={styles.input}
//         />

//         <button onClick={handlePay} className={styles.buttonGreen}>
//           Pay
//         </button>
//       </div>

//       {/* Editable Total Amount */}
//       <div className={styles.editTotalAmountWrapper}>
//         <h3>Editable Total Amount</h3>
//         <input
//           type="number"
//           value={enteredTotalAmount}
//           onChange={handleTotalAmountChange}
//           className={styles.input}
//           placeholder="Edit the total amount (e.g., 500)"
//         />
//       </div>

//       {payments.length > 0 && (
//         <div className={styles.clearButtonWrapper}>
//           <button onClick={handleClear} className={styles.buttonRed}>
//             Clear Payments
//           </button>
//         </div>
//       )}

//       <div className={styles.chartGrid}>
//         <div className={styles.chartCard}>
//           <h3 className={styles.chartTitle}>📊 Bar Chart</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={payments}>
//               <XAxis dataKey="category" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="amount" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div className={styles.chartCard}>
//           <h3 className={styles.chartTitle}>🍩 Pie Chart</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={payments}
//                 dataKey="amount"
//                 nameKey="category"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#82ca9d"
//                 label>
//                 {payments.map((_, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className={styles.totalAmount}>
//         <h3>Total Payments: ${totalAmount}</h3>
//       </div>
//     </div>
//   );
// };

// export default PaymentExpenses;
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./PaymentExpenses.module.css";

interface Payment {
  number: string;
  category: string;
  amount: number;
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a29bfe"];

const PaymentExpenses: React.FC = () => {
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [payments, setPayments] = useState<Payment[]>([]);

  const [paymentLimit, setPaymentLimit] = useState<number>(100); // default per-payment limit
  const [totalAmount, setTotalAmount] = useState<number>(0); // user-entered total
  const [enteredTotalAmount, setEnteredTotalAmount] = useState<number>(0); // editable input value

  // Get total spent so far
  const totalSpent = payments.reduce((sum, p) => sum + p.amount, 0);
  const remainingAmount = totalAmount - totalSpent;

  useEffect(() => {
    const storedPayments = localStorage.getItem("payments");
    if (storedPayments) {
      const parsed = JSON.parse(storedPayments);
      setPayments(parsed);
    }

    const storedTotal = localStorage.getItem("totalAmount");
    if (storedTotal) {
      const parsedTotal = Number(storedTotal);
      setTotalAmount(parsedTotal);
      setEnteredTotalAmount(parsedTotal);
    }
  }, []);

  const handlePay = () => {
    if (!number || !category || amount === "") {
      alert("Please fill out all fields.");
      return;
    }

    const amt = Number(amount);

    if (amt > paymentLimit) {
      alert(
        `❌ Payment must be less than or equal to your limit of $${paymentLimit}`
      );
      return;
    }

    if (amt >= remainingAmount) {
      alert(
        `❌ Payment must be less than the remaining amount of $${remainingAmount}`
      );
      return;
    }

    const newPayment: Payment = { number, category, amount: amt };
    const updatedPayments = [...payments, newPayment];
    setPayments(updatedPayments);
    localStorage.setItem("payments", JSON.stringify(updatedPayments));

    setNumber("");
    setCategory("");
    setAmount("");
  };

  const handleClear = () => {
    setPayments([]);
    localStorage.removeItem("payments");
  };

  const handleTotalAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val < totalSpent) {
      alert("❌ Entered total is less than already spent.");
      return;
    }
    setEnteredTotalAmount(val);
    setTotalAmount(val);
    localStorage.setItem("totalAmount", val.toString());
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>💳 Payment Expenses</h2>

      <div className={styles.formCard}>
        <input
          type="text"
          placeholder="Phone / Reference Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Expense Category (e.g. Food, Rent)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Enter Payment Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Set Per-Payment Limit ($)"
          value={paymentLimit}
          onChange={(e) => setPaymentLimit(Number(e.target.value))}
          className={styles.input}
        />
        <button onClick={handlePay} className={styles.buttonGreen}>
          Pay
        </button>
      </div>

      <div className={styles.editTotalAmountWrapper}>
        <h3 className="text-lg font-semibold mb-2">Set Total Allowed Amount</h3>
        <input
          type="number"
          placeholder="Enter Total Budget"
          value={enteredTotalAmount}
          onChange={handleTotalAmountChange}
          className={styles.input}
        />
      </div>

      {payments.length > 0 && (
        <div className={styles.clearButtonWrapper}>
          <button onClick={handleClear} className={styles.buttonRed}>
            Clear Payments
          </button>
        </div>
      )}

      <div className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>📊 Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={payments}>
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
                data={payments}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label>
                {payments.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={styles.totalAmount}>
        <h3 className="text-xl font-semibold mt-4">
          💰 Total Allowed: ${totalAmount} | Spent: ${totalSpent} | Remaining: $
          {remainingAmount}
        </h3>
      </div>
    </div>
  );
};

export default PaymentExpenses;
