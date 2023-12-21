'use client';

import { SetStateAction, useEffect, useState } from 'react';

import navigatePrevious from '../../docs/image/navigate-previous.svg';
import navigateNext from '../../docs/image/navigate-next.svg';
import Image from 'next/image';
import Depositions from './Depositions';

export default function Carousel({ slides }) {
  //slides está interligado em todos os componentes, está em vermelho mas não compromete o funcionamento.
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(current);
  }, [current]);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.lenght - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="box-carousel">
      <div className="flex relative overflow-hidden snap-center">
        <div className="flex justify-between items-center h-screen max-w-full bottom-80 text-white text-3xl">
          <button onClick={previousSlide}>
            <Image
              src={navigatePrevious}
              alt="navigate-previous"
              width={50}
              height={50}
            />
          </button>
          <div
            className="carousel"
            style={{
              transform: `translateX(-${current * 100}%)`,
              scrollSnapType: 'x mandatory',
            }}
          >
            {/* as duas classes que estao dentro do style nao funcionam no tailwindCss */}
            <Depositions />
          </div>
          <button onClick={nextSlide}>
            <Image
              src={navigateNext}
              alt="navigate-next"
              width={50}
              height={50}
            />
          </button>
        </div>
        <div className="circles flex justify-center absolute bottom-16 gap-5">
          {slides.map((_s: unknown, i: SetStateAction<number>) => {
            return (
              <div
                className="circle"
                style={{
                  backgroundColor: `
                ${
                  i == current ? 'rgb(35, 175, 179)' : 'rgb(35, 175, 179, 0.5)'
                }`,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setCurrent(i);
                }}
                key={'circle' + 1}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
