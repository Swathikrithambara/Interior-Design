import React from 'react'

export default function Contactus() {
  return (
  
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* CONTAINER */}
        <div className="relative rounded-3xl overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Interior design"
            className="w-full h-[520px] md:h-[460px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-2xl text-white">

              <span className="text-sm uppercase tracking-widest text-gray-300">
                Get In Touch
              </span>

              <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
                Let’s Create a Beautiful <br className="hidden md:block" />
                Space Together
              </h2>

              <p className="text-gray-200 mt-6 text-sm md:text-base">
                Book a consultation today and let’s work together to create
                a space that uniquely yours.
              </p>

              <button className="mt-10 inline-flex items-center gap-3 bg-[#1a120c] hover:bg-black transition px-7 py-3 rounded-full text-sm font-medium">
                Contact Us →
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  

  )
}
