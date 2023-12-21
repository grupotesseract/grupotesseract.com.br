import Carousel from './components/Carousel';
import Section from './components/Section';

export default function Home() {
  const slides = ['', '', '', ''];
  //O tamanho do array está interligado com a quatidade de circulos que vão aparecer embaixo do depoimento

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-2xl font-bold">Grupo Tesseract</div>
      <section>
        <div>
          <Section />
        </div>
        <Carousel slides={slides} />
      </section>
    </main>
  );
}
