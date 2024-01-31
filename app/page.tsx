import Presentation from './components/Presentation';
import Section from './components/Section';
import Carousel from './components/Carousel';
import { slides } from './components/Testimonials';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Presentation />
        <section className="min-w-full">
          <div className="min-w-full">
            <Section />
          </div>
          <Carousel slides={slides} />
        </section>
      </main>
    </>
  );
}
