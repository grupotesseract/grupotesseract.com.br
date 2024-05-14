export default function CompanyCulture() {
  return (
    <>
      <div className="box w-2/5 hidden xl:flex"></div>
      <div className="culture-box flex flex-col justify-center items-end xl:flex-row md:max-xl:items-center md:max-xl:gap-16 md:max-xl:pt-40">
        <h1 className="culture-title uppercase text-white md:max-xl:pr-72 md:max-xl:text-6xl">
          Grupo <br /> Tesseract
        </h1>
        <div className="flex flex-col justify-center items-start gap-16 relative md:max-xl:gap-8">
          <div className="culture-text flex mr-16 md:max-xl:text-xl md:max-xl:mr-28">
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
          <div className="culture-description font-normal text-white md:max-xl:text-xl">
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
