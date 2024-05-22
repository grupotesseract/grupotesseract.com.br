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
        <div className="flex flex-col-reverse justify-between items-center xl:pl-8 lg:flex-row-reverse">
          <div>
            <nav className="hidden pt-20 pr-16 pb-8 pl-10 lg:flex lg:pr-44">
              <ul className="flex">
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/quemsomos">Quem Somos</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/servicos">Serviços</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/projetos">Projetos</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/carreira">Carreira</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="p-2 text-xl text-white uppercase">
                  <Link href="/contato">Contato</Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col justify-between text-xl text-center text-white pt-2 gap-2 lg:flex-row lg:pt-10 lg:pr-40 lg:pb-10 lg:pl-10 xl:pr-20 lg:border-lightBlue lg:border-t-4">
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
          <div className="xl:pt-8 xl:pl-40">
            <Logo width={322} height={222} />
          </div>
        </div>
        <div>
          <p className="flex justify-center text-xl pt-2 lg:pr-44 relative text-white opacity-50 lg:justify-end xl:pr-16">
            {copyRight}
          </p>
        </div>
      </footer>
    </>
  );
}
