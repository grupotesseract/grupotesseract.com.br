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
import Logotypes from './Logotypes';

export default function MultiTechnology() {
  const allLogos = [
    {
      logo: logoPhp,
      logoName: 'logo-php',
      logoClass: 'flex',
      width: 120,
      height: 120,
      size: true,
      key: 1,
      line: 1,
    },
    {
      logo: logoJavaScript,
      logoName: 'logo-javascript',
      width: 100,
      height: 100,
      key: 2,
      line: 1,
    },
    {
      logo: logoReact,
      logoName: 'logo-react',
      width: 80,
      height: 90,
      key: 3,
      line: 1,
    },
    {
      logo: logoLaravel,
      logoName: 'logo-laravel',
      logoClass: 'max-w-none',
      width: 150,
      height: 150,
      size: true,
      key: 4,
      line: 1,
    },
    {
      logo: logoCss,
      logoName: 'logo-css',
      logoClass: 'flex',
      width: 100,
      height: 100,
      key: 5,
      line: 2,
    },
    {
      logo: logoFrame,
      logoName: 'logo-frame',
      width: 70,
      height: 75,
      key: 6,
      line: 2,
    },
    {
      logo: logoCypress,
      logoName: 'logo-cypress',
      width: 170,
      height: 170,
      size: true,
      key: 7,
      line: 2,
    },
    {
      logo: logoReactNative,
      logoName: 'logo-react-native',
      width: 200,
      height: 200,
      key: 8,
      line: 2,
    },
    {
      logo: logoNest,
      logoName: 'logo-nest',
      logoClass: 'max-w-none',
      width: 100,
      height: 100,
      key: 9,
      line: 2,
    },
    {
      logo: logoDocker,
      logoName: 'logo-docker',
      logoClass: 'flex',
      width: 150,
      height: 150,
      size: true,
      key: 10,
      line: 3,
    },
    {
      logo: logoAws,
      logoName: 'logo-aws',
      width: 100,
      height: 100,
      size: true,
      key: 11,
      line: 3,
    },
    {
      logo: logoCiCd,
      logoName: 'logo-ci-cd',
      logoClass: 'max-w-none',
      width: 150,
      height: 150,
      size: true,
      key: 11,
      line: 3,
    },
  ];

  const renderRow = (line?: number) =>
    allLogos
      .filter((logoItem) => logoItem.line === line)
      .map((item) => (
        <Logotypes
          logo={item.logo}
          logoName={item.logoName}
          logoClass={item.logoClass}
          size={item.size}
          width={item.width}
          height={item.height}
          key={item.key}
        />
      ));

  return (
    <div className="flex flex-col justify-center my-60 w-screen p-8 h-404 xl:flex-row lg:gap-8 xl:w-full">
      <div className="flex flex-col pb-12 relative items-center lg:justify-center xl:items-start xl:pr-20">
        <h1 className="text-lightBlue font-semibold text-4xl pb-6">Trabalho</h1>
        <h1 className="technology-text w-96 text-4xl text-center font-extrabold uppercase lg:text-5xl xl:text-start">
          Múltiplas Tecnologias
        </h1>
      </div>
      <div className="flex flex-col justify-evenly gap-8">
        <div className="flex justify-center gap-4">{renderRow(1)}</div>
        <div className="flex justify-center gap-4">{renderRow(2)}</div>
        <div className="flex justify-center gap-4">{renderRow(3)}</div>
      </div>
    </div>
  );
}
