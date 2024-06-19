import logoPhp from 'assets/image/new-php-logo.svg';
import logoJavaScript from 'assets/image/javascript-logo.svg';
import logoReact from 'assets/image/react.svg';
import logoLaravel from 'assets/image/logo-laravel.svg';
import logoCss from 'assets/image/logo-css.svg';
import logoFrame from 'assets/image/Frame.svg';
import logoCypress from 'assets/image/logo-cypress-atual.svg';
import logoReactNative from 'assets/image/logo-react-native.svg';
import logoNest from 'assets/image/logo-nest-atual.svg';
import logoDocker from 'assets/image/logo-docker.svg';
import logoAws from 'assets/image/logo-aws-atual.svg';
import logoCiCd from 'assets/image/logo-ci-cd.svg';
import Logotypes from '@/components/Logotypes';

export default function BoxLogotypes() {
  const allLogos = [
    {
      logo: logoPhp,
      logoName: 'logo-php',
      logoClass: 'bg-inherit',
      width: 190,
      height: 190,
      column: 1,
      key: 1,
    },
    {
      logo: logoJavaScript,
      logoName: 'logo-javascript',
      logoClass: 'bg-inherit',
      width: 100,
      height: 100,
      column: 1,
      key: 2,
    },
    {
      logo: logoCss,
      logoName: 'logo-css',
      logoClass: 'bg-inherit',
      width: 70,
      height: 75,
      column: 1,
      key: 5,
    },
    {
      logo: logoFrame,
      logoName: 'logo-frame',
      logoClass: 'bg-inherit',
      width: 55,
      height: 55,
      column: 1,
      key: 6,
    },
    {
      logo: logoLaravel,
      logoName: 'logo-laravel',
      logoClass: 'bg-inherit max-w-none',
      width: 150,
      height: 150,
      size: true,
      column: 2,
      key: 4,
    },
    {
      logo: logoReact,
      logoName: 'logo-react',
      logoClass: 'bg-inherit',
      width: 50,
      height: 50,
      column: 2,
      key: 3,
    },
    {
      logo: logoNest,
      logoName: 'logo-nest',
      logoClass: 'bg-inherit max-w-none',
      width: 150,
      height: 150,
      column: 2,
      key: 9,
    },
    {
      logo: logoCypress,
      logoName: 'logo-cypress',
      logoClass: 'pr-4 bg-inherit max-w-none',
      width: 170,
      height: 170,
      column: 2,
      key: 7,
    },
    {
      logo: logoReactNative,
      logoName: 'logo-react-native',
      logoClass: 'bg-inherit',
      width: 200,
      height: 200,
      column: 2,
      key: 8,
    },
    {
      logo: logoDocker,
      logoName: 'logo-docker',
      logoClass: 'flex-[1_1_50%]  max-w-none bg-inherit',
      width: 100,
      height: 100,
      size: true,
      column: 3,
      key: 10,
    },
    {
      logo: logoCiCd,
      logoName: 'logo-ci-cd',
      logoClass: 'bg-inherit max-w-none',
      width: 100,
      height: 100,
      size: true,
      column: 3,
      key: 11,
    },
    {
      logo: logoAws,
      logoName: 'logo-aws',
      logoClass: 'bg-inherit',
      width: 100,
      height: 100,
      size: true,
      column: 3,
      key: 11,
    },
  ];

  const renderCol = (column: number) =>
    allLogos
      .filter((logoItem) => logoItem.column === column)
      .map((item) => (
        <Logotypes
          logo={item.logo}
          logoName={item.logoName}
          logoClass={item.logoClass}
          key={item.key}
          width={item.width}
          height={item.height}
        />
      ));

  return (
    <div className="flex flex-col items-center mt-32 gap-8 lg:flex-row lg:justify-evenly lg:gap-0 lg:mt-40 xl:max-w-[1300px] xl:m-auto xl:mt-40">
      <div className="flex flex-wrap gap-4 justify-center w-64">
        {renderCol(1)}
      </div>
      <div className="flex flex-wrap gap-8 justify-center w-96">
        {renderCol(2)}
      </div>
      <div className="flex flex-wrap justify-center w-56 gap-8">
        {renderCol(3)}
      </div>
    </div>
  );
}
