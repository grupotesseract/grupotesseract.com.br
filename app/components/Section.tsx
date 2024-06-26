import IconTitleDescription from './IconTitleDescription';
import contact from '../../assets/image/contact.svg';
import gears from '../../assets/image/gears.svg';
import list from '../../assets/image/list.svg';

export default function Section() {
  const sectionData = [
    {
      icon: gears,
      title: 'Outsourcing',
      description:
        '<b> Alocamos profissionais ou equipes completas</b> na sua empresa por um período indeterminado, onde os mesmos possam contribuir para o crescimento das suas soluções.',
      key: 1,
    },
    {
      icon: list,
      title: 'Desenvolvimento de Sistemas',
      description:
        '<b>Cuidamos de toda a gestão do projeto e equipe</b> de desenvolvimento para tirar sua ideia do papel e transformá-la em um produto escalável com os mais altos padrões de qualidade.',
      key: 2,
      titleClass: 'flex text-center pt-4 pb-4',
    },
    {
      icon: contact,
      title: 'Consultoria',
      description:
        'Oferecemos também <b>análises aprofundadas de aplicações</b> em PHP e JavaScript, bem como otimizações e medidas de segurança para ambientes AWS e pipelines de CI/CD.',
      key: 3,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-around gap-16 xl:flex-row lg:mt-20">
      {sectionData.map(function (item) {
        return (
          <IconTitleDescription
            icon={item.icon}
            title={item.title}
            description={item.description}
            key={item.key}
            titleClass={item.titleClass}
            visible={true}
          />
        );
      })}
    </div>
  );
}
