export default function DashedBox() {
  return (
    <>
      <div className="flex flex-col gap-8 mt-24 p-4 justify-center text-center lg:flex-row lg:mt-48 lg:p-0 lg:gap-16 lg:text-start xl:w-[68rem] xl:max-w-[1300px] xl:m-auto xl:mt-48">
        <div className="flex self-center lg:w-[58rem] lg:text-end lg:self-start">
          <h1 className="flex text-4xl text-white font-extrabold uppercase lg:text-7xl lg:self-start">
            Vem com a gente
          </h1>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-16 text-start border-2 border-dashed border-gray-500 p-2">
            <p className="text-xl lg:text-2xl xl:text-3xl">
              Oferecemos um ambiente de trabalho acolhedor para que todos os
              membros possam evoluir profissionalmente de forma sustentável e
              segura.
            </p>
            <p className="text-xl lg:text-2xl xl:text-3xl">
              Além de ser um ambiente onde é possivel compartilhar sugestões e
              críticas do trabalho, fazer parte do Tesseract inclui:
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <ul className="flex flex-col gap-4">
              <li className="text-xl text-gray font-light lg:text-2xl xl:text-3xl">
                Trabalho 100% home office
              </li>
              <li className="text-xl text-gray font-light lg:text-2xl xl:text-3xl">
                Horários flexíveis
              </li>
              <li className="text-xl text-gray font-light lg:text-2xl xl:text-3xl">
                Plano de carreira
              </li>
              <li className="text-xl text-gray font-light lg:text-2xl xl:text-3xl">
                Bonificações semestrais
              </li>
              <li className="text-xl text-gray font-light lg:text-2xl xl:text-3xl">
                Descanso remunerado
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
