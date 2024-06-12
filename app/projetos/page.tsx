import PageTitle from '../components/PageTitle';

const boxData = [
  {
    subtitle1: 'Sites.Sistemas.Aplicativos',
    subtitleClass: 'pl-1',
    title: 'Projetos',
    titleClass: 'text-6xl',
    key: 1,
  },
];

export default function Projects() {
  return (
    <>
      {boxData.map((item) => (
        <PageTitle
          subtitle1={item.subtitle1}
          subtitleClass={item.subtitleClass}
          title={item.title}
          titleClass={item.titleClass}
          key={item.key}
        />
      ))}
    </>
  );
}
