import Image from "next/image";
import cat from "@/assets/images.jpg";
import { oswald } from "@/app/fonts";
import { Suspense } from "react";
import Iworkout from "@/app/components/interface/wokrout";
import AddToPlanButton from "@/app/components/butons/AddToPlanButton";
import AddToSavedButton from "@/app/components/butons/AddToSavedButton";

export const instant = false;

const page = async ({ params }: { params: Promise<{ workoutId: string }> }) => {
  const { workoutId } = await params;
  const workoutUrl = `https://api.abcz.workers.dev/api/fitlog/${workoutId}`;

  const data = await fetch(workoutUrl);
  const workout: Iworkout = await data.json();

  console.log(workout.muscleGroups);

  return (
    <div className="container mx-auto px-6 py-12 ">
      <Suspense fallback="...loading">
        <div className=" flex  items-start gap-14">
          <Image
            src={cat}
            alt="Bodybuilder"
            className="rounded-2xl min-w-17/35"
          ></Image>

          <div className="w-full">
            <h1
              className={`mb-3 tracking-[-0.9px] text-4xl font-bold ${oswald.className}`}
            >
              {workout.name}
            </h1>

            <p className="mb-5 text-base text-extra-light-text">
              {workout.name}
            </p>

            <div className="flex gap-2.5 mb-7">
              {workout.muscleGroups.map((muscle) => (
                <div
                  key={workout.muscleGroups.indexOf(muscle)}
                  className="text-[#0F1115] rounded-full bg-main text-bg-default px-3.5 py-1 font-semibold text-[12px]"
                >
                  {muscle}
                </div>
              ))}
            </div>

            <div className="bg-[#151922] mb-8 rounded-2xl border border-weak-border tracking-[0.6px] text-extra-light-text font-bold">
              <div className="flex justify-between px-6 py-4 border-b border-b-weak-border">
                <h5>EQUIPMENT</h5>
                <p className="text-unlight-txt font-medium">
                  {workout.equipment}
                </p>
              </div>
              <div className="flex justify-between px-6 py-4 border-b border-b-weak-border">
                <h5>DIFFICULTY</h5>
                <p className="text-unlight-txt font-medium">
                  {workout.difficulty}
                </p>
              </div>
              <div className="flex justify-between px-6 py-4 border-b border-b-weak-border">
                <h5>SETS</h5>
                <p className="text-unlight-txt font-medium">{workout.sets}</p>
              </div>
              <div className="flex justify-between px-6 py-4 border-b border-b-weak-border">
                <h5>REPS</h5>
                <p className="text-unlight-txt font-medium">{workout.reps}</p>
              </div>
              <div className="flex justify-between px-6 py-4 border-b border-b-weak-border">
                <h5>DURATION</h5>
                <p className="text-unlight-txt font-medium">
                  {workout.duration}
                </p>
              </div>
              <div className="flex justify-between px-6 py-4 border-b border-b-weak-border">
                <h5>CALORIES</h5>
                <p className="text-unlight-txt font-medium">
                  {workout.caloriesBurned}
                </p>
              </div>
              <div className="flex justify-between px-6 py-4">
                <h5>Rating</h5>
                <p className="text-unlight-txt font-medium">{workout.rating}</p>
              </div>
            </div>

            <div className="mb-9">
              <h3 className="tracking-[0.8px] text-base font-extrabold">
                INSTRUCTIONS
              </h3>
              <ol className="mt-4 list-decimal list-inside flex flex-col gap-3 text-sm text-extra-light-text">
                {workout.instructions.map((instruct) => (
                  <li key={workout.instructions.indexOf(instruct)}>
                    {instruct}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex">
              <AddToPlanButton workout={workout}></AddToPlanButton>
              <AddToSavedButton workout={workout}></AddToSavedButton>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default page;
