import Image from "next/image";
import Link from "next/link";
import React from "react";
import airquality from "../public/assets/projects/airquality.png"

function Work() {
  return <div className="w-full">
    <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[##1e1a95]">
            Projects
        </p>
        <h2>What I&#39;v Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
               <Image className="rounded-xl group-hover:opacity-10" src={airquality} alt="Airquality image"/>
               <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-widest text-center">
                    Airquality
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React js</p>
                <Link href="/">
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"></p>
                </Link>
                </div> 
            </div>
        </div>
    </div>

  </div>;
}

export default Work;
