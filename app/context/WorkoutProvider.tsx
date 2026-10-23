"use client"
import { ReactNode, useState, createContext } from "react";
import { ToastContainer } from "react-toastify";

export const WorkoutContext = createContext({});

const WokroutProvider = ({ children }: {children: ReactNode}) => {
  const [plans, setPlans] = useState([]);
  const [saved, setSaved] = useState([]);
  const [myPlan, setMyPlan] = useState(true)
  const sharedData = {
    plans,
    setPlans,
    saved,
    setSaved,
    myPlan,
    setMyPlan
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
      <ToastContainer />
    </WorkoutContext.Provider>
  );
};

export default WokroutProvider;
