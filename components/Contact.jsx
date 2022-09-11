import Image from 'next/image';
import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
            <p className="text-xl tracking-widest uppercase text-[#0f07fb]">
              Contact
            </p>
            <h2 className="py-4">
              Get In Touch
              </h2>
            <div className="grid lg:grid-cols-5 gap-8">
              {/* left */}
              <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                <div className="lg:p-4 h-full">
                  
                  <div>
                    <Image className="rounded-xl hover:scale-105 ease-in duration-300" src="/../public/assets/getintouch.jpg" alt="get in touch" width="430%" height="300%"/>
                  </div>
                  <div>
                    <h2 className="py-2">
                      Nicholas Mutale
                      </h2>
                      <p>Full Stack Developer</p>
                      <p>
                        I am available for freelance or full-time positions. Contact me and let&#39;s talk.
                      </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
              </div>
              <div className="flex items-center justify-between">
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <CgMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
              </div>

            </div>
        </div>
    </div>
  );
};
