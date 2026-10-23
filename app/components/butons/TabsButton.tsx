"use client";
import { WorkoutContext } from "@/app/context/WorkoutProvider";
import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TabsButton = () => {
  const { myPlan, setMyPlan } = useContext(WorkoutContext) as {
    myPlan: boolean;
    setMyPlan: React.Dispatch<React.SetStateAction<boolean>>;
  };
  const handleMyPlan = () => {
    setMyPlan(!myPlan);
  };
  return (
    <div className="flex justify-between">
      <div className="w-fit mt-2">
        <div className="tabs tabs-box rounded-xl p-1">
          <input
            type="radio"
            name="my_plans_tab"
            className="tab font-bold rounded-lg px-4 checked:bg-[#1F242D] checked:border checked:border-[#2B303D] checked:shadow-none"
            aria-label="Today’s Plan"
            onClick={() => handleMyPlan()}
            defaultChecked
          />
          <input
            type="radio"
            name="my_plans_tab"
            className="tab rounded-lg px-9 checked:bg-[#1F242D] checked:border checked:border-[#2B303D] checked:shadow-none"
            aria-label="Saved"
            onClick={() => handleMyPlan()}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div>Sort by: </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 font-bold rounded-[9px] bg-[#13161D] border pl-5 pr-7 border-[#232732] shadow-none "
          >
            Click <IoIosArrowDown />
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu font-bold rounded-[9px] bg-[#13161D] border border-[#232732] pl-5 pr-7 shadow-none "
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Duration</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabsButton;
