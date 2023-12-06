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
      <div className="content flex flex-col items-start">
        <h2 className="style-title flex flex-col justify-start items-start text-xl text-lightBlue">
          Sites. Sistemas. Aplicativos.
        </h2>
        <div className="typewriter flex flex-col justify-start items-start text-5xl">
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
          <p className="style-text text-2xl font-normal">
            Tudo que sua empresa precisa para alavancar o crescimento das suas
            soluções
          </p>
          <div className="dash border-lightBlue"></div>
        </div>
      </div>
    </>
  );
}
