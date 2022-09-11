import Image from "next/image";
import React from 'react';
import airqualityImg from "../public/assets/projects/airquality.png"

function airquality() {
  return (
    <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
            <Image className="absolute z-1" layout="fill" objectFit="cover" src={airqualityImg} alt="airquality image" />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h2>Airquality</h2>
                <h3>React JS/ CSS</h3>
            </div>
            </div>
        </div>
  )
}

export default airquality;