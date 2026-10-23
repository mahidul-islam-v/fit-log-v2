"use client"
import { WorkoutContext } from "@/app/context/WorkoutProvider";
import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const MarkAsDoneButton = () => {
  const { myPlan } = useContext(WorkoutContext) as { myPlan: boolean };
  const [done, setDone] = useState(false);
  const handleMarkAsDone = () => {
      setDone(true);
      toast.warning("Keep it going!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        icon: <span>💪</span>
      });
    };
    const disabledClass =
      "bg-transparent opacity-40 border-[#ccc] text-white font-normal";

    if (!myPlan) {
      return <></>
    } else {
      return (
        <div>
          <button
            disabled={done}
            onClick={() => handleMarkAsDone()}
            className={`btn bg-main text-black text-xs rounded-full font-semibold flex items-center ${!done ? "" : disabledClass}`}
          >
            <FaCheck />
            Mark As Done
          </button>
        </div>
      );
    }
  };

export default MarkAsDoneButton;