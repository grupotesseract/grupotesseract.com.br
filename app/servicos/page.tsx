import BoxLogotypes from '@/components/BoxLogotypes';
import PageTitle from '@/components/PageTitle';
import PreContentText from '@/components/PreContentText';
import TeamInformation from '@/components/TeamInformation';
import TextWithBox from '@/components/TextWithBox';

const boxData = [
  {
    subtitle1: 'Outsourcing',
    subtitle2: 'Desenvolvimento de Sistemas',
    subtitle3: 'Consultoria',
    subtitleClass: 'lg:pl-1',
    title: 'Nossos Serviços',
    titleClass: 'text-6xl',
    key: 1,
  },
];

export default function Services() {
  return (
    <>
      <div>
        {boxData.map((item) => (
          <PageTitle
            subtitle1={item.subtitle1}
            subtitle2={item.subtitle2}
            subtitle3={item.subtitle3}
            subtitleClass={item.subtitleClass}
            title={item.title}
            titleClass={item.titleClass}
            key={item.key}
          />
        ))}
        <PreContentText />
      </div>
      <div className="min-w-full">
        <TeamInformation />
      </div>
      <BoxLogotypes />
      <TextWithBox />
    </>
  );
}
