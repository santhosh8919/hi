// src/pages/AboutContact.tsx
import React from "react";

const AboutContact: React.FC = () => {
  return (
    <div className="p-8 space-y-10 max-w-3xl mx-auto text-gray-800 dark:text-white">
      <section>
        <h2 className="text-2xl font-bold mb-4">📘 About Us</h2>
        <p>
          Welcome to Finance Tracker! Our mission is to help you manage your
          expenses and take control of your financial goals with a clean and
          intuitive platform.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">📞 Contact Us</h2>
        <p>
          Have questions or feedback? Feel free to reach out:
          <br />
          Email: support@financetracker.com
          <br />
          Phone: +91-9876543210
        </p>
      </section>
    </div>
  );
};

export default AboutContact;
