export default function CompanyCulture() {
  return (
    <>
      <div className="box flex"></div>
      <div className="culture-box flex justify-evenly items-end w-screen">
        <div className="flex justify-end w-80">
          <h1 className="culture-title uppercase text-white">
            Grupo <br /> Tesseract
          </h1>
        </div>
        <div className="flex flex-col gap-16 relative">
          <div className="culture-text flex">
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
          <div className="culture-description font-normal text-white">
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
