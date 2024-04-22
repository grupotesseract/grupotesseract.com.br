import IconText from '../components/IconText';
import contact from '@/assets/image/contact.svg';

export default function Career() {
  const data = [
    {
      icon: contact,
      iconClass: 'w-40 h-40',
      text: 'Cultura profissional colaborativa',
      textClass: 'text-2xl font-bold text-gray pl-4',
      key: 1,
    },
    {
      icon: contact,
      iconClass: 'w-40 h-40',
      text: 'Sistema de apoio interno',
      textClass: 'text-2xl font-bold text-gray pl-4',
      key: 2,
    },
    {
      icon: contact,
      iconClass: 'w-40 h-40',
      text: 'Variedade de tecnologias',
      textClass: 'text-2xl font-bold text-gray pl-4',
      key: 3,
    },
    {
      icon: contact,
      iconClass: 'w-40 h-40',
      text: 'Trabalho 100% remoto',
      textClass: 'text-2xl font-bold text-gray pl-4',
      key: 4,
    },
  ];
  return (
    <>
      <div>
        <h1 className="title-page flex justify-center mt-52 font-extrabold text-white">
          Se junte a nossa equipe
        </h1>
      </div>
      <div className="flex items-center mt-52 gap-8">
        {data.map((item) => {
          return (
            <IconText
              key={item.key}
              icon={item.icon.src}
              iconClass={item.iconClass}
              text={item.text}
              textClass={item.textClass}
              iconName={'icone'}
              width={166}
              height={166}
            />
          );
        })}
      </div>
    </>
  );
}
