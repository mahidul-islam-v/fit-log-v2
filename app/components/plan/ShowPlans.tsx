"use client"

import { oswald } from '@/app/fonts';
import React, { useContext } from 'react';
import PlanCard from './PlanCard';
import { WorkoutContext } from '@/app/context/WorkoutProvider';
import Iworkout from '../interface/wokrout';
import Link from 'next/link';

const ShowPlans = () => {
  const { plans, saved, myPlan } = useContext(WorkoutContext) as {
    plans: Iworkout[],
    saved: Iworkout[],
    myPlan: boolean,
  };

  if (myPlan && plans.length==0) {
    return (
      <div className="text-center rounded-xl py-27 border border-dashed border-[#ffffff18]">
        <h2 className={`${oswald.className} text-xl tracking-[0.7px]`}>
          NOTHING HERE YET
        </h2>
        <p className="text-[#a1a1aa] text-xs mb-6">
          Browse the library and add a lift to get today moving.
        </p>
        <Link href="/">
          <button className="btn btn- bg-main w-fit tracking-[-0.3px] px-6 text-black rounded-full">
            Go to workouts
          </button>
        </Link>
      </div>
    );
  } else if (!myPlan && saved.length == 0) {return (
    <div className="text-center rounded-xl py-27 border border-dashed border-[#ffffff18]">
      <h2 className={`${oswald.className} text-xl tracking-[0.7px]`}>
        NOTHING HERE YET
      </h2>
      <p className="text-[#a1a1aa] text-xs mb-6">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/">
        <button className="btn btn- bg-main w-fit tracking-[-0.3px] px-6 text-black rounded-full">
          Go to workouts
        </button>
      </Link>
    </div>
  );
  } else {
    return (
      <>
        <div className="flex flex-col gap-4">
          {myPlan
            ? plans.map((plan: Iworkout) => (
                <PlanCard key={plan.id} plan={plan}></PlanCard>
              ))
            : saved.map((plan: Iworkout) => (
                <PlanCard key={plan.id} plan={plan}></PlanCard>
              ))}
        </div>
      </>
    );
  }
};

export default ShowPlans;