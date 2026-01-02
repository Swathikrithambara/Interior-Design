import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import interiorimg from "../assets/int-2.jpg";
import interiorimg1 from "../assets/int-3.jpg";
import interiorimg2 from "../assets/int-4.jpg";

export default function About() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1220px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="uppercase text-sm tracking-widest text-gray-500">
            About Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            Designing the Future <br className="hidden sm:block" />
            of Your Space
          </h2>

          <p className="text-gray-600 mt-4 max-w-lg">
            At Plexi, we believe that design isn’t just about aesthetics—it’s
            about creating spaces that feel as good as they look. We are a
            passionate team dedicated to transforming your vision into reality,
            one room at a time.
          </p>

          <p className="text-gray-600 mt-3 max-w-lg">
            From residential to commercial, our mission is simple: to craft
            personalized, functional, and inspiring environments that reflect
            who you are.
          </p>

          {/* STATS */}
          <div className="flex gap-12 sm:gap-16 mt-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold">250+</h3>
              <p className="text-sm text-gray-500 mt-1">
                Success Project
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold">50+</h3>
              <p className="text-sm text-gray-500 mt-1">
                Expert Team
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-8 inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Learn More →
          </button>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".about-next",
              prevEl: ".about-prev",
            }}
            loop
            className="rounded-3xl overflow-hidden"
          >
            <SwiperSlide>
              <img
                src={interiorimg}
                className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover"
                alt="Interior"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={interiorimg1}
                className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover"
                alt="Interior"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={interiorimg2}
                className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover"
                alt="Interior"
              />
            </SwiperSlide>
          </Swiper>

          {/* NAVIGATION BUTTONS – DESKTOP ONLY */}
          <button className="about-prev hidden lg:flex absolute left-[-48px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border items-center justify-center hover:bg-black hover:text-white transition">
            ←
          </button>

          <button className="about-next hidden lg:flex absolute right-[-48px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border items-center justify-center hover:bg-black hover:text-white transition">
            →
          </button>
        </div>

      </div>
    </section>
  );
}
