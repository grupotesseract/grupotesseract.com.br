import CompanyCulture from '@/components/CompanyCulture';
import IconText from '@/components/IconText';
import TeamMemberList from '@/components/TeamMemberList';
import TextWithButton from '@/components/TextWithButton';
import contact from '@/assets/image/contact.svg';

export default function AboutUs() {
  const data = [
    {
      icon: contact,
      iconClass: 'w-40 h-40',
      text: 'Cultura profissional colaborativa',
      textClass: 'text-2xl text-center font-bold text-gray pl-4 lg:text-2lg',
      key: 1,
    },
    {
      icon: contact,
      iconClass: 'w-40 h-40',
      text: 'Sistema de apoio interno',
      textClass: 'text-2xl text-center font-bold text-gray pl-4 lg:text-2lg',
      key: 2,
    },
    {
      icon: contact,
      iconClass: 'w-40 h-40',
      text: 'Variedade de tecnologias',
      textClass: 'text-2xl text-center font-bold text-gray pl-4 lg:text-2lg',
      key: 3,
    },
    {
      icon: contact,
      iconClass: 'w-40 h-40',
      text: 'Trabalho 100% remoto',
      textClass: 'text-2xl text-center font-bold text-gray pl-4 lg:text-2lg',
      key: 4,
    },
  ];
  return (
    <>
      <div>
        <CompanyCulture />
        <div className="flex flex-col justify-center items-center gap-20 mt-24 pr-4 lg:flex-row lg:flex-wrap xl:flex-nowrap xl:gap-24 xl:mt-52 2xl:max-w-[1300px] 2xl:m-auto 2xl:mt-48">
          {data.map((item) => {
            return (
              <IconText
                key={item.key}
                icon={item.icon.src}
                iconClass={item.iconClass}
                text={item.text}
                textClass={item.textClass}
                iconName={'icone'}
                width={175}
                height={175}
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
