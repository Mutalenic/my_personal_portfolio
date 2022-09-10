import Image from "next/image";
import Link from "next/link";
import { useState, React } from "react";
import { CgClose, CgMenu, CgMail } from "react-icons/cg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
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
          <div onClick={handleNav} className="md:hidden">
            <CgMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#C8651B]/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-[#fff0df]"
              : "fixed left-[-100%] top-0 p-10 ease-in duration"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/logo.png"
              alt="logo"
              width="75"
              height="40"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
            >
              <CgClose />
            </div>
          </div>
          <div className="flex flex-col py-10">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4">about</li>
              </Link>
              <Link href="/">
                <li className="py-4">skills</li>
              </Link>
              <Link href="/">
                <li className="py-4">project</li>
              </Link>
              <Link href="/">
                <li className="py-4">contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase trackin-widest text-[#1e1a95]">
                LET&#39;S CONNECT
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80% ]">
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale:100 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale:100 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale:100 ease-in duration-300">
                  <CgMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale:100 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
