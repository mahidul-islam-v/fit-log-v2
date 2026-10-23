import React from 'react';
import cat from "@/assets/images.jpg"
import Image from 'next/image';
import { FaFireAlt } from 'react-icons/fa';
import { IoIosStarOutline } from 'react-icons/io';
import { oswald } from '@/app/fonts';
import Iworkout from '../interface/wokrout';
import Link from 'next/link';
import MarkAsDoneButton from '../butons/MarkAsDoneButton';
import { FaRegClock } from 'react-icons/fa6';
import RemovePlanCardButton from '../butons/RemovePlanCardButton';

const PlanCard = ({ plan }: { plan: Iworkout }) => {
  return (
    <div className="rounded-2xl p-4 bg-another-bg flex justify-between">
      <div className="flex gap-4 items-center relative">
        <Image
          src={cat}
          alt="Body Builder"
          className="relative t-0 object-cover object-top w-30 h-20 rounded-xl"
        ></Image>
        <div className="whitespace-nowrap flex flex-col">
          <h4
            className={`tracking-[0.4px] text-base font-bold ${oswald.className}`}
          >
            {plan.name}
          </h4>
          <p className="text-xs font-semibold text-yet-another-text">
            {plan.equipment}
          </p>
          <div className="flex gap-3 mt-1.5 text-extra-light-text text-xs">
            <div className="text-xs text-light-text">
              <FaRegClock className="inline mr-1.5 text-main" />
              {plan.duration} min
            </div>

            <div className="text-xs text-light-text">
              <FaFireAlt className="inline mr-1.5 text-main" />
              {plan.caloriesBurned} cal
            </div>

            <div className="text-xs text-light-text">
              <IoIosStarOutline className="inline mr-1.5 text-main" />
              {plan.rating}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-">
        <Link href={`/workout/${plan.id}`}>
          <button className="btn shadow-none bg-another-bg hover:bg-default text-xs px-4.5 rounded-full border border-[#374151]">
            View Details
          </button>
        </Link>

        <MarkAsDoneButton></MarkAsDoneButton>

        <RemovePlanCardButton workout={plan}></RemovePlanCardButton>
      </div>
    </div>
  );
};

export default PlanCard;