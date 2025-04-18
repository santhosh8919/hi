import React from "react";
import About from "./About";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-blue-800">
            BANK TEMPLATE
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            commodo, nunc et egestas fermentum.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            MORE INFO
          </button>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">About Us</h2>
          <About />
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Contact Us</h2>
          <Contact />
        </div>
      </section>
      // Add this to a Navbar component or inside Home.tsx
      <nav className="flex justify-center space-x-6 py-4 bg-white shadow">
        <a href="#about" className="text-blue-700 hover:text-blue-900">
          About
        </a>
        <a href="#contact" className="text-blue-700 hover:text-blue-900">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Home;
