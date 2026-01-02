import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-[1220px] mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-[#006400] tracking-wide">
          Interior
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                px-5 py-2 rounded-full text-sm font-medium
                border transition-all duration-300
                ${
                  isActive
                    ? "border-[#006400] text-[#006400]"
                    : "border-[#38b000]/40 text-[#006400]"
                }
                hover:border-[#38b000]
                hover:text-[#38b000]
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#006400]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col gap-3 px-6 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
  `
  px-4 py-2 rounded-full text-sm font-medium
  border transition-all duration-300
  w-fit mx-auto
  ${
    isActive
      ? "border-[#006400] text-[#006400]"
      : "border-[#38b000]/40 text-[#006400]"
  }
  hover:border-[#38b000]
  hover:text-[#38b000]
  `
}

              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
