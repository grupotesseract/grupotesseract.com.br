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
      <div className="content flex flex-col items-start p-1">
        <h2 className="style-title flex flex-col justify-start items-start text-base lg:text-xl text-lightBlue lg:pl-36">
          Sites. Sistemas. Aplicativos.
        </h2>
        <div className="typewriter flex flex-col justify-start items-start text-3xl lg:text-5xl lg:pl-36">
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
          <p className="style-text text-sm font-normal lg:w-480 lg:text-2xl">
            Tudo que sua empresa precisa para alavancar o crescimento das suas
            soluções
          </p>
          <div className="dash border-lightBlue"></div>
        </div>
      </div>
    </>
  );
}
