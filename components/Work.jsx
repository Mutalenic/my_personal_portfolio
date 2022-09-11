import Image from "next/image";
import Link from "next/link";
import React from "react";
import WorkItem from "./WorkItem";
import moviespace from "../public/assets/projects/moviespace2.png";
import spcetravellers from "../public/assets/projects/SpaceTravellerHub.png";
import digiBudgetApp from "../public/assets/projects/DigiApp.png"
import airquality from "../public/assets/projects/airquality.png";

function Work() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[##1e1a95]">
          Projects
        </p>
        <h2>What I&#39;v Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <WorkItem
            title="Airquality"
            backgroundImg={airquality}
            projectUrl="/"
          />
           <WorkItem
            title="Airquality"
            backgroundImg={digiBudgetApp}
            projectUrl="/"
          />
           <WorkItem
            title="Airquality"
            backgroundImg={moviespace}
            projectUrl="/"
          />
           <WorkItem
            title="Airquality"
            backgroundImg={spcetravellers}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
