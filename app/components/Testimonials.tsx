import logoCredito from '../../assets/image/logoCredito.png';
import logoAletheia from '../../assets/image/logoAletheia.png';
import TestimonialsBox from './TestimonialsBox';

export const slides = [
  {
    image: logoCredito.src,
    description: 'Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação. Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação.',
    user: 'Nome da pessoa',
    name: 'Crédito Rotativo',
    key: '1',
  },
  {
    image: logoAletheia.src,
    description: 'Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação. Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação.',
    user: 'Nome da pessoa',
    name: 'Aletheia',
    key: '2',
  },
  {
    image: logoCredito.src,
    description: 'Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação. Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação.',
    user: 'Nome da pessoa',
    name: 'Nome da empresa',
    key: '3',
  },
  {
    image: logoAletheia.src,
    description: 'Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação. Depoimento da empresa sobre a experiência dos serviços prestados pelo grupo Tesseract e feedback sobre a interação.',
    user: 'Nome da pessoa',
    name: 'Nome da empresa',
    key: '4',
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials flex">
      {slides.map((slide) => {
        return (
          <TestimonialsBox
            image={slide.image}
            description={slide.description}
            user={slide.user}
            name={slide.name}
            key={slide.key}
          />
        );
      })}
    </div>
  );
}
