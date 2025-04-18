// // // // // import React, { useState } from "react";

// // // // // // Simple component for Login and Registration
// // // // // const Login = () => (
// // // // //   <div id="login">
// // // // //     <h2>Login</h2>
// // // // //     <form>
// // // // //       <input type="email" placeholder="Email" />
// // // // //       <input type="password" placeholder="Password" />
// // // // //       <button type="submit">Login</button>
// // // // //     </form>
// // // // //   </div>
// // // // // );

// // // // // const Register = () => (
// // // // //   <div id="register">
// // // // //     <h2>Register</h2>
// // // // //     <form>
// // // // //       <input type="email" placeholder="Email" />
// // // // //       <input type="password" placeholder="Password" />
// // // // //       <button type="submit">Register</button>
// // // // //     </form>
// // // // //   </div>
// // // // // );

// // // // // const About = () => (
// // // // //   <div id="about">
// // // // //     <h2>About Us</h2>
// // // // //     <p>This is the about section.</p>
// // // // //   </div>
// // // // // );

// // // // // const Contact = () => (
// // // // //   <div id="contact">
// // // // //     <h2>Contact Us</h2>
// // // // //     <p>This is the contact section.</p>
// // // // //   </div>
// // // // // );

// // // // // const Home = () => {
// // // // //   const [currentSection, setCurrentSection] = useState<
// // // // //     "login" | "register" | "about" | "contact"
// // // // //   >("login");

// // // // //   const handleSectionChange = (
// // // // //     section: "login" | "register" | "about" | "contact"
// // // // //   ) => {
// // // // //     setCurrentSection(section);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       {/* Navigation */}
// // // // //       <nav>
// // // // //         <button onClick={() => handleSectionChange("login")}>Login</button>
// // // // //         <button onClick={() => handleSectionChange("register")}>
// // // // //           Register
// // // // //         </button>
// // // // //         <button onClick={() => handleSectionChange("about")}>About</button>
// // // // //         <button onClick={() => handleSectionChange("contact")}>Contact</button>
// // // // //       </nav>

// // // // //       {/* Conditional Rendering of Sections */}
// // // // //       {currentSection === "login" && <Login />}
// // // // //       {currentSection === "register" && <Register />}
// // // // //       {currentSection === "about" && <About />}
// // // // //       {currentSection === "contact" && <Contact />}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;
// // // // import React, { useState } from "react";
// // // // import "./Home.css"; // Importing CSS for the component

// // // // // Simple component for Login and Registration
// // // // const Login = () => (
// // // //   <div id="login" className="section">
// // // //     <h2>Login</h2>
// // // //     <form>
// // // //       <input type="email" placeholder="Email" />
// // // //       <input type="password" placeholder="Password" />
// // // //       <button type="submit">Login</button>
// // // //     </form>
// // // //   </div>
// // // // );

// // // // const Register = () => (
// // // //   <div id="register" className="section">
// // // //     <h2>Register</h2>
// // // //     <form>
// // // //       <input type="email" placeholder="Email" />
// // // //       <input type="password" placeholder="Password" />
// // // //       <button type="submit">Register</button>
// // // //     </form>
// // // //   </div>
// // // // );

// // // // const About = () => (
// // // //   <div id="about" className="section">
// // // //     <h2>About Us</h2>
// // // //     <p>This is the about section.</p>
// // // //   </div>
// // // // );

// // // // const Contact = () => (
// // // //   <div id="contact" className="section">
// // // //     <h2>Contact Us</h2>
// // // //     <p>This is the contact section.</p>
// // // //   </div>
// // // // );

// // // // const Home = () => {
// // // //   const [currentSection, setCurrentSection] = useState<
// // // //     "login" | "register" | "about" | "contact"
// // // //   >("login");

// // // //   const handleSectionChange = (
// // // //     section: "login" | "register" | "about" | "contact"
// // // //   ) => {
// // // //     setCurrentSection(section);
// // // //   };

// // // //   return (
// // // //     <div className="home-container">
// // // //       {/* Navigation */}
// // // //       <nav className="navbar">
// // // //         <button onClick={() => handleSectionChange("login")}>Login</button>
// // // //         <button onClick={() => handleSectionChange("register")}>
// // // //           Register
// // // //         </button>
// // // //         <button onClick={() => handleSectionChange("about")}>About</button>
// // // //         <button onClick={() => handleSectionChange("contact")}>Contact</button>
// // // //       </nav>

// // // //       {/* Conditional Rendering of Sections */}
// // // //       {currentSection === "login" && <Login />}
// // // //       {currentSection === "register" && <Register />}
// // // //       {currentSection === "about" && <About />}
// // // //       {currentSection === "contact" && <Contact />}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;
// // // import React, { useState } from "react";
// // // import "./Home.css";
// // // import financeImage from "../assets/finance-pictures.jpg"; // Adjust path as needed

// // // const Login = () => (
// // //   <div id="login" className="section">
// // //     <h2>Login</h2>
// // //     <form>
// // //       <input type="email" placeholder="Email" />
// // //       <input type="password" placeholder="Password" />
// // //       <button type="submit">Login</button>
// // //     </form>
// // //   </div>
// // // );

// // // const Register = () => (
// // //   <div id="register" className="section">
// // //     <h2>Register</h2>
// // //     <form>
// // //       <input type="email" placeholder="Email" />
// // //       <input type="password" placeholder="Password" />
// // //       <button type="submit">Register</button>
// // //     </form>
// // //   </div>
// // // );

// // // const About = () => (
// // //   <div id="about" className="section">
// // //     <h2>About Us</h2>
// // //     <p>This is the about section.</p>
// // //   </div>
// // // );

// // // const Contact = () => (
// // //   <div id="contact" className="section">
// // //     <h2>Contact Us</h2>
// // //     <p>This is the contact section.</p>
// // //   </div>
// // // );

// // // const Home = () => {
// // //   const [currentSection, setCurrentSection] = useState<string>("");

// // //   return (
// // //     <div className="home-container">
// // //       <nav className="navbar">
// // //         <button onClick={() => setCurrentSection("login")}>Login</button>
// // //         <button onClick={() => setCurrentSection("register")}>Register</button>
// // //         <button onClick={() => setCurrentSection("about")}>About</button>
// // //         <button onClick={() => setCurrentSection("contact")}>Contact</button>
// // //       </nav>

// // //       {/* Default Image if no section selected */}
// // //       {!currentSection && (
// // //         <div className="default-image">
// // //           <img src={financeImage} alt="Finance Tracker" />
// // //           <h2>Welcome to Finance Tracker</h2>
// // //           <p>
// // //             Track your expenses, manage payments, and stay on top of your
// // //             finances.
// // //           </p>
// // //         </div>
// // //       )}

// // //       {currentSection === "login" && <Login />}
// // //       {currentSection === "register" && <Register />}
// // //       {currentSection === "about" && <About />}
// // //       {currentSection === "contact" && <Contact />}
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // import React, { useState } from "react";
// // import "./Home.css";
// // import financeImage from "../assets/wp9223502.webp"; // Make sure image path is correct

// // // Section Components
// // const Login = () => (
// //   <section className="section" id="login">
// //     <h2>Login</h2>
// //     <form>
// //       <input type="email" placeholder="Email" />
// //       <input type="password" placeholder="Password" />
// //       <button type="submit">Login</button>
// //     </form>
// //   </section>
// // );

// // const Register = () => (
// //   <section className="section" id="register">
// //     <h2>Register</h2>
// //     <form>
// //       <input type="email" placeholder="Email" />
// //       <input type="password" placeholder="Password" />
// //       <button type="submit">Register</button>
// //     </form>
// //   </section>
// // );

// // const About = React.forwardRef<HTMLDivElement>((_, ref) => (
// //   <section className="section about-section" id="about" ref={ref}>
// //     <h2>About Us</h2>
// //     <p className="about-intro">
// //       Finance Tracker is your trusted personal finance companion. We are
// //       committed to helping individuals and families take control of their
// //       financial journey with confidence and ease.
// //     </p>

// //     <div className="about-content">
// //       <div className="about-block">
// //         <h4>🚀 Our Mission</h4>
// //         <p>
// //           To empower people to make smarter financial decisions by providing
// //           clear insights into their spending, budgeting, and saving habits.
// //         </p>
// //       </div>
// //       <div className="about-block">
// //         <h4>💡 What We Offer</h4>
// //         <p>
// //           A simple, intuitive platform that helps you manage your money
// //           better—track expenses, set goals, and plan for the future.
// //         </p>
// //       </div>
// //       <div className="about-block">
// //         <h4>🤝 Why Choose Us?</h4>
// //         <p>
// //           We're passionate about financial literacy. Our tools are built with
// //           real users in mind—designed to be easy, effective, and empowering.
// //         </p>
// //       </div>
// //     </div>
// //   </section>
// // ));

// // const Contact = React.forwardRef<HTMLDivElement>((_, ref) => (
// //   <section className="section contact-section" id="contact" ref={ref}>
// //     <h2>Contact Us</h2>
// //     <p className="contact-description">
// //       We'd love to hear from you. Whether you have a question, suggestion, or
// //       need help with your finances, feel free to reach out. Our team is here to
// //       assist you.
// //     </p>

// //     <div className="contact-details">
// //       <div>
// //         <h4>Email:</h4>
// //         <p>support@financetracker.com</p>
// //       </div>
// //       <div>
// //         <h4>Phone:</h4>
// //         <p>+1 (800) 555-0199</p>
// //       </div>
// //       <div>
// //         <h4>Office Hours:</h4>
// //         <p>Mon - Fri: 9:00 AM - 6:00 PM (EST)</p>
// //       </div>
// //     </div>

// //     <form className="contact-form">
// //       <input type="text" placeholder="Your Name" required />
// //       <input type="email" placeholder="Your Email" required />
// //       <textarea rows={5} placeholder="Your Message" required />
// //       <button type="submit">Send Message</button>
// //     </form>
// //   </section>
// // ));

// // // Main Home Component
// // const Home: React.FC = () => {
// //   const [currentSection, setCurrentSection] = useState<string>("");

// //   return (
// //     <div className="home-container">
// //       <nav className="navbar">
// //         <button onClick={() => setCurrentSection("login")}>Login</button>
// //         <button onClick={() => setCurrentSection("register")}>Register</button>
// //         <button onClick={() => setCurrentSection("about")}>About</button>
// //         <button onClick={() => setCurrentSection("contact")}>Contact</button>
// //       </nav>

// //       {/* Default Hero Image Section */}
// //       {!currentSection && (
// //         <div className="default-image">
// //           <img src={financeImage} alt="Finance Tracker" />
// //           <div className="overlay">
// //             <h2>Welcome to Finance Tracker</h2>
// //             <p>
// //               Track your expenses, manage payments, and stay in control of your
// //               financial future.
// //             </p>
// //           </div>
// //         </div>
// //       )}

// //       {/* Conditional Section Rendering */}
// //       {currentSection === "login" && <Login />}
// //       {currentSection === "register" && <Register />}
// //       {currentSection === "about" && <About />}
// //       {currentSection === "contact" && <Contact />}
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";
// import financeImage from "../assets/wp9223502.webp";

// // About Section
// const About = React.forwardRef<HTMLDivElement>((_, ref) => (
//   <section className="section about-section" id="about" ref={ref}>
//     <h2>About Us</h2>
//     <p className="about-intro">
//       Finance Tracker is your trusted personal finance companion. We help
//       individuals and families take control of their financial journey with
//       confidence and ease.
//     </p>
//     <div className="about-content">
//       <div className="about-block">
//         <h4>🚀 Our Mission</h4>
//         <p>
//           Empower people to make smarter financial decisions by providing clear
//           insights into spending, budgeting, and saving habits.
//         </p>
//       </div>
//       <div className="about-block">
//         <h4>💡 What We Offer</h4>
//         <p>
//           A simple, intuitive platform that helps you manage your money
//           better—track expenses, set goals, and plan for the future.
//         </p>
//       </div>
//       <div className="about-block">
//         <h4>🤝 Why Choose Us?</h4>
//         <p>
//           We're passionate about financial literacy. Our tools are built for
//           real users— designed to be easy, effective, and empowering.
//         </p>
//       </div>
//     </div>
//   </section>
// ));

// // Contact Section
// const Contact = React.forwardRef<HTMLDivElement>((_, ref) => (
//   <section className="section contact-section" id="contact" ref={ref}>
//     <h2>Contact Us</h2>
//     <p className="contact-description">
//       We'd love to hear from you! Have a question, suggestion, or need help? Our
//       team is here to assist.
//     </p>
//     <div className="contact-details">
//       <div>
//         <h4>Email:</h4>
//         <p>support@financetracker.com</p>
//       </div>
//       <div>
//         <h4>Phone:</h4>
//         <p>+1 (800) 555-0199</p>
//       </div>
//       <div>
//         <h4>Office Hours:</h4>
//         <p>Mon - Fri: 9:00 AM - 6:00 PM (EST)</p>
//       </div>
//     </div>

//     <form className="contact-form">
//       <input type="text" placeholder="Your Name" required />
//       <input type="email" placeholder="Your Email" required />
//       <textarea rows={5} placeholder="Your Message" required />
//       <button type="submit">Send Message</button>
//     </form>
//   </section>
// ));

// // Main Home Component
// const Home: React.FC = () => {
//   const [currentSection, setCurrentSection] = useState<string>("home");
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <nav className="navbar">
//         <button onClick={() => navigate("/login")}>Login</button>
//         <button onClick={() => navigate("/register")}>Register</button>
//         <button onClick={() => setCurrentSection("about")}>About</button>
//         <button onClick={() => setCurrentSection("contact")}>Contact</button>
//       </nav>

//       {/* Hero Image Section */}
//       {currentSection === "home" && (
//         <div className="default-image">
//           <img src={financeImage} alt="Finance Tracker" />
//           <div className="overlay">
//             <h2>Welcome to Finance Tracker</h2>
//             <p>
//               Track your expenses, manage payments, and stay in control of your
//               financial future.
//             </p>
//           </div>
//         </div>
//       )}

//       {currentSection === "about" && <About />}
//       {currentSection === "contact" && <Contact />}
//     </div>
//   );
// };

// export default Home;
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import financeImage from "../assets/wp9223502.webp";

// About Section
const About = React.forwardRef<HTMLDivElement>((_, ref) => (
  <section className="section about-section" ref={ref} id="about">
    <h2>About Us</h2>
    <p className="about-intro">
      Finance Tracker is your trusted personal finance companion...
    </p>
    <div className="about-content">
      <div className="about-block">
        <h4>🚀 Our Mission</h4>
        <p>Empower smarter financial decisions with clear spending insights.</p>
      </div>
      <div className="about-block">
        <h4>💡 What We Offer</h4>
        <p>
          A simple, intuitive platform for managing money—track, save, plan.
        </p>
      </div>
      <div className="about-block">
        <h4>🤝 Why Choose Us?</h4>
        <p>
          We prioritize ease, education, and real results in personal finance.
        </p>
      </div>
    </div>
  </section>
));

// Contact Section
const Contact = React.forwardRef<HTMLDivElement>((_, ref) => (
  <section className="section contact-section" ref={ref} id="contact">
    <h2>Contact Us</h2>
    <p className="contact-description">
      We'd love to hear from you! Questions? Suggestions? Reach out!
    </p>
    <div className="contact-details">
      <div>
        <h4>Email:</h4>
        <p>support@financetracker.com</p>
      </div>
      <div>
        <h4>Phone:</h4>
        <p>+1 (800) 555-0199</p>
      </div>
      <div>
        <h4>Office Hours:</h4>
        <p>Mon - Fri: 9:00 AM - 6:00 PM (EST)</p>
      </div>
    </div>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows={5} placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  </section>
));

// Home Component
const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      {/* Hero Section */}
      <div className="default-image">
        <img src={financeImage} alt="Finance Tracker" />
        <div className="overlay">
          <h2>Welcome to Finance Tracker</h2>
          <p>
            Track expenses, manage payments, and take charge of your future.
          </p>
        </div>
      </div>

      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Home;
