// function About() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
//       <h2 className="text-3xl font-semibold mb-4">About Finance Tracker</h2>
//       <p className="text-gray-700 text-center max-w-xl">
//         Finance Tracker helps you track your expenses and payments effectively.
//         Gain insights into your spending patterns with charts and analytics.
//       </p>
//     </div>
//   );
// }

// export default About;
import React from "react";

const About: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">About Finance Tracker</h2>
      <p className="text-gray-700 max-w-2xl">
        Finance Tracker helps you track your income, expenses, and analyze your
        spending habits. Built using React, Vite, MongoDB, and Node.js for
        full-stack performance.
      </p>
    </div>
  );
};

export default About;
