import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <>
      <div className="flex justify-between absolute mt-8 md:ml-8 lg:pl-24 lg:m-8">
        <Link href="/">
          <Logo width={200} height={100} />
        </Link>
      </div>
      <div className="h-200">
        <Menu />
      </div>
    </>
  );
}
