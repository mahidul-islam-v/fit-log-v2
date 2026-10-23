import React from "react";
import loko from "@/assets/logo.png";
import Image from "next/image";
import { oswald } from "../../fonts";

const Footer = () => {
  return (
    <div className="border-t b-0 border-border-color">
      <div className="container py-10 px-6 mx-auto">
        <div className="flex justify-between items-center">
          <div className="ml-2 flex items-center gap-2">
            <Image
              src={loko}
              alt="Fit Log"
              width={20}
              className="rotate-135"
            ></Image>
            <h4 className={`text-xs tracking-[0.7px] ${oswald.className}`}>
              FITLOG
            </h4>
          </div>

          <h6 className="text-extra-light-text text-xs">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
