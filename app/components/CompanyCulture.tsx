export default function CompanyCulture() {
  return (
    <>
      <div className="flex justify-evenly items-end w-screen">
        <div className="flex justify-end w-80 pr-32">
          <h1 className="text-5xl uppercase font-bold text-white">
            Grupo <br /> Tesseract
          </h1>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex w-490">
            <p className="text-2lg font-bold">
              &quot;Estamos procurando uma
              <span className="uppercase text-lightBlue">
                {' '}
                forma mais humana{' '}
              </span>
              de desenvolver softwares &quot;
            </p>
          </div>
          <div className="culture-text font-normal text-white">
            <p>
              <span className="font-bold">O TESSERACT</span> é um grupo de
              profissionais da área de TI que acredita na importância da
              transparência e da cultura colaborativa em seus processos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
