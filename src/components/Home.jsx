import React from "react";
import profile_img from '../assets/profile_img.png'
import "../index.css";


const Home = () => {
  return (
   
    <div id="home" className="home flex flex-col items-center gap-5 h-screen scroll-mt-25 pt-10">
      <div className="absolute bottom-10 left-10 w-0 h-0
                   border-l-[40px] border-r-[40px] border-b-[70px]
                   border-l-transparent border-r-transparent border-b-pink-400 opacity-40 float-updown">
      </div>

      <div className="absolute top-16 left-20 w-26 h-26 bg-blue-400 opacity-30 rounded-full float-pulse"></div>

      <div className="absolute bottom-20 right-20 w-14 h-14 bg-green-400 opacity-30 float-leftright"></div>

      <div className="absolute top-10 right-16 w-20 h-20 bg-yellow-400 opacity-30 float-rotate"
        style={{ clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)" }}>
      </div>
      <img className="h-65 mt-15" src={profile_img} alt="" />
      <h1 className="text-center font-bold text-6xl w-[60%]"><span className="text-brand-gradient">I am Vishwas Bisht,</span>React Developer based in India</h1>
      <p className="w-[35%] text-center "> I am a reactjs devloper from chandigarh, India and
        this is my portfolio website that you can visit and Interact with me on projects </p>
      <div className="home-action flex gap-3 items-center">
        <div className="connect text-white px-5 py-2 rounded-full cursor-pointer hover:scale-105 translate-3 border-2 border-white">
          Connect with me
        </div>
        <div className="resume text-white px-5 py-2 rounded-full cursor-pointer hover:scale-105 translate-3 border-2 border-white">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Home;
