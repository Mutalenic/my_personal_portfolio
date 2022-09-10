import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
// import CgMail from "react-icons/cg";


function Hero() {
  return (
    <div className="w-full h-screen text-center flex">
      <div className="max-w-[1240px] w-full h-ful mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="tex-sm tracking-widest text-gray-600">
            Hi, my name is
            <span className="text-[#1e1a95]"> Nicholas Mutale</span>
          </h1>
          <h2>I &#39;m a Full Stack Web Developer</h2>
          <p>
            I'm passionate about designing and developing powerful modern web
            appications.
          </p>

          <div className=" flex items-center justify-center gap-10 max-w[330px] m-auto py-10">
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale:100 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale:100 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale:100 ease-in duration-300">
              <CgMail />
            </div>
            
           
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale:100 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
