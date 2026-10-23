import React, { Suspense } from "react";
import GridCard from "./GridCard";
import Link from "next/link";
import Iworkout from "../interface/wokrout";


const GridOfCards = async () => {
  const data = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workouts = await data.json();

  return (
    <div className="min-h-100">
      <Suspense fallback="..Loading">
        <div className="grid grid-cols-3 gap-6">
          {workouts.map((workout: Iworkout) => (
            <Link key={workout.id} href={`/workout/${workout.id}`}>
              <GridCard workout={workout}></GridCard>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default GridOfCards;
