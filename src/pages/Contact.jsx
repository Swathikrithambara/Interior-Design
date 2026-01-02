import React from "react";

export default function Contact() {
  return (
    <section className="bg-white py-32 flex justify-center items-center">
      <div className="mx-auto max-w-[1220px] px-6">

        {/* HEADER */}
        <div className="max-w-xl mb-16">
          <span className="text-sm tracking-widest uppercase text-[#006400]">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black leading-tight">
            Let’s Talk About <br /> Your Next Space
          </h2>

          <p className="mt-6 text-gray-600">
            Whether you’re planning a new interior, renovation, or consultation,
            we’d love to hear from you.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="max-w-2xl border border-gray-200 rounded-[28px] p-10">
          <form className="space-y-8">

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border-b border-[#006400] bg-transparent py-3
                           focus:outline-none focus:border-[#38b000]
                           transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border-b border-[#006400] bg-transparent py-3
                           focus:outline-none focus:border-[#006400]
                           transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full border-b border-[#006400] bg-transparent py-3
                           focus:outline-none focus:border-[#006400]
                           transition resize-none"
              />
            </div>

            {/* BUTTON */}
            <div className="pt-6">
              <button
                type="submit"
                className="inline-flex items-center gap-3
                           bg-black text-white px-8 py-4 rounded-full
                           hover:bg-[#006400] transition"
              >
                Send Message →
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
