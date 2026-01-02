import React from "react";
import interiorimg3 from "../assets/int-3.jpg";
import interiorimg9 from "../assets/int-9.jpg";
import interiorimg2 from "../assets/int-2.jpg";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1220px] px-4">

        {/* GRID */}
        <div
          className="
            relative grid gap-8 items-end
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[300px_1fr_300px]
          "
        >
          {/* IMAGE 1 */}
          <div className="h-[200px] md:h-[180px] lg:h-[180px]">
            <img
              src={interiorimg3}
              className="rounded-[22px] w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* IMAGE 2 + TEXT */}
          <div className="relative min-h-[260px] md:h-[320px] lg:h-[380px]">

            <img
              src={interiorimg2}
              className="rounded-[28px] w-full h-full object-cover"
              alt=""
            />

            {/* TEXT CARD */}
           <div
  className="
    bg-white rounded-[28px] p-6 shadow-lg
    max-w-full

    /* Mobile: normal flow */
    static mt-6

    /* ≥475–640px (sm): slight left shift */
    sm:relative sm:left-[-100px]

    /* ≥768px (md): strong overlap */
    md:absolute md:top-[-30px] md:left-[-340px]

    md:max-w-[620px]
  "
>



              <h1 className="text-[20px] md:text-[34px] lg:text-[40px] leading-[1.15] font-bold text-[#1b1b1b]">
                Inspiring Design Solutions
                <br className="hidden sm:block" />
                for Your Home
              </h1>

              <div className="mt-2 text-sm hidden sm:block text-gray-500 flex gap-2">
                <span className="font-medium text-black">Home</span>
                <span>/</span>
                <span>About Us</span>
              </div>
            </div>
          </div>

          {/* IMAGE 3 */}
          
          <div className="flex flex-col">
            <div className="hidden sm:block">
            {/* ICONS */}
            <div className="flex gap-4 mb-4 justify-start md:justify-start lg:justify-start sm:justify-center">
              <FaInstagram className="w-5 h-5 text-black cursor-pointer hover:text-[#006400]" />
              <FaXTwitter className="w-5 h-5 text-black cursor-pointer hover:text-[#006400]" />
              <FiFacebook className="w-5 h-5 text-black cursor-pointer hover:text-[#006400]" />
              <PiYoutubeLogo className="w-5 h-5 text-black cursor-pointer hover:text-[#006400]" />
            </div>

            <img
              src={interiorimg9}
              className="rounded-[22px] w-full h-[220px] object-cover"
              alt=""
            />
</div>
            <p className="mt-5  text-sm leading-relaxed text-gray-600">
              Whether you're looking to refresh a single room or transform your
              entire home, our team designers combines creativity with
              functionality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
