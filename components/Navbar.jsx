import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                    <li className="ml-10 text-sm text-white uppercase hover:border-b">Home</li>
                </Link>
                <Link href="/">
                    <li className="ml-10 text-sm text-white uppercase hover:border-b">about</li>
                </Link>
                <Link href="/">
                    <li className="ml-10 text-sm text-white uppercase hover:border-b">skills</li>
                </Link>
                <Link href="/">
                    <li className="ml-10 text-sm text-white uppercase hover:border-b">project</li>
                </Link>
                <Link href="/">
                    <li className="ml-10 text-sm text-white uppercase hover:border-b">contact</li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
