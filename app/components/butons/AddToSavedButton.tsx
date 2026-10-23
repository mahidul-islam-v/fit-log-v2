"use client";

import { WorkoutContext } from "@/app/context/WorkoutProvider";
import React, { useContext } from "react";
import Iworkout from "../interface/wokrout";
import { FaRegBookmark } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const AddToSavedButton = ({ workout }: { workout: Iworkout }) => {
  const { saved, setSaved } = useContext(WorkoutContext) as {
    saved: Iworkout[];
    setSaved: React.Dispatch<React.SetStateAction<Iworkout[]>>;
  };

  const handleAddToSaved = () => {
    if (!saved.includes(workout)) {
      setSaved([...saved, workout]);
      toast.success("Workout saved", {
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
      toast.error("Cannot add more workouts", {
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
    <button
      onClick={handleAddToSaved}
      className="btn btn-neutral btn-outline w-fit tracking-[0.3px] text-unlight-txt px-6 rounded-xl flex gap-2 text-sm font-medium"
    >
      <FaRegBookmark />
      Save for later
    </button>
  );
};

export default AddToSavedButton;
