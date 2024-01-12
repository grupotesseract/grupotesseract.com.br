'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import navigateNext from '../../assets/image/navigate-next.svg';
import navigatePrevious from '../../assets/image/navigate-previous.svg';
import Testimonials from './Testimonials';

export default function Carousel({ slides }: { slides: any[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => { setCurrent(current) }, [current]);

  const previousSlide = () => setCurrent((current === 0 ? slides.length : current) - 1)
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1)

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
          <div className="carousel" style={{ transform: `translateX(-${current * 100}%)` }}>
            <Testimonials />
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
          {slides.map((_: unknown, i: number) => (
            <div
              className="circle"
              onClick={() => setCurrent(i)}
              style={{ backgroundColor: `rgba(${i === current ? '35, 175, 179, 1' : '35, 175, 179, 0.5'})` }}
              key={`circle-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
