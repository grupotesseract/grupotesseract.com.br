import Typewriter from './Typewriter';

export default function Presentation() {
  const sectionData = [
    {
      text: 'Alocação de profissionais',
      hiddenCursor: false,
      delay: 0,
      textClass: 'mb-4',
      key: '1',
    },
    {
      text: 'Equipe especializada',
      hiddenCursor: false,
      delay: 2800,
      textClass: 'mb-4',
      key: '2',
    },
    {
      text: 'Suporte técnico',
      hiddenCursor: false,
      delay: 4800,
      key: '3',
    },
  ];
  return (
    <>
      <div className="flex flex-col items-start w-full h-550">
        <h2 className="flex flex-col justify-start items-start w-full pt-20 pl-36 pb-5 text-xl text-lightBlue font-semibold uppercase">
          Sites. Sistemas. Aplicativos.
        </h2>
        <div className="flex flex-col justify-start items-start w-full h-560 pl-36 text-5xl text-white font-black">
          {sectionData.map(function (item) {
            return (
              <Typewriter
                text={item.text}
                hiddenCursor={item.hiddenCursor}
                delay={item.delay}
                textClass={item.textClass}
                key={item.key}
              />
            );
          })}
          <p className="w-480 pt-16 text-2xl font-normal pb-7">
            Tudo que sua empresa precisa para alavancar o crescimento das suas
            soluções
          </p>
          <div className="w-326 border-2 border-lightBlue"></div>
        </div>
      </div>
    </>
  );
}
