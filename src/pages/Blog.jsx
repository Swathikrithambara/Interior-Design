import React from "react";
import interiorimg13 from "../assets/int-14.jpg";
import interiorimg14 from "../assets/int-13.jpg";
import interiorimg15 from "../assets/int-9.jpg";
import interiorimg16 from "../assets/int-16.jpg";

export default function Blog() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1220px] px-4">

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">

          {/* ================= LEFT FEATURED ARTICLE ================= */}
          <div>
            <span className="text-sm text-gray-500 border-b pb-1 inline-block">
              Latest Article
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-[#1b1b1b]">
              Design Innovation and
              <br className="hidden sm:block" />
              Industry News
            </h2>

            <div className="mt-8 sm:mt-10">
              <img
                src={interiorimg13}
                className="rounded-[24px] w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover"
                alt=""
              />

              <h3 className="mt-5 text-lg font-semibold text-[#1b1b1b]">
                The Psychology of Color: Choosing the Right Palette for Every Room
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-xl">
                Learn how different colors can affect mood and energy in your
                space, and how to choose the best shades for each room.
              </p>
            </div>
          </div>

          {/* ================= RIGHT BLOG LIST ================= */}
          <div className="flex flex-col justify-between">

            <div className="space-y-6 sm:space-y-7 mt-10 lg:mt-0">

              <BlogItem
                title="Interior Design for Home Offices: Boost Your Productivity & Comfort"
                img={interiorimg14}
              />

              <div className="border-t" />

              <BlogItem
                title="Reviving Classic Design: Vintage Touches for Modern Homes"
                img={interiorimg15}
              />

              <div className="border-t" />

              <BlogItem
                title="How to Maximize Small Spaces Without Sacrificing Style"
                img={interiorimg16}
              />
            </div>

            {/* VIEW ALL BUTTON */}
            <div className="mt-8 lg:mt-0">
              <button className="bg-[#1a120c] text-white px-7 py-3 rounded-full text-sm hover:bg-black transition">
                View All →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


function BlogItem({ title, img }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_110px] gap-4 sm:gap-5 items-center">
      <div>
        <h4 className="text-base sm:text-lg font-medium leading-snug text-[#1b1b1b]">
          {title}
        </h4>

        <button className="mt-2 text-xs text-gray-500 flex items-center gap-1 hover:text-[#006400] transition">
          Read More <span>→</span>
        </button>
      </div>

      <img
        src={img}
        className="rounded-[16px] w-full sm:w-[110px] h-[140px] sm:h-[120px] object-cover"
        alt=""
      />
    </div>
  );
}
