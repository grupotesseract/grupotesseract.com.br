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
  const logoData = [
    {
      logo: logoPhp,
      logoName: 'logo-php',
      logoClass: 'flex',
      width: 150,
      height: 150,
      size: true,
      key: 1,
    },
    {
      logo: logoJavaScript,
      logoName: 'logo-javascript',
      width: 100,
      height: 100,
      key: 2,
    },
    {
      logo: logoReact,
      logoName: 'logo-react',
      width: 80,
      height: 90,
      key: 3,
    },
    {
      logo: logoLaravel,
      logoName: 'logo-laravel',
      width: 150,
      height: 150,
      size: true,
      key: 4,
    },
  ];

  const logoData1 = [
    {
      logo: logoCss,
      logoName: 'logo-css',
      logoClass: 'flex',
      width: 100,
      height: 100,
      key: 5,
    },
    {
      logo: logoFrame,
      logoName: 'logo-frame',
      width: 70,
      height: 75,
      key: 6,
    },
    {
      logo: logoCypress,
      logoName: 'logo-cypress',
      width: 150,
      height: 150,
      size: true,
      key: 7,
    },
    {
      logo: logoReactNative,
      logoName: 'logo-react-native',
      width: 200,
      height: 200,
      key: 8,
    },
    {
      logo: logoNest,
      logoName: 'logo-nest',
      width: 90,
      height: 90,
      key: 9,
    },
  ];
  const logoData2 = [
    {
      logo: logoDocker,
      logoName: 'logo-docker',
      logoClass: 'flex',
      width: 150,
      height: 150,
      size: true,
      key: 10,
    },
    {
      logo: logoAws,
      logoName: 'logo-aws',
      width: 150,
      height: 150,
      size: true,
      key: 11,
    },
  ];

  const renderFirstRow = () => {
    return logoData.map(function (item) {
      return (
        <Logotypes
          logo={item.logo}
          logoName={item.logoName}
          logoClass={item.logoClass}
          size={item.size}
          width={item.width}
          height={item.height}
          key={item.key}
        />
      );
    });
  };

  const renderSecondRow = () => {
    return logoData1.map(function (item) {
      return (
        <Logotypes
          logo={item.logo}
          logoName={item.logoName}
          logoClass={item.logoClass}
          size={item.size}
          width={item.width}
          height={item.height}
          key={item.key}
        />
      );
    });
  };

  const renderThirdRow = () => {
    return logoData2.map(function (item) {
      return (
        <Logotypes
          logo={item.logo}
          logoName={item.logoName}
          logoClass={item.logoClass}
          size={item.size}
          width={item.width}
          height={item.height}
          key={item.key}
        />
      );
    });
  };

  return (
    <div className="flex justify-center my-60 w-screen h-404">
      <div className="flex flex-col justify-center relative">
        <h1 className="text-lightBlue font-semibold text-4xl">Trabalhos</h1>
        <h1 className="w-96 text-5xl font-extrabold uppercase">
          Múltiplas Tecnologias
        </h1>
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="flex justify-center gap-4">{renderFirstRow()}</div>
        <div className="flex justify-center gap-4">{renderSecondRow()}</div>
        <div className="flex justify-center gap-4">
          {renderThirdRow()}
          <div className="flex justify-center items-center w-52 h-28 bg-grayScale ">
            <h1 className="text-white text-4xl uppercase">Ci/Cd</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
