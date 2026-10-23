import Image from "next/image";
import React from "react";
import cat from "@/assets/images.jpg";
import { oswald } from "../../fonts";
import { FaRegClock } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import Iworkout from "../interface/wokrout";

const GridCard = ({ workout }: { workout: Iworkout }) => {
  return (
    <div className="card bg-bg-light shadow-sm rounded-2xl min-w-[25%]">
      <figure className=" relative">
        <Image
          src={cat}
          alt="Bodybuilder"
          className="object-cover object-top w-full 2xl:max-h-100 xl:max-h-80 lg:max-h-64 md:max-h-46 sm:max-h-38 max-h-36"
        ></Image>
      </figure>
      <div className="card-body p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 mb-2">
            {workout.muscleGroups.map((muscle) => (
              <div
                key={muscle}
                className="text-black tracking-[0.55px] rounded-full bg-main text-bg-default px-2 font-bold text-[11px]"
              >
                {muscle}
              </div>
            ))}
          </div>

          <h3
            className={`${oswald.className} tracking-[0.45px] text-lg font-bold`}
          >
            {workout.name}
          </h3>

          <p className="text-extra-light-text text-xs">{workout.equipment}</p>
        </div>

        <div className="pt-3 flex gap-4 border-t border-[#20242E] text-extra-light-text text-xs">
          <div>
            <FaRegClock className="inline mr-1.5" />
            {workout.duration} min
          </div>

          <div>
            <FaFireAlt className="inline mr-1.5" />
            {workout.caloriesBurned} cal
          </div>

          <div>
            <IoIosStarOutline className="inline mr-1.5" />
            {workout.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
