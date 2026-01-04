import { motion } from "framer-motion";

import { FaFacebookF, FaInstagram, FaVimeoV } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">

      {/* subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b0b] to-black opacity-95" />

      <div className="relative max-w-7xl mx-auto px-8 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* BRAND */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-wide">
              Interior
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Feugiat a ligula rutrum luctus primis ultrice integer congue magna at
              pretium purus a pretium ligula rutrum and luctus.
            </p>

            <div className="flex gap-4 text-gray-400">
  {[
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaXTwitter />, link: "#" },
    { icon: <FaVimeoV />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
  ].map((item, i) => (
    <motion.a
      key={i}
      href={item.link}
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-9 h-9 rounded-full border border-white/20
                 flex items-center justify-center
                 hover:bg-white hover:text-black
                 transition cursor-pointer"
    >
      {item.icon}
    </motion.a>
  ))}
</div>

          </div>

          {/* INDUSTRY SECTORS */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Industry Sectors</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Our Team",
                "How It Works",
                "Office Create",
                "Residential Explore",
                "Terms & Services",
                "Jobs & Unemployment",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
              <li>
              palakkad
              </li>
              <li className="text-white font-medium">
                +91) 574 - 328 - 301
              </li>
              <li className="hover:text-white transition cursor-pointer">
               swathikrithambara@gmail.com
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">
              Sign Up For Newsletter
            </h4>

            <div className="border-b border-gray-600 flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent w-full py-2 text-sm outline-none placeholder:text-gray-500"
              />
              <span className="text-xl cursor-pointer hover:text-white transition">
                →
              </span>
            </div>

            <label className="flex items-center gap-2 text-xs text-gray-400">
              <input type="checkbox" className="accent-white" />
              I agree to all terms and policies
            </label>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16" />

        {/* BOTTOM BAR */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 – 2027 | All Rights Reserved By Swathi</p>

          <div className="flex gap-6">
            {["Terms", "Privacy", "License", "Privacy Policy"].map((item) => (
              <span
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
