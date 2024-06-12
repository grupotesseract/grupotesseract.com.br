export default function CompanyCulture() {
  return (
    <>
      <div className="box w-2/5 hidden xl:flex"></div>
      <div className="culture-box flex flex-col justify-center items-center pt-20 xl:flex-row md:gap-16 lg:pt-56">
        <h1 className="culture-title uppercase text-white text-6xl lg:pr-40 md:text-7xl">
          Grupo <br /> Tesseract
        </h1>
        <div className="flex flex-col justify-center items-start gap-16 relative p-8 md:p-0 md:gap-8">
          <div className="culture-text flex text-2xl md:mr-28 md:text-4xl">
            <p className="font-extrabold">
              &quot;Estamos procurando uma
              <br />
              <span className="uppercase text-lightBlue">
                forma mais humana
              </span>
              <br />
              de desenvolver softwares &quot;
            </p>
          </div>
          <div className="culture-description text-2xl font-normal text-white md:text-3xl">
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
