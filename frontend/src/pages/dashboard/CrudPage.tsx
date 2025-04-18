// // // import React, { useState, useEffect } from "react";
// // import styles from "./CrudPage.module.css";

// // interface ExpenseItem {
// //   id: number;
// //   category: string;
// //   amount: number;
// //   type: "payment";
// // }

// // const CrudPage: React.FC = () => {
// //   const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
// //   const [category, setCategory] = useState("");
// //   const [amount, setAmount] = useState<number | "">("");
// //   const [editId, setEditId] = useState<number | null>(null);
// //   const [editCategory, setEditCategory] = useState("");
// //   const [editAmount, setEditAmount] = useState<number | "">("");

// //   useEffect(() => {
// //     const payments = JSON.parse(localStorage.getItem("payments") || "[]");
// //     const formattedPayments: ExpenseItem[] = payments.map(
// //       (item: any, index: number) => ({
// //         id: index + 1,
// //         category: item.category,
// //         amount: item.amount,
// //         type: "payment",
// //       })
// //     );
// //     setExpenses(formattedPayments);
// //   }, []);

// //   useEffect(() => {
// //     if (expenses.length > 0) {
// //       localStorage.setItem("payments", JSON.stringify(expenses));
// //     }
// //   }, [expenses]);

// //   const handleAddExpense = () => {
// //     if (!category || amount === "") return;
// //     const newExpense: ExpenseItem = {
// //       id: Date.now(),
// //       category,
// //       amount: Number(amount),
// //       type: "payment",
// //     };
// //     const updated = [...expenses, newExpense];
// //     setExpenses(updated);
// //     localStorage.setItem("payments", JSON.stringify(updated));
// //     setCategory("");
// //     setAmount("");
// //   };

// //   const handleDelete = (id: number) => {
// //     const updated = expenses.filter((item) => item.id !== id);
// //     setExpenses(updated);
// //     localStorage.setItem("payments", JSON.stringify(updated));
// //   };

// //   const handleEdit = (item: ExpenseItem) => {
// //     setEditId(item.id);
// //     setEditCategory(item.category);
// //     setEditAmount(item.amount);
// //   };

// //   const handleUpdate = () => {
// //     const updated = expenses.map((item) =>
// //       item.id === editId
// //         ? { ...item, category: editCategory, amount: Number(editAmount) }
// //         : item
// //     );
// //     setExpenses(updated);
// //     localStorage.setItem("payments", JSON.stringify(updated));
// //     setEditId(null);
// //     setEditCategory("");
// //     setEditAmount("");
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h2 className={styles.title}>💰 Payment Expenses</h2>

// //       <div className={styles.card}>
// //         <div className={styles.grid}>
// //           <input
// //             type="text"
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             placeholder="Enter Category"
// //             className={styles.input}
// //           />
// //           <input
// //             type="number"
// //             value={amount}
// //             onChange={(e) => setAmount(Number(e.target.value))}
// //             placeholder="Enter Amount"
// //             className={styles.input}
// //           />
// //           <button onClick={handleAddExpense} className={styles.button}>
// //             ➕ Add Payment
// //           </button>
// //         </div>
// //       </div>

// //       <div className={styles.card}>
// //         <div className={styles.header}>
// //           <h3 className={styles.sectionTitle}>📋 Payment List</h3>
// //           <span className={`${styles.badge} ${styles.badgePayment}`}>
// //             {expenses.length} Records
// //           </span>
// //         </div>

// //         <table className={styles.table}>
// //           <thead className={styles.thead}>
// //             <tr>
// //               <th className={styles.th}>Category</th>
// //               <th className={styles.th}>Amount (₹)</th>
// //               <th className={styles.th}>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {expenses.map((item) => (
// //               <tr key={item.id}>
// //                 <td className={styles.td}>
// //                   {editId === item.id ? (
// //                     <input
// //                       type="text"
// //                       value={editCategory}
// //                       onChange={(e) => setEditCategory(e.target.value)}
// //                       className={styles.input}
// //                     />
// //                   ) : (
// //                     item.category
// //                   )}
// //                 </td>
// //                 <td className={styles.td}>
// //                   {editId === item.id ? (
// //                     <input
// //                       type="number"
// //                       value={editAmount}
// //                       onChange={(e) => setEditAmount(Number(e.target.value))}
// //                       className={styles.input}
// //                     />
// //                   ) : (
// //                     item.amount
// //                   )}
// //                 </td>
// //                 <td className={`${styles.td} ${styles.actions}`}>
// //                   {editId === item.id ? (
// //                     <button
// //                       onClick={handleUpdate}
// //                       className={`${styles.button} ${styles.saveButton}`}>
// //                       Save
// //                     </button>
// //                   ) : (
// //                     <button
// //                       onClick={() => handleEdit(item)}
// //                       className={`${styles.button} ${styles.editButton}`}>
// //                       Edit
// //                     </button>
// //                   )}
// //                   <button
// //                     onClick={() => handleDelete(item.id)}
// //                     className={`${styles.button} ${styles.deleteButton}`}>
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //             {expenses.length === 0 && (
// //               <tr>
// //                 <td colSpan={3} className={styles.emptyRow}>
// //                   No payment expenses found.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CrudPage;
// import React, { useState, useEffect } from "react";
// import styles from "./CrudPage.module.css";

// interface ExpenseItem {
//   id: number;
//   category: string;
//   amount: number;
//   type: "general" | "payment";
// }

// const CrudPage: React.FC = () => {
//   const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState<number | "">("");
//   const [editId, setEditId] = useState<number | null>(null);
//   const [editCategory, setEditCategory] = useState("");
//   const [editAmount, setEditAmount] = useState<number | "">("");

//   // Load both payment and general expenses
//   useEffect(() => {
//     const payments = JSON.parse(localStorage.getItem("payments") || "[]");
//     const general = JSON.parse(localStorage.getItem("generalExpenses") || "[]");

//     const formattedPayments: ExpenseItem[] = payments.map(
//       (item: any, index: number) => ({
//         id: index + 1,
//         category: item.category,
//         amount: item.amount,
//         type: "payment",
//       })
//     );

//     const formattedGeneral: ExpenseItem[] = general.map(
//       (item: any, index: number) => ({
//         id: formattedPayments.length + index + 1,
//         category: item.category,
//         amount: item.amount,
//         type: "general",
//       })
//     );

//     setExpenses([...formattedPayments, ...formattedGeneral]);
//   }, []);

//   const handleAddExpense = () => {
//     if (!category || amount === "") return;

//     const newExpense: ExpenseItem = {
//       id: expenses.length + 1,
//       category,
//       amount: Number(amount),
//       type: "general",
//     };

//     const updated = [...expenses, newExpense];
//     setExpenses(updated);

//     const updatedGeneral = updated.filter((item) => item.type === "general");
//     localStorage.setItem("generalExpenses", JSON.stringify(updatedGeneral));

//     setCategory("");
//     setAmount("");
//   };

//   const handleDelete = (id: number) => {
//     const updated = expenses.filter((item) => item.id !== id);
//     setExpenses(updated);

//     const updatedPayments = updated.filter((item) => item.type === "payment");
//     const updatedGeneral = updated.filter((item) => item.type === "general");

//     localStorage.setItem("payments", JSON.stringify(updatedPayments));
//     localStorage.setItem("generalExpenses", JSON.stringify(updatedGeneral));
//   };

//   const handleEdit = (item: ExpenseItem) => {
//     setEditId(item.id);
//     setEditCategory(item.category);
//     setEditAmount(item.amount);
//   };

//   const handleUpdate = () => {
//     const updated = expenses.map((item) =>
//       item.id === editId
//         ? { ...item, category: editCategory, amount: Number(editAmount) }
//         : item
//     );
//     setExpenses(updated);

//     const updatedPayments = updated.filter((item) => item.type === "payment");
//     const updatedGeneral = updated.filter((item) => item.type === "general");

//     localStorage.setItem("payments", JSON.stringify(updatedPayments));
//     localStorage.setItem("generalExpenses", JSON.stringify(updatedGeneral));

//     setEditId(null);
//     setEditCategory("");
//     setEditAmount("");
//   };

//   const renderTable = (type: "general" | "payment") => {
//     const filtered = expenses.filter((item) => item.type === type);

//     return (
//       <div className={styles.card}>
//         <div className={styles.header}>
//           <h2 className={styles.title}>
//             {type === "payment" ? "Payment" : "General"} Expenses
//           </h2>
//           <span
//             className={`${styles.badge} ${
//               type === "payment" ? styles.badgePayment : styles.badgeGeneral
//             }`}>
//             {filtered.length} Records
//           </span>
//         </div>

//         <table className={styles.table}>
//           <thead className={styles.thead}>
//             <tr>
//               <th className={styles.th}>Category</th>
//               <th className={styles.th}>Amount (₹)</th>
//               <th className={styles.th}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.map((item) => (
//               <tr key={item.id}>
//                 <td className={styles.td}>
//                   {editId === item.id ? (
//                     <input
//                       type="text"
//                       value={editCategory}
//                       onChange={(e) => setEditCategory(e.target.value)}
//                       className={styles.input}
//                     />
//                   ) : (
//                     item.category
//                   )}
//                 </td>
//                 <td className={styles.td}>
//                   {editId === item.id ? (
//                     <input
//                       type="number"
//                       value={editAmount}
//                       onChange={(e) => setEditAmount(Number(e.target.value))}
//                       className={styles.input}
//                     />
//                   ) : (
//                     item.amount
//                   )}
//                 </td>
//                 <td className={`${styles.td} ${styles.actions}`}>
//                   {editId === item.id ? (
//                     <button
//                       onClick={handleUpdate}
//                       className={`${styles.button} ${styles.saveButton}`}>
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleEdit(item)}
//                       className={`${styles.button} ${styles.editButton}`}>
//                       Edit
//                     </button>
//                   )}
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className={`${styles.button} ${styles.deleteButton}`}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {filtered.length === 0 && (
//               <tr>
//                 <td colSpan={3} className={styles.emptyRow}>
//                   No {type} expenses found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h3 className={styles.title}>Add General Expense</h3>
//         <div className={styles.grid}>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             placeholder="Category"
//             className={styles.input}
//           />
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//             placeholder="Amount"
//             className={styles.input}
//           />
//           <button onClick={handleAddExpense} className={styles.button}>
//             ➕ Add
//           </button>
//         </div>
//       </div>

//       {renderTable("general")}
//       {renderTable("payment")}
//     </div>
//   );
// };

// export default CrudPage;
import React, { useState, useEffect } from "react";
import styles from "./CrudPage.module.css";

interface ExpenseItem {
  id: number;
  category: string;
  amount: number;
  type: "general" | "payment";
}

const CrudPage: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editCategory, setEditCategory] = useState("");
  const [editAmount, setEditAmount] = useState<number | "">("");

  useEffect(() => {
    const payments = JSON.parse(localStorage.getItem("payments") || "[]");
    const general = JSON.parse(localStorage.getItem("generalExpenses") || "[]");

    const formattedPayments: ExpenseItem[] = payments.map(
      (item: any, index: number) => ({
        id: index + 1,
        category: item.category,
        amount: item.amount,
        type: "payment",
      })
    );

    const formattedGeneral: ExpenseItem[] = general.map(
      (item: any, index: number) => ({
        id: formattedPayments.length + index + 1,
        category: item.category,
        amount: item.amount,
        type: "general",
      })
    );

    setExpenses([...formattedPayments, ...formattedGeneral]);
  }, []);

  const handleDelete = (id: number) => {
    const updated = expenses.filter((item) => item.id !== id);
    setExpenses(updated);

    const updatedPayments = updated.filter((item) => item.type === "payment");
    const updatedGeneral = updated.filter((item) => item.type === "general");

    localStorage.setItem("payments", JSON.stringify(updatedPayments));
    localStorage.setItem("generalExpenses", JSON.stringify(updatedGeneral));
  };

  const handleEdit = (item: ExpenseItem) => {
    setEditId(item.id);
    setEditCategory(item.category);
    setEditAmount(item.amount);
  };

  const handleUpdate = () => {
    const updated = expenses.map((item) =>
      item.id === editId
        ? { ...item, category: editCategory, amount: Number(editAmount) }
        : item
    );
    setExpenses(updated);

    const updatedPayments = updated.filter((item) => item.type === "payment");
    const updatedGeneral = updated.filter((item) => item.type === "general");

    localStorage.setItem("payments", JSON.stringify(updatedPayments));
    localStorage.setItem("generalExpenses", JSON.stringify(updatedGeneral));

    setEditId(null);
    setEditCategory("");
    setEditAmount("");
  };

  const renderTable = (type: "general" | "payment") => {
    const filtered = expenses.filter((item) => item.type === type);

    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {type === "payment" ? "Payment" : "General"} Expenses
          </h2>
          <span
            className={`${styles.badge} ${
              type === "payment" ? styles.badgePayment : styles.badgeGeneral
            }`}>
            {filtered.length} Records
          </span>
        </div>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Amount (₹)</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <td className={styles.td}>
                  {editId === item.id ? (
                    <input
                      type="text"
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      className={styles.input}
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td className={styles.td}>
                  {editId === item.id ? (
                    <input
                      type="number"
                      value={editAmount}
                      onChange={(e) => setEditAmount(Number(e.target.value))}
                      className={styles.input}
                    />
                  ) : (
                    item.amount
                  )}
                </td>
                <td className={`${styles.td} ${styles.actions}`}>
                  {editId === item.id ? (
                    <button
                      onClick={handleUpdate}
                      className={`${styles.button} ${styles.saveButton}`}>
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(item)}
                      className={`${styles.button} ${styles.editButton}`}>
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className={`${styles.button} ${styles.deleteButton}`}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className={styles.emptyRow}>
                  No {type} expenses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderTable("general")}
      {renderTable("payment")}
    </div>
  );
};

export default CrudPage;
