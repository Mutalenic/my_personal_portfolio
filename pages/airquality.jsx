import Image from "next/image";
import React from "react";
import {RiRadioButtonFill} from "react-icons/ri";
import airqualityImg from "../public/assets/projects/airquality.png";

function airquality() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={airqualityImg}
          alt="airquality image"
        />
        <div className=" text-white z-10 p-2 absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Air Quality</h2>
          <h3>React JS/ CSS/ redux</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
            <p>Project</p>
            <h3>Overview</h3>
            <p>
            This is an app for tracking air pollution in a country .In this web app you will be able to see what the current air quality data is and also can track the data of air pollution based on gas percentage of air


            </p>
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
                <p className="text-center font-bold pb-2">Technologies</p>
                <div>
                    <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="p-1"/> React
                    </p>
                    <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="p-1"/> JavaScript
                    </p>
                    <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="p-1"/> CSS
                    </p>
                    <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="p-1"/> Redux
                    </p>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
}

export default airquality;
