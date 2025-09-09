import React from "react";
import { FileText, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      // Replaced bg-global-gradient for consistency, increased pt for spacing below navbar
      className="contact-section bg-gray-900 text-white min-h-screen pt-24 scroll-mt-24"
    >
      <div className="heading flex items-center justify-center gap-2 mb-12">
        <h1 className="text-6xl ">
          Contact <span className="text-brand-gradient "> Me</span> {/* Replaced text-brand-gradient */}
        </h1>
        <FileText className="w-12 h-12 text-pink-400" /> {/* Added text-pink-400 for icon */}
      </div>

      <div className="contact-container max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 px-4">
        <div className="ab w-full lg:w-1/2 xl:w-2/5 max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-pink-400"> Let's Talk</span> {/* Added text-pink-400 */}
          </h1>

          <p className="max-w-[50ch] text-gray-300 leading-relaxed mb-8">
            This side Vishwas Bisht and I am fully available to work on any kind
            of project related to Frontend in React, HTML, CSS, JavaScript.
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

        {/* Form container: Moved up by 20px on large screens */}
        {/* Its height is determined by its children's content and does not stretch. */}
        <div className="form-cont w-full lg:w-1/2 xl:w-3/5 p-8 bg-gray-800 rounded-lg shadow-xl lg:-mt-5">
          <form className="flex flex-col gap-4" action="" method="POST">
            <label htmlFor="name" className="text-lg font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              placeholder="Enter your Name"
              className="p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            />

            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              className="p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            />

            <label
              htmlFor="message"
              className="text-lg font-medium text-gray-300"
            >
              Write your message here
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white resize-y"
            ></textarea>

            <button
              type="submit"
              // Replaced hover:bg-brand-gradient
              className="contact-submit border-2 border-white rounded-full hover:bg-pink-600 text-white font-bold py-3 px-6 transition duration-300 ease-in-out self-end mt-4 hover:scale-105 "
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
