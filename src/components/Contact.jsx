import React, { useRef } from "react";
import { FileText, Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Reference to the form element
  const form = useRef();

  // Handles the form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs
      .sendForm(
        "service_9i6g857",     // 🔹 Replace with your actual EmailJS service ID
        "template_18mcbph",    // 🔹 Replace with your EmailJS template ID
        form.current,
        "NRzefw1X0p-IbEg09",     // 🔹 Replace with your EmailJS public key
        {
          time: new Date().toLocaleString(), // matches {{time}} in your template
        }
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("✅ Message sent successfully!");
          e.target.reset(); // clear form after submit
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="contact-section bg-gray-900 text-white min-h-screen pt-24 scroll-mt-24"
    >
      <div className="heading flex items-center justify-center gap-2 mb-12">
        <h1 className="text-6xl">
          Contact <span className="text-pink-400">Me</span>
        </h1>
        <FileText className="w-12 h-12 text-pink-400" />
      </div>

      <div className="contact-container max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 px-4">
        <div className="ab w-full lg:w-1/2 xl:w-2/5 max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-pink-400">Let's Talk</span>
          </h1>

          <p className="max-w-[50ch] text-gray-300 leading-relaxed mb-8">
            Hi, I'm Vishwas Bisht — available to collaborate on any frontend project involving React, HTML, CSS, and JavaScript.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <Phone className="w-6 h-6 text-pink-400" />
            <span className="text-lg">+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <Mail className="w-6 h-6 text-pink-400" />
            <span className="text-lg">example@email.com</span>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <MapPin className="w-6 h-6 text-pink-400" />
            <span className="text-lg">Dehradun, Uttarakhand</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form-cont w-full lg:w-1/2 xl:w-3/5 p-8 bg-gray-800 rounded-lg shadow-xl lg:-mt-5">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <label htmlFor="from_name" className="text-lg font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Enter your name"
              required
              className="p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            />

            <label htmlFor="from_email" className="text-lg font-medium text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Enter your email"
              required
              className="p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            />

            <label htmlFor="message" className="text-lg font-medium text-gray-300">
              Write your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
              className="p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white resize-y"
            ></textarea>

            <button
              type="submit"
              className="contact-submit border-2 border-white rounded-full hover:bg-pink-600 text-white font-bold py-3 px-6 transition duration-300 ease-in-out self-end mt-4 hover:scale-105"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
