"use client"
import { WorkoutContext } from '@/app/context/WorkoutProvider';
import { oswald } from '@/app/fonts';
import React, { useContext } from 'react';
import Iworkout from '../interface/wokrout';

const StatsCarrd = () => {
  const { plans } = useContext(WorkoutContext) as {
      plans: Iworkout[]
  };
  
  return (
    <div>
      <div className="flex divide-x divide-green-800 text-xs text-yet-another-text grow justify-between rounded-2xl bg-[#13161D] border border-[#232732] p-6 pt-8">
        <div className="w-full pr-8 mb-1">
          <h6>Exercies</h6>
          <p className={`${oswald.className} text-4xl font-bold text-main`}>
            {plans.length}
          </p>
        </div>
        <div className="w-full pl-8 mb-1">
          <h6>Minutes</h6>
          <p className={`${oswald.className} text-4xl font-bold text-white`}>
            {plans.reduce((acc, cur) => acc + cur.duration, 0)}
          </p>
        </div>
        <div className="w-full pl-8 mb-1">
          <h6>Calories</h6>
          <p className={`${oswald.className} text-4xl font-bold text-white`}>
            {plans.reduce((acc, cur) => acc + cur.caloriesBurned, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCarrd;