import IconTitleDescription from './IconTitleDescription';
import contact from '../../docs/image/contact.svg';
import gears from '../../docs/image/gears.svg';
import list from '../../docs/image/list.svg';

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
    <div className="flex items-center justify-around mt-20 md:max-xl:flex-col md:max-xl:gap-16">
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
