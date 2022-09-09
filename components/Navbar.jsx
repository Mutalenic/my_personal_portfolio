import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgClose, CgMenu } from "react-icons/cg";

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between item-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo.png"
          alt="Logo"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text- uppercase hover:border-b ">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text- uppercase hover:border-b">about</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text- uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text- uppercase hover:border-b">project</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text- uppercase hover:border-b">contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <CgMenu size={25} />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-[#C8651B]/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-[#fff0df]">
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/logo.png"
              alt="logo"
              width="75"
              height="40"
            />
            <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer">
                <CgClose/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
