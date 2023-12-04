import Footer from './components/Footer';
import Section from './components/Section';
import TeamInformation from './components/TeamInformation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-2xl font-bold">Grupo Tesseract</div>
      <section className="min-w-full">
        <div className="min-w-full">
          <Section />
        </div>
        <div className="min-w-full">
          <TeamInformation />
        </div>
      </section>
      <div className="min-w-full pt-72">
        <Footer />
      </div>
    </main>
  );
}
