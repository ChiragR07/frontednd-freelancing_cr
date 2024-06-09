import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";

export default function AdminDashboard() {
  const [isSideMenuOpen, setMenu] = useState(false); // Initially false, menu is closed
  const navlinks = [
    { label: "Home", to: "/admin-dashboard" },
    { label: "Color Game", to: "/color-game" },
    { label: "Aviator", to: "/aviator-game" },
  ];

  
  return (
    <main className="h-screen w-full bg-slate-50">
      <nav className="flex justify-between px-8 items-center py-6 lg:px-24">
        <div className="flex flex-row gap-8 items-center">
          <section className="flex flex-row items-center gap-4">
            <GiHamburgerMenu
              onClick={() => setMenu(true)}
              className="text-3xl flex cursor-pointer lg:hidden"
            />
            <NavLink to="/admin-dashboard" className="text-3xl font-mono">
              BetKing
            </NavLink>
          </section>
          {navlinks.map((d, i) => (
            <NavLink
              key={i}
              className="hidden lg:block  text-gray-400 "
              to={d.to}
            >
              {d.label}
            </NavLink>
          ))}
        </div>
        {/* SideBar Mobile Version */}
        <div
          className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all ${
            isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-56">
            <IoCloseSharp
              onClick={() => setMenu(false)}
              className="text-3xl mt-0 mb-8 cursor-pointer "
            />
            {navlinks.map((d, i) => (
              <NavLink key={i} className="font-bold flex flex-col" to={d.to}>
                {d.label}
              </NavLink>
            ))}
          </section>
        </div>

        <section className="flex flex-row items-center gap-2">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Profile"
            className="h-[40px] w-[40px] rounded-full"
          />
          <IoMdArrowDropdown className="text-3xl" />
        </section>
      </nav>
      <hr className="lg:mx-24" />
    </main>
  );
}
