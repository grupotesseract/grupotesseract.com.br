'use client';

import Image from 'next/image';
import iconMenu from '../../assets/image/iconMenu.svg';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpenMenu(!openMenu);

  useEffect(() => {
    function handleClickOutside(e: { target: any }) {
      if (
        (menuRef.current as HTMLElement) &&
        !(menuRef.current as HTMLElement).contains(e.target)
      ) {
        setOpenMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-end">
      <div
        className={!openMenu ? 'pt-16 pr-12 pb-24 lg:pr-36' : 'hidden'}
        onClick={toggleMenu}
      >
        <Image src={iconMenu} alt="menu" width={50} height={50} />
      </div>

      {openMenu && (
        <>
          <div className="flex justify-end w-screen h-screen fixed z-30">
            <div className="bg-lightBlue bg-opacity-80 w-1/2 blur-1 md:w-2/3"></div>
            <button
              className="flex absolute pt-8 lg:pt-0 lg:w-24 lg:h-24 lg:mt-8"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <svg
                className="h-24 w-20 text-gray-600"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#23AFB3"
                strokeWidth="1"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <nav
              ref={menuRef}
              className="menu-nav flex flex-col flex-wrap items-center w-1/2 md:w-1/3 lg:items-start lg:pt-64 lg:pb-36 lg:pl-20 2xl:pt-32"
            >
              <ul className="flex flex-col justify-between mt-12 2xl:mt-48 relative">
                <li
                  onClick={toggleMenu}
                  className="text-white text-xl md:text-2xl lg:text-3xl font-black my-2 uppercase"
                >
                  <Link href="/quemsomos">Quem Somos</Link>
                </li>
                <li
                  onClick={toggleMenu}
                  className="text-white text-xl md:text-2xl lg:text-3xl font-black my-2 uppercase"
                >
                  <Link href="/servicos">Serviços</Link>
                </li>
                <li
                  onClick={toggleMenu}
                  className="text-white text-xl md:text-2xl lg:text-3xl font-black my-2 uppercase"
                >
                  <Link href="/projetos">Projetos</Link>
                </li>
                <li
                  onClick={toggleMenu}
                  className="text-white text-xl md:text-2xl lg:text-3xl font-black my-2 uppercase"
                >
                  <Link href="/carreira">Carreira</Link>
                </li>
                <li
                  onClick={toggleMenu}
                  className="text-white text-xl md:text-2xl lg:text-3xl font-black my-2 uppercase"
                >
                  <Link href="/blog">Blog</Link>
                </li>
                <li
                  onClick={toggleMenu}
                  className="text-white text-xl md:text-2xl lg:text-3xl font-black my-2 uppercase"
                >
                  <Link href="/contato">Contato</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
