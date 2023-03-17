'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

import { FiMenu } from 'react-icons/fi';

import logo_site from '../assets/logo_site.png';

function Navbar() {
  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PEDIGREE', href: '/pedigree' },
    { name: 'BIBLE', href: '/bible' },
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="w-full top-0 z-10 fixed bg-transparent"
    >
      {/* Navbar */}
      <div className=" container mx-auto flex justify-between items-center pt-2 pb-6 px-4">
        <Link href="/" className="font-semibold transition">
          <Image src={logo_site} alt="3Masons Logo" className="w-[90px]" />
        </Link>
        <div className="hidden md:flex gap-8 lg:gap-16 xl:gap-24 text-white pr-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold xl:text-xl text-md transition hover:scale-125 duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Menu bar button */}
        <button
          className="md:hidden text-white text-3xl pr-8"
          onClick={handleOpenMenu}
        >
          <FiMenu />
        </button>
      </div>

      {/* Menu bar  */}
      {isOpenMenu ? (
        <div className="w-screen h-screen top-0 bg-black fixed inset-0  overflow-y-auto z-10 ">
          <div className=" container mx-auto flex justify-between items-center pt-2 pb-6 px-4 pr-8">
            <Image src={logo_site} alt="3Masons Logo" className="w-[90px]" />

            <button
              className="md:hidden text-white text-3xl mr-4"
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
    </motion.nav>
  );
}

export default Navbar;
