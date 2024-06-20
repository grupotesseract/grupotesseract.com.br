import IconText from '@/components/IconText';
import contact from '@/assets/image/contact.svg';
import DashedBox from '../components/DashedBox';

export default function Career() {
  const data = [
    {
      icon: contact,
      text: 'Cultura profissional colaborativa',
      textClass: 'text-2xl text-center font-bold text-gray',
      key: 1,
    },
    {
      icon: contact,
      text: 'Sistema de apoio interno',
      textClass: 'text-2xl text-center font-bold text-gray',
      key: 2,
    },
    {
      icon: contact,
      text: 'Variedade de tecnologias',
      textClass: 'text-2xl text-center font-bold text-gray',
      key: 3,
    },
    {
      icon: contact,
      text: 'Trabalho 100% remoto',
      textClass: 'text-2xl text-center font-bold text-gray',
      key: 4,
    },
  ];
  return (
    <>
      <div>
        <h1 className="title-page flex justify-center mt-20 text-4xl font-extrabold text-center text-white uppercase lg:mt-52 lg:text-7xl">
          Se junte a nossa equipe
        </h1>
      </div>
      <DashedBox />
      <div className="flex flex-col justify-center items-center mt-24 p-6 gap-16 lg:flex-row lg:flex-wrap xl:flex-nowrap lg:mt-52 lg:gap-8 2xl:max-w-[1300px] 2xl:m-auto">
        {data.map((item) => {
          return (
            <IconText
              key={item.key}
              icon={item.icon.src}
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
