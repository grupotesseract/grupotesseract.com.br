import Presentation from './components/Presentation';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import TeamInformation from './components/TeamInformation';

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Presentation />
      <main className="flex min-h-screen flex-col items-center justify-center">
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
    </>
  );
}
