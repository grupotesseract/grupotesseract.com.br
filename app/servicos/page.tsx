import PageTitle from '../components/PageTitle';
import TeamInformation from '../components/TeamInformation';

const boxData = [
  {
    subtitle1: 'Outsourcing',
    subtitle2: 'Desenvolvimento de Sistemas',
    subtitle3: 'Consultoria',
    subtitleClass: 'pl-1',
    title: 'Nossos Serviços',
    key: 1,
  },
];

export default function Services() {
  return (
    <>
      <div>
        {boxData.map(function (item) {
          return (
            <PageTitle
              subtitle1={item.subtitle1}
              subtitle2={item.subtitle2}
              subtitle3={item.subtitle3}
              subtitleClass={item.subtitleClass}
              title={item.title}
              key={item.key}
            />
          );
        })}
      </div>
      <div className="min-w-full">
        <TeamInformation />
      </div>
    </>
  );
}
