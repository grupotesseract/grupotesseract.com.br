import Presentation from './components/Presentation';
import Section from './components/Section';
import MultiTechnology from './components/MultiTechnology';
import Carousel from './components/Carousel';
import { slides } from './components/Testimonials';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <Presentation />
        <section className="w-auto">
          <Section />
          <MultiTechnology />
          <Carousel slides={slides} />
        </section>
      </main>
    </>
  );
}
