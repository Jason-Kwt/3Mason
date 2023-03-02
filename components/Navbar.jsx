"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";

function Navbar() {
  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PEDIGREE", href: "/pedigree" },
    { name: "BIBLE", href: "/bible" },
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <nav className="w-full top-0 z-10 fixed bg-transparent">
      {/* Navbar */}
      <div className="border-2 border-red-500 container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-3xl text-white">Logo</div>
        <div className="hidden md:flex gap-16 text-white">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold transition hover:text-black hover:scale-125 duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Menu bar button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={handleOpenMenu}
        >
          <FiMenu />
        </button>
      </div>

      {/* Menu bar  */}
      {isOpenMenu ? (
        <div className="w-screen h-screen top-0 bg-black fixed inset-0  overflow-y-auto z-10">
          <div className="border-2 border-red-500 container mx-auto flex justify-between items-center py-4 px-4">
            <div className="text-3xl text-white">Logo</div>

            <button
              className="md:hidden text-white text-3xl"
              onClick={handleOpenMenu}
            >
              <FiMenu />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-white justify-center items-center py-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-3xl font-semibold transition hover:text-black hover:bg-white hover:scale-125 duration-300 rounded-sm py-1 px-16"
                onClick={handleOpenMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </nav>
  );
}

export default Navbar;
