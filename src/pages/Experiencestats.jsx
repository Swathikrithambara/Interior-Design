import React from "react";
import interiorimg18 from "../assets/int-18.jpg";
import interiorimg19 from "../assets/int-19.jpg";
import interiorimg20 from "../assets/int-20.jpg";

export default function Experiencestats() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1220px] px-4">

        {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-fr">



          {/* ===== COLUMN 1 ===== */}
         <div className="flex flex-col gap-8 h-full justify-between">

            {/* TEXT CARD */}
            <div className="bg-[#f3ede6] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between min-h-[200px]">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold">25+</h3>
                <p className="text-sm mt-1 font-medium">
                  Years Experience
                </p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                We bring a wealth of knowledge and expertise to every project.
              </p>
            </div>

            {/* IMAGE CARD */}
            <img
              src={interiorimg18}
              className="rounded-[28px] h-[220px] sm:h-[260px] lg:h-[300px] w-full object-cover"
              alt=""
            />
          </div>

          {/* ===== COLUMN 2 ===== */}
          <div className="flex flex-col gap-8">

            {/* IMAGE + STAT */}
           <div className="relative rounded-[28px] overflow-hidden h-full min-h-[420px]">

              <img
                src={interiorimg19}
                className="w-full h-full object-cover"
                alt=""
              />

              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 text-white">
                <h3 className="text-3xl sm:text-4xl font-bold">250+</h3>
                <p className="text-sm mt-1">
                  Success Project
                </p>
              </div>

              <p className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-xs sm:text-sm text-white/90 leading-relaxed">
                From concept to completion, our team consistently delivered
                stunning designs that exceed expectations.
              </p>
            </div>

          </div>

          {/* ===== COLUMN 3 ===== */}
          <div className="flex flex-col gap-8">

            {/* IMAGE CARD */}
            <img
              src={interiorimg20}
              className="rounded-[28px] h-[200px] sm:h-[230px] lg:h-[260px] w-full object-cover"
              alt=""
            />

            {/* STAT CARD */}
           <div className="bg-[#1a120c] text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between h-full">

              <p className="text-sm text-white/80 leading-relaxed">
                We're dedicated to creating spaces that our clients love and cherish.
              </p>

              <div className="mt-6">
                <h3 className="text-3xl sm:text-4xl font-bold">98%</h3>
                <p className="text-sm mt-1">
                  Satisfied Clients
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
