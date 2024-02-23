import logoPhp from 'assets/image/new-php-logo.svg';
import logoJavaScript from 'assets/image/javascript-logo.svg';
import logoReact from 'assets/image/react.svg';
import logoLaravel from 'assets/image/logo-laravel.svg';
import logoCss from 'assets/image/logo-css.svg';
import logoFrame from 'assets/image/Frame.svg';
import logoCypress from 'assets/image/logo-cypress.svg';
import logoReactNative from 'assets/image/logo-react-native.svg';
import logoNest from 'assets/image/logo-nest.svg';
import logoDocker from 'assets/image/logo-docker.svg';
import logoAws from 'assets/image/logo-aws.svg';
import Logotypes from './Logotypes';

export default function MultiTechnology() {
  const allLogos = [
    {
      logo: logoPhp,
      logoName: 'logo-php',
      logoClass: 'flex',
      width: 150,
      height: 150,
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
      width: 150,
      height: 150,
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
      width: 90,
      height: 90,
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
    <div className="flex justify-center my-60 h-404">
      <div className="flex flex-col justify-center pr-20 relative">
        <h1 className="text-lightBlue font-semibold text-4xl pb-6">Trabalho</h1>
        <h1 className="technology-text w-96 text-5xl font-extrabold uppercase">
          Múltiplas Tecnologias
        </h1>
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="flex justify-center gap-4">{renderRow(1)}</div>
        <div className="flex justify-center gap-4">{renderRow(2)}</div>
        <div className="flex justify-center gap-4">
          {renderRow(3)}
          <div className="flex justify-center items-center w-52 h-28 bg-grayScale ">
            <h1 className="text-white text-4xl uppercase">Ci/Cd</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
