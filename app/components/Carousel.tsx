'use client';

import { useEffect, useState } from 'react';

import navigatePrevious from '../../assets/image/navigate-previous.svg';
import navigateNext from '../../assets/image/navigate-next.svg';
import Image from 'next/image';
import Depositions from './Depositions';

export default function Carousel({ slides }: { slides: any[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log(current);
    setCurrent(current);
  }, [current]);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="box-carousel">
      <div className="flex relative overflow-hidden snap-center">
        <div className="flex justify-between items-center h-screen max-w-full bottom-80 text-white text-3xl">
          <button onClick={previousSlide} className="z-10">
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
            }}
          >
            {/* as duas classes que estao dentro do style nao funcionam no tailwindCss */}
            <Depositions />
          </div>
          <button onClick={nextSlide} className="z-10">
            <Image
              src={navigateNext}
              alt="navigate-next"
              width={50}
              height={50}
            />
          </button>
        </div>
        <div className="circles flex justify-center absolute bottom-16 gap-5">
          {slides.map((slides: unknown, i: number) => {
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
                key={`circle-${i}`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
