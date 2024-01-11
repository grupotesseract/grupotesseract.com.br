import logoCredito from '../../assets/image/logoCredito.png';
import logoAletheia from '../../assets/image/logoAletheia.png';
import DepositoinsBox from './DepositionsBox';

export const slides = [
  {
    image: logoCredito,
    description:
      'Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação. Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação.',
    user: 'Nome da pessoa',
    name: 'Crédito Rotativo',
    key: '1',
  },
  {
    image: logoAletheia,
    description:
      'Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação. Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação.',
    user: 'Nome da pessoa',
    name: 'Aletheia',
    key: '2',
  },
  {
    image: logoCredito,
    description:
      'Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação. Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação.',
    user: 'Nome da pessoa',
    name: 'Nome da empresa',
    key: '3',
  },
  {
    image: logoAletheia,
    description:
      'Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação. Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação.',
    user: 'Nome da pessoa',
    name: 'Nome da empresa',
    key: '4',
  },
];

export default function Depositions() {
  return (
    <div className="depositions flex">
      {slides.map((s) => {
        // eslint-disable-next-line react/jsx-key
        return (
          <DepositoinsBox
            image={s.image}
            description={s.description}
            user={s.user}
            name={s.name}
            key={s.key}
          />
        );
      })}
    </div>
  );
}
