import Link from 'next/link';
import Logo from './Logo';
import SocialMediaIcons from './SocialMediaIcons';
import Triangles from './Triangles';

export default function Footer() {
  const copyRight = '2023 © All rights reserved. Grupo Tesseract.';
  const contact = 'Entre em contato';
  const email = 'tesseract@email.com.br';

  return (
    <>
      <footer className="relative bottom-0 left-0 h-404 bg-opacity-20 bg-gray">
        <Triangles />
        <div className="flex flex-row-reverse justify-between pl-8">
          <div>
            <nav className="flex pt-20 pr-44 pb-8 pl-10 md:max-xl:pr-16">
              <ul className="flex">
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/aboutus">Quem Somos</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/services">Serviços</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/projects">Projetos</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/career">Carreira</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/contact">Contato</Link>
                </li>
              </ul>
            </nav>
            <div className="flex justify-between text-xl text-white border-t-4 border-lightBlue pt-10 pr-40 pb-10 pl-10  md:max-xl:pr-20">
              <div className="pl-2">
                <h3 className="20px">{contact}</h3>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email"
                >
                  {` ${email}`}
                </a>
              </div>
              <SocialMediaIcons />
            </div>
          </div>
          <div className="pt-16 pl-40 md:max-xl:pl-24">
            <Logo width={322} height={222} />
          </div>
        </div>
        <div>
          <p className="flex justify-end text-xl pt-2 pr-44 relative text-white opacity-50 md:max-xl:pr-16">
            {copyRight}
          </p>
        </div>
      </footer>
    </>
  );
}
