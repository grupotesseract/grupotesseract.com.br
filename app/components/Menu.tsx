'use client';

import Image from 'next/image';
import iconMenu from '../../assets/image/iconMenu.svg';
import React, { useState } from 'react';

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-end">
      <div
        className={!openMenu ? 'pt-16 pr-36 pb-24' : 'hidden'}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <Image src={iconMenu} alt="menu" width={50} height={50} />
      </div>

      {openMenu && (
        <>
          <button
            className="flex absolute w-[100px] h-[100px] m-8"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#23AFB3"
              strokeWidth="1"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="bg-lightBlue bg-opacity-80 w-[63%] blur-1"></div>
          <nav className="flex flex-col flex-wrap w-[37%] pt-12 pr-24 pb-36 pl-20 bg-gray bg-opacity-20">
            <ul className="flex flex-col justify-between min-h-[250px] mt-48">
              <li className="text-white text-3xl font-black my-2 uppercase">
                <a href="/quemSomos">Quem Somos</a>
              </li>
              <li className="text-white text-3xl font-black my-2 uppercase">
                <a href="/servicos">Serviços</a>
              </li>
              <li className="text-white text-3xl font-black my-2 uppercase">
                <a href="/projetos">Projetos</a>
              </li>
              <li className="text-white text-3xl font-black my-2 uppercase">
                <a href="/carreira">Carreira</a>
              </li>
              <li className="text-white text-3xl font-black my-2 uppercase">
                <a href="/blog">Blog</a>
              </li>
              <li className="text-white text-3xl font-black my-2 uppercase">
                <a href="/contact">Contato</a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
