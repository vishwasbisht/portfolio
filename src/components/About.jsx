import React from "react";
import about_svg from "../assets/about_profile.jpg";
import { User } from "lucide-react";
import "../index.css";

const About = () => {
  return (
    // Added scroll-mt-22 to prevent content from being hidden by the fixed navbar
    <div id="about" className="about-me w-full bg-global-gradient  pt-20 scroll-mt-22">
      <div className="container mx-auto">
        <div className="heading flex text-center gap-1 items-center justify-center">
          <h1 className="text-6xl ">
            {" "}
            About<span className="text-brand-gradient"> me </span>
          </h1>
          <User className="w-12 h-15 text-pink-400 hover:text-white" />
        </div>
        <div className="about-container flex gap-20 justify-center items-center mt-12">
          <div className="image">
            <img className="h-110 rounded-md" src={about_svg} alt="" />
          </div>
          <div className="content h-110 w-1/2">
            <h1 className="text-5xl font-semibold">who am i?</h1>
            <p className="font-semibold mt-2">
              {" "}
              Hi this side Vishwas, I am a web frontend developer in reactjs. I
              also have skills in web scrapping and web automation. I am a
              dedicated person towards my goals and objectives and I am eager to
              learn new skills.
            </p>
            <div className="mt-10 text-2xl space-y-4">
              <div className="flex items-center gap-4">
                <p className="w-32">HTML & CSS</p>
                <hr className="w-[40%] border-2 border-pink-500 rounded" />
              </div>

              <div className="flex items-center gap-4">
                <p className="w-32">Python</p>
                <hr className="w-[60%] border-2 border-blue-500 rounded" />
              </div>

              <div className="flex items-center gap-4">
                <p className="w-32">JavaScript</p>
                <hr className="w-[75%] border-2 border-yellow-500 rounded" />
              </div>

              <div className="flex items-center gap-4">
                <p className="w-32">React</p>
                <hr className="w-[50%] border-2 border-cyan-500 rounded" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-footer flex items-center mt-12 justify-around">
          {/* 1st Achievement */}
          <div className="about-achivement text-2xl flex items-center gap-4">
            <h1 className="text-4xl font-bold text-brand-gradient">10+</h1>
            <div className="flex items-center gap-4">
              <p>experience</p>
              <hr className="w-px h-12 bg-gray-400 border-0" />
            </div>
          </div>

          {/* 2nd Achievement */}
          <div className="about-achivement text-2xl flex items-center gap-4">
            <h1 className="text-4xl font-bold text-brand-gradient">15+</h1>
            <div className="flex items-center gap-4">
              <p>projects</p>
              <hr className="w-px h-12 bg-gray-400 border-0" />
            </div>
          </div>

          {/* 3rd Achievement */}
          <div className="about-achivement text-2xl flex items-center gap-4">
            <h1 className="text-4xl font-bold text-brand-gradient">10+</h1>
            <div className="flex items-center gap-4">
              <p>happy clients</p>
              <hr className="w-px h-12 bg-gray-400 border-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
