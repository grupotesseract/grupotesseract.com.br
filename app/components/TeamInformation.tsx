import IconTitleDescription from './IconTitleDescription';

export default function Section() {
  const sectionData = [
    {
      title: 'equipe de especialistas',
      description:
        'Atendemos demandas de empresas com um time especializado que abrange diversas áreas como backend, frontend, mobile e DevOps.',
      key: 1,
      titleClass: 'flex pt-4 pb-4',
    },
    {
      title: 'transparência no processo',
      description:
        'Seguimos à risca questões fiscais, emitimos os relatórios de horas trabalhadas, tudo pensado para melhorar a parceria com o cliente.',
      key: 2,
      titleClass: 'flex pt-4 pb-4',
    },
    {
      title: 'comprometimento com o projeto',
      description:
        'Tratamos com seriedade os projetos dos clientes e vemos o Tesseract como parte disso tudo.',
      key: 3,
      titleClass: 'flex pt-4 pb-4',
    },
  ];

  return (
    <div className="flex items-start justify-around mt-20 mb-5 md:max-xl:flex-col md:max-xl:items-center md:max-xl:gap-16 md:max-xl:mt-24">
      {sectionData.map(function (item) {
        return (
          <IconTitleDescription
            title={item.title}
            description={item.description}
            key={item.key}
            titleClass={item.titleClass}
          />
        );
      })}
    </div>
  );
}
