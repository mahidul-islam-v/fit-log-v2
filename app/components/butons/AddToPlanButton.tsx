"use client"

import { WorkoutContext } from "@/app/context/WorkoutProvider";
import React, { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import Iworkout from "../interface/wokrout";
import { Bounce, toast } from "react-toastify";

const AddToPlanButton = ({workout}:{workout:Iworkout}) => {
  const { plans, setPlans } = useContext(WorkoutContext) as {
      plans: Iworkout[];
      setPlans: React.Dispatch<React.SetStateAction<Iworkout[]>>;
    };

  const handleAddToPlans = () => {
    if (!plans.includes(workout)) {
      setPlans([...plans, workout]);
      toast.success("Workout added to today's plan", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Cannot add more workout", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div>
      <button
        onClick={() => handleAddToPlans()}
        className="btn bg-main w-fit tracking-[0.3px] text-black rounded-xl mr-4 px-6 flex gap-2 font-semibold text-sm"
      >
        <LuCalendarPlus2 />
        Add to today&apos;s calendar
      </button>
    </div>
  );
};

export default AddToPlanButton;
