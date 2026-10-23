"use client";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import Iworkout from "../interface/wokrout";
import { WorkoutContext } from "@/app/context/WorkoutProvider";
import { Bounce, toast } from "react-toastify";

const RemovePlanCardButton = ({ workout }: { workout: Iworkout }) => {
  const { plans, setPlans, saved, setSaved, myPlan } = useContext(
    WorkoutContext,
  ) as {
    plans: Iworkout[];
    setPlans: React.Dispatch<React.SetStateAction<Iworkout[]>>;
    saved: Iworkout[];
    setSaved: React.Dispatch<React.SetStateAction<Iworkout[]>>;
    myPlan: boolean;
  };
  const handleRemovePlan = () => {
    if (myPlan) {
      setPlans(plans.filter((plan: Iworkout) => plan.id != workout.id));
      toast.info("Removed", {
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
      setSaved(saved.filter((plan: Iworkout) => plan.id != workout.id));
      toast.info("Removed", {
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
        onClick={() => handleRemovePlan()}
        className="btn btn-circle h-6 w-6 shadow-none bg-transparent"
      >
        <RxCross2 className="text-[#6b7280]" />
      </button>
    </div>
  );
};

export default RemovePlanCardButton;
