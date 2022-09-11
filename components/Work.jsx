import Image from "next/image";
import Link from "next/link";
import React from "react";
import WorkItem from "./WorkItem";

function Work() {
  return <div className="w-full">
    <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[##1e1a95]">
            Projects
        </p>
        <h2>What I&#39;v Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <WorkItem/>
        </div>
    </div>

  </div>;
}

export default Work;
