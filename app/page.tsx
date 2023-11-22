import Section from "./components/Section";
import TeamInformation from "./components/TeamInformation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-2xl font-bold">Grupo Tesseract</div>
      <section>
        <div>
          <Section />
        </div>
        <div>
        <TeamInformation />
        </div>
      </section>
    </main>
  )
}
