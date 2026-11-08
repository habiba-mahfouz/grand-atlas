import logo from "../assets/icons/Logo.svg";

import { NavLink } from "react-router-dom";
import { Button } from "../Components/Components.jsx";
import { useState } from "react";

const pages = [
  { to: "/", label: "Home" },
  { to: "/units", label: "Units" },
  { to: "/zones", label: "Zones" },
  { to: "/developers", label: "Developers" },
  { to: "/contact_us", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activePage = ({ isActive }) =>
    isActive
      ? "text-[#8E1616] underline decoration-2 underline-offset-8 transition-colors"
      : "hover:text-[#8E1616] transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs border-b border-[#F0F0F0]">
      <div className="mx-auto flex min-h-[64px] sm:min-h-[72px] lg:min-h-[88px] max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        <NavLink to="/" aria-label="Grand Atlas home" onClick={() => setMenuOpen(false)}>
          <img className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-[72px] xl:w-[72px] object-contain" alt="Grand Atlas" src={logo} />
        </NavLink>

        <nav className="hidden items-center gap-5 md:gap-6 lg:gap-8 xl:gap-10 font-lato text-sm md:text-base xl:text-lg 2xl:text-[20px] font-bold text-[#847D7D] md:flex">
          {pages.map((p) => (
            <NavLink key={p.to} to={p.to} className={activePage}>
              {p.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            content={"Register"}
            css="h-8 sm:h-9 md:h-10 w-20 sm:w-[94px] md:w-[110px] rounded-[5px] bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-xs sm:text-sm md:text-base font-semibold text-[#EEEEEE] hover:opacity-95 active:scale-95 transition-all"
          />
          <button
            type="button"
            className="flex size-9 sm:size-10 items-center justify-center rounded-md border border-[#CEC7C7] text-[#8E1616] md:hidden hover:bg-neutral-50 transition-colors"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`flex items-center justify-center leading-none select-none ${
                menuOpen ? "-mt-0.5 text-3xl sm:text-[34px]" : "text-2xl sm:text-3xl"
              }`}
              aria-hidden="true"
            >
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col border-t border-[#EAEAEA] bg-white px-5 py-3 font-lato font-bold text-[#847D7D] shadow-lg md:hidden">
          {pages.map((p) => (
            <NavLink
              key={p.to}
              to={p.to}
              className={({ isActive }) =>
                `${isActive ? "text-[#8E1616]" : "hover:text-[#8E1616]"} border-b border-[#EAEAEA] py-3 text-base last:border-b-0 transition-colors`
              }
              onClick={() => setMenuOpen(false)}
            >
              {p.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
