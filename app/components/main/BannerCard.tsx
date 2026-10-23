import Image from "next/image";
import skel from "@/assets/banner.png";
import { oswald } from "../../fonts";

const BannerCard = () => {
  return (
    <div className="flex justify-between items-center bg-bg-light rounded-2xl p-14 border border-[#222630] ">
      <div className="flex flex-col gap-5 max-w-[40vw]">
        <h6 className="text-main! font-bold text-[11px] tracking-[1.1px]">
          WORKOUT LIBRARY
        </h6>
        <h1
          className={`${oswald.className} text-6xl font-extrabold tracking-[-1.5px]`}
        >
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-extra-light-text! text-[16px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className="btn btn- bg-main w-fit tracking-[0.3px] text-black! rounded-md">
          BROWSE WORKOUTS
        </button>
      </div>

      <div>
        <Image src={skel} alt="Muscles"></Image>
      </div>
    </div>
  );
};

export default BannerCard;
