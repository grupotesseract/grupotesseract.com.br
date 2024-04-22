import CompanyCulture from '../components/CompanyCulture';
import IconText from '../components/IconText';
import TeamMemberList from '../components/TeamMemberList';
import TextWithButton from '../components/TextWithButton';
import contact from '@/assets/image/contact.svg';

export default function AboutUs() {
  const data = [
    {
      icon: contact,
      iconClass: 'w-48 h-48',
      text: 'Cultura profissional colaborativa',
      textClass: 'text-2lg font-bold text-gray pl-4',
      key: 1,
    },
    {
      icon: contact,
      iconClass: 'w-48 h-48',
      text: 'Sistema de apoio interno',
      textClass: 'text-2lg font-bold text-gray pl-4',
      key: 2,
    },
    {
      icon: contact,
      iconClass: 'w-48 h-48',
      text: 'Variedade de tecnologias',
      textClass: 'text-2lg font-bold text-gray pl-4',
      key: 3,
    },
    {
      icon: contact,
      iconClass: 'w-48 h-48',
      text: 'Trabalho 100% remoto',
      textClass: 'text-2lg font-bold text-gray pl-4',
      key: 4,
    },
  ];
  return (
    <>
      <div>
        <CompanyCulture />
        <div className="flex justify-center items-center gap-24 mt-52 pl-2 pr-2">
          {data.map((item) => {
            return (
              <IconText
                key={item.key}
                icon={item.icon.src}
                iconClass={item.iconClass}
                text={item.text}
                textClass={item.textClass}
                iconName={'icone'}
                width={195}
                height={195}
              />
            );
          })}
        </div>
        <TeamMemberList />
        <TextWithButton />
      </div>
    </>
  );
}
