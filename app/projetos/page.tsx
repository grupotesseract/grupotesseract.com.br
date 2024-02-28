import PageTitle from '../components/PageTitle';

const boxData = [
  {
    subtitle1: 'Sites.Sistemas.Aplicativos',
    subtitleClass: 'pl-1',
    title: 'Projetos',
    key: 1,
  },
];

export default function Projects() {
  return (
    <>
      {boxData.map(function (item) {
        return (
          <PageTitle
            subtitle1={item.subtitle1}
            subtitleClass={item.subtitleClass}
            title={item.title}
            key={item.key}
          />
        );
      })}
    </>
  );
}
