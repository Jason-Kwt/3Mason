'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

import { FiMenu } from 'react-icons/fi';

import logo_site from '../assets/logo_site.png';
import logo_site_02 from '../assets/logo_site_02.png';

function Navbar({ textColor, bgColor }) {
  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'GENESIS', href: '/genesis' },
    { name: 'ALELIER', href: '/alelier' },
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <header>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="fixed w-full top-0 z-10  overflow-hidden "
        style={{ backgroundColor: `${bgColor}` }}
      >
        {/* Navbar */}
        <div
          className="container mx-auto flex justify-between items-center pt-2 pb-6 px-4"
          style={{ color: `${textColor}`, backgroundColor: `${bgColor}` }}
        >
          <Link href="/" className="font-semibold transition">
            {textColor === 'white' ? (
              <Image src={logo_site} alt="3Masons Logo" className="w-[90px]" />
            ) : (
              <Image
                src={logo_site_02}
                alt="3Masons Logo"
                className="w-[90px]"
              />
            )}
          </Link>
          <div className="hidden md:flex gap-8 lg:gap-16 xl:gap-24 pr-8 ">
            {/* {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-semibold xl:text-xl text-md transition hover:scale-125 duration-300"
              >
                {item.name}
              </Link>
            ))} */}
            <Link
              key={'HOME'}
              href={'/'}
              className="font-semibold xl:text-xl text-md transition hover:scale-125 duration-300"
            >
              HOME
            </Link>
            <Link
              key={'ABOUT'}
              href={'/about'}
              className="font-semibold xl:text-xl text-md transition hover:scale-125 duration-300 opacity-50 cursor-not-allowed pointer-events-none"
            >
              ABOUT
            </Link>
            <Link
              key={'GENESIS'}
              href={'/genesis'}
              className="font-semibold xl:text-xl text-md transition hover:scale-125 duration-300"
            >
              GENESIS
            </Link>
            <Link
              key={'ALELIER'}
              href={'/alelier'}
              className="font-semibold xl:text-xl text-md transition hover:scale-125 duration-300"
            >
              ALELIER
            </Link>
          </div>
          {/* Menu bar button */}
          <button
            className={textColor === 'white' ? ('md:hidden text-white text-3xl pr-8') : ('md:hidden text-black text-3xl pr-8')}

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
                className={`md:hidden text-white text-3xl mr-4`}

                onClick={handleOpenMenu}
              >
                <FiMenu />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-white justify-center items-center py-16">
              {/* {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-semibold transition hover:text-black hover:bg-white hover:scale-125 duration-300 rounded-sm py-1 px-16"
                  onClick={handleOpenMenu}
                >
                  {item.name}
                </Link>
              ))} */}

              <Link
                key={'HOME'}
                href={'/'}
                className="text-3xl font-semibold transition hover:text-black hover:bg-white hover:scale-125 duration-300 rounded-sm py-1 px-16"
                onClick={handleOpenMenu}
              >
                HOME
              </Link>
              <Link
                key={'ABOUT'}
                href={'/about'}
                className="text-3xl font-semibold transition hover:text-black hover:bg-white hover:scale-125 duration-300 rounded-sm py-1 px-16
                 opacity-50 cursor-not-allowed pointer-events-none"
                onClick={handleOpenMenu}
              >
                ABOUT
              </Link>
              <Link
                key={'GENESIS'}
                href={'/genesis'}
                className="text-3xl font-semibold transition hover:text-black hover:bg-white hover:scale-125 duration-300 rounded-sm py-1 px-16"
                onClick={handleOpenMenu}
              >
                GENESIS
              </Link>
              <Link
                key={'ALELIER'}
                href={'/alelier'}
                className="text-3xl font-semibold transition hover:text-black hover:bg-white hover:scale-125 duration-300 rounded-sm py-1 px-16"
                onClick={handleOpenMenu}
              >
                ALELIER
              </Link>
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </motion.nav>
    </header>
  );
}

export default Navbar;
