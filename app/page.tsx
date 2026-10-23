import React from "react";
import BannerCard from "./components/main/BannerCard";
import GridOfCards from "./components/main/GridOfCards";
import { oswald } from "./fonts";


export const instant = false;

const page = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col gap-16">
      <BannerCard></BannerCard>

      <div className="flex flex-col gap-8">
        <div>
          <h2
            className={`tracking-[-0.75px] text-3xl font-bold ${oswald.className}`}
          >
            THE LIBRARY
          </h2>
          <p className="text-sm text-extra-light-text mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div>
          <GridOfCards></GridOfCards>
        </div>
      </div>
    </div>
  );
};

export default page;
