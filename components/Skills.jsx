import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#1e1a95]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/html.png"
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3></div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/css.png"
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3></div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/javascript.png"
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3></div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/react.png"
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3></div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/ruby.png"
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>RUBY</h3></div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/rails.png"
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>RUBY ON RAILS</h3></div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/redux.png"
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REDUX</h3></div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/tailwind.png"
                  width="64px"
                  height="64px"
                  alt="html icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWINDCSS</h3></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
