
import React from "react";
import { oswald } from "../fonts";
import ShowPlans from "../components/plan/ShowPlans";
import TabsButton from "../components/butons/TabsButton";
import StatsCarrd from "../components/plan/StatsCarrd";

const page = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col gap-6 justify-between h-full">
        <div>
          <h1
            className={`mb-2 font-bold text-3xl ${oswald.className} tracking-[-0.75px]`}
          >
            My Plan
          </h1>
          <p className="text-yet-another-text text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div>
          <StatsCarrd></StatsCarrd>
        </div>

        <TabsButton></TabsButton>

        <div>
          <ShowPlans></ShowPlans>
        </div>
      </div>
    </div>
  );
};

export default page;
